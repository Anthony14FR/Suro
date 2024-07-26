import Component from "../core/Component.js";
import FooterClass from "./FooterClass.js";
import NavbarClass from "./NavbarClass.js";

class DiscoverClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedArticles: new Set(),
      articles: [],
      selectedArticle: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    console.log("DiscoverClass mounted");
    this.initializeScraping();
  }

  componentWillUnmount() {
    if (this.scrapingInterval) {
      clearInterval(this.scrapingInterval);
    }
  }

  initializeScraping() {
    this.scrapeSite();
    this.scrapingInterval = setInterval(() => {
      this.scrapeSite();
      console.log("actualisation des articles");
    }, 20000);
  }

  async scrapeSite() {
    console.log("Scraping site...");
    this.setState({ isLoading: true });
    try {
      const response = await fetch("https://olympics.com/fr/paris-2024/infos");
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      const articles = doc.querySelectorAll('ul[data-cy="content-list-containter"] > li');
      let newArticlesData = [];

      articles.forEach((article) => {
        const linkElement = article.querySelector('a[data-cy="link"]');
        const titleElement = article.querySelector('h3[data-cy="title"]');
        const imageElement = article.querySelector("img");
        const spanElement = article.querySelector(".text--tag");

        if (linkElement && titleElement && imageElement) {
          const title = titleElement.textContent.trim();
          const href = linkElement.href;
          const imgSrc = imageElement.src;
          const tag = spanElement ? spanElement.textContent : "";

          if (!this.state.displayedArticles.has(href)) {
            newArticlesData.push({ href, title, imgSrc, tag });
          }
        }
      });

      if (newArticlesData.length > 0) {
        const updatedDisplayedArticles = new Set([...this.state.displayedArticles, ...newArticlesData.map(a => a.href)]);
        this.setState({ 
          articles: [...this.state.articles, ...newArticlesData],
          displayedArticles: updatedDisplayedArticles,
          isLoading: false
        });
      } else {
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.error("Error scraping site:", error);
      this.setState({ isLoading: false });
    }
  }

  
  async scrapeArticle(url) {
    console.log("Scraping article:", url);
    this.setState({ isLoading: true, selectedArticle: null });
    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        const scriptElement = doc.getElementById('__NEXT_DATA__');
        if (scriptElement) {
            const jsonContent = JSON.parse(scriptElement.textContent);
            const articleData = jsonContent.props.pageProps;

            if (articleData) {
                let articleContent = `<h1 class="text-3xl font-bold mb-4 text-center">${articleData.title}</h1>`;
                
                if (articleData.thumbnail) {
                    articleContent += `<div class="flex justify-center"><img src="${articleData.thumbnail.urlTemplate.replace("{formatInstructions}", "c_fill,w_1200")}" alt="${articleData.thumbnail.alt || ''}" class="w-6/12 h-64 object-cover mb-4"></div>`;
                }

                let content = "";
                articleData.parts.forEach(part => {
                    if (part.__typename === "TextBlock") {
                        content += `<p class="mb-4">${part.content}</p>`;
                    } else if (part.__typename === "Image") {
                        content += `<div class="flex justify-center"><img src="${part.urlTemplate.replace("{formatInstructions}", "c_fill,w_1200")}" alt="${part.alt || ''}" class="w-6/12 h-64 object-cover mb-4"></div>`;
                        if (part.description) {
                            content += `<p class="text-sm text-gray-600 mb-4 text-center">${part.description}</p>`;
                        }
                    }
                });

                content = content
                    .replace(/<\/?[^>]+(>|$)/g, "")
                    .replace(/[\[\](){}<>\\*#]/g, "") 
                    .replace(/LIRE AUSSI[^<]*/gi, "")
                    .replace(/sup>/g, "") 
                    .replace(/img src[^"]+"[^"]+"/g, "") 
                    .replace(/class="[^"]+"/g, "")
                    .replace(/alt="[^"]+"/g, "") 
                    .replace(/\s+/g, ' ') 
                    .replace(/https?:\/\/[^\s]+/g, "")
                    .trim();

                articleContent += `<div class="prose max-w-none">${content}</div>`;
                this.setState({ selectedArticle: articleContent, isLoading: false });
            } else {
                this.setState({ selectedArticle: '<p class="text-red-500">Contenu de l\'article non trouvé.</p>', isLoading: false });
            }
        } else {
            this.setState({ selectedArticle: '<p class="text-red-500">Données de l\'article non trouvées.</p>', isLoading: false });
        }
    } catch (error) {
        console.error("Error scraping article:", error);
        this.setState({ selectedArticle: '<p class="text-red-500">Erreur lors du chargement de l\'article.</p>', isLoading: false });
    }
}


  
  

  createArticleCard(article) {
    if (!article || !article.href || !article.title) {
      console.warn('Invalid article data:', article);
      return null;
    }

    return {
      tag: 'div',
      props: {
        class: 'card cursor-pointer p-4 bg-base-200 rounded-lg hover:bg-base-300',
        onClick: () => this.scrapeArticle(article.href),
      },
      children: [
        article.imgSrc ? {
          tag: 'img',
          props: {
            src: article.imgSrc,
            alt: article.title,
            class: 'w-full h-48 object-cover rounded-lg shadow-md',
          },
        } : null,
        {
          tag: 'div',
          props: { class: 'p-4' },
          children: [
            {
              tag: 'h2',
              props: { class: 'text-lg font-semibold text-base-content' },
              children: [article.title],
            },
            article.tag ? {
              tag: 'span',
              props: { class: 'badge badge-primary mt-2' },
              children: [article.tag],
            } : null,
          ].filter(Boolean),
        },
      ].filter(Boolean),
    };
  }

  render() {
    console.log("Rendering DiscoverClass");
    let content;
    if (this.state.isLoading) {
      content = {
        tag: 'div',
        props: { class: 'flex justify-center items-center h-64' },
        children: [
          {
            tag: 'div',
            props: { class: 'animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' }
          }
        ]
      };
    } else if (this.state.selectedArticle) {
      content = {
        tag: 'div',
        props: { 
          class: 'bg-base-100 p-6 rounded-lg shadow-lg mb-6',
        },
        children: [
          {
            tag: 'div',
            props: { 
              class: 'article-content prose max-w-none',
              innerHTML: this.state.selectedArticle
            }
          },
          {
            tag: 'button',
            props: {
              class: 'btn btn-primary mt-4',
              onClick: () => this.setState({ selectedArticle: null })
            },
            children: ['Retour aux articles']
          }
        ]
      };
    } else {
      content = {
        tag: 'div',
        props: {
          class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        },
        children: this.state.articles.map(article => this.createArticleCard(article)).filter(Boolean),
      };
    }

    return {
      tag: 'div',
      children: [
        { tag: NavbarClass },
        {
          tag: 'div',
          props: { class: 'container mx-auto p-5' },
          children: [
            {
              tag: 'h1',
              props: { class: 'text-3xl font-bold text-center' },
              children: ['Découvrir'],
            },
            {
              tag: 'p',
              props: { class: 'text-center text-base-content mb-5' },
              children: [
                'Découvrez les actualités des Jeux Olympiques de Paris 2024.'
              ],
            },
            content,
          ],
        },
        { tag: FooterClass },
      ],
    };
  }
}

export default DiscoverClass;