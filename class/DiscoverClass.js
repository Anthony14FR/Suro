import Component from "./Component.js";
import FooterClass from "./FooterClass.js";
import NavbarClass from "./NavbarClass.js";

class DiscoverClass extends Component {
  constructor(props) {
    super(props);
    this.navbar = new NavbarClass();
    this.footer = new FooterClass();
    this.state = {
      displayedArticles: new Set(),
      articles: [],
    };
  }

  componentDidMount() {
    this.initializeScraping();
  }

  async initializeScraping() {
    const displayedArticles = new Set();
  
    const scrapeSite = async () => {
      const response = await fetch("https://olympics.com/fr/paris-2024/infos");
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");
  
      const articles = doc.querySelectorAll(
        'ul[data-cy="content-list-containter"] > li'
      );
  
      let newArticlesData = [];
  
      articles.forEach((article) => {
        const linkElement = article.querySelector('a[data-cy="link"]');
        const titleElement = article.querySelector('h3[data-cy="title"]');
        const imageElement = article.querySelector("img");
  
        if (linkElement && titleElement && imageElement) {
          const title = titleElement.textContent.trim();
          const href = linkElement.href;
          const imgSrc = imageElement.src;
  
          if (!displayedArticles.has(href)) {
            displayedArticles.add(href);
            newArticlesData.push({
              href: href,
              title: title,
              imgSrc: imgSrc,
            });
          }
        }
      });
  
      if (newArticlesData.length > 0) {
        this.setState({ articles: [...this.state.articles, ...newArticlesData] });
      }
    }
  
    scrapeSite();
  
    setInterval(() => {
      scrapeSite();
      console.log("actualisation des articles");
    }, 20000);
  }

  createArticleCard(article) {
    return {
      tag: 'div',
      props: {
        class: 'card cursor-pointer p-4 bg-base-200 rounded-lg hover:bg-base-300',
        'data-url': article.href,
        onClick: () => window.open(article.href, '_blank'),
      },
      children: [
        {
          tag: 'img',
          props: {
            src: article.imgSrc,
            alt: article.title,
            class: 'w-full h-48 object-cover rounded-lg shadow-md',
          },
        },
        {
          tag: 'div',
          props: { class: 'p-4' },
          children: [
            {
              tag: 'h2',
              props: { class: 'text-lg font-semibold text-base-content' },
              children: [article.title],
            },
          ],
        },
      ],
    };
  }

  render() {
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
              props: { class: 'text-center text-base-content' },
              children: [
                'Découvrez les meilleurs endroits à visiter et les événements à ne pas manquer lors des Jeux Olympiques 2024 à Paris.',
              ],
            },
            {
              tag: 'div',
              props: {
                id: 'content',
                class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5',
              },
              children: this.state.articles.map(article => this.createArticleCard(article)),
            },
          ],
        },
        { tag: FooterClass },
      ],
    };
  }
}

export default DiscoverClass;
