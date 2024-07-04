import Component from "./Component.js";
import FooterClass from "./FooterClass.js";
import NavbarClass from "./NavbarClass.js";
import { showLoader, hideLoader } from "../components/Loader.js";

class DiscoverClass extends Component {
  constructor() {
    super();
    this.navbar = new NavbarClass();
    this.footer = new FooterClass();
    this.state = {
      displayedArticles: new Set(),
      content: '',
      articleContent: ''
    };
    this.initializeScraping = this.initializeScraping.bind(this);
    this.scrapeSite = this.scrapeSite.bind(this);
    this.scrapeArticle = this.scrapeArticle.bind(this);
  }

  async initializeScraping() {
    await this.scrapeSite();
    setInterval(this.scrapeSite, 20000);
  }

  async scrapeSite() {
    showLoader();
    const response = await fetch("https://olympics.com/fr/paris-2024/infos");
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
  
    const articles = doc.querySelectorAll('ul[data-cy="content-list-containter"] > li');
    let newContent = '<ul class="space-y-4">';
    let newArticles = false;
  
    articles.forEach((article) => {
      const linkElement = article.querySelector('a[data-cy="link"]');
      const titleElement = article.querySelector('h3[data-cy="title"]');
      const imageElement = article.querySelector("img");
      const spanElement = article.querySelector(".text--tag");
  
      if (linkElement && titleElement && imageElement) {
        const title = titleElement.textContent.trim();
        const href = linkElement.href;
        const imgSrc = imageElement.src;
  
        if (!this.state.displayedArticles.has(href)) {
          this.state.displayedArticles.add(href);
          newArticles = true;
  
          newContent += `<li class="flex items-center space-x-4 cursor-pointer p-4 bg-base-200 rounded-lg hover:bg-base-300" data-url="${href}">
            <div class="w-32 h-24 overflow-hidden rounded-lg shadow-md">
              <img src="${imgSrc}" alt="${title}" class="w-full h-full object-cover">
            </div>
            <span class="text-lg font-semibold text-base-content">${title}</span>
            ${
              spanElement
                ? `<span class="badge badge-primary">${spanElement.textContent}</span>`
                : ""
            }
          </li>`;
        }
      }
    });
  
    if (newArticles) {
      newContent += "</ul>";
      this.setState({ content: newContent }, () => {
        document.querySelectorAll("li[data-url]").forEach((item) => {
          item.addEventListener("click", (event) => {
            const url = event.currentTarget.getAttribute("data-url");
            this.scrapeArticle(url);
          });
        });
      });
    }
    hideLoader();
  }

  async scrapeArticle(url) {
    showLoader();
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const articleSection = doc.querySelector("body > div > section");
    if (articleSection) {
      articleSection.querySelectorAll("a").forEach((link) => link.remove());
      articleSection.querySelectorAll("p").forEach((p) => {
        if (p.textContent.includes("LIRE AUSSI") || p.textContent.includes("Related content") || p.textContent.includes("TO READ")) {
          p.remove();
        }
      });
      articleSection.querySelectorAll("ul").forEach((ul) => {
        if (ul.textContent.trim() === "") {
          ul.remove();
        }
      });
      articleSection.querySelectorAll("strong").forEach((strong) => {
        strong.outerHTML = strong.innerHTML;
      });

      const athleteLikeSection = articleSection.querySelector("#athlete-you-may-like");
      if (athleteLikeSection) {
        athleteLikeSection.remove();
      }
      articleSection.querySelectorAll("section").forEach((section) => {
        const span = section.querySelector("span");
        if (span && (span.textContent.includes("Ajoutez-les à vos favoris") || span.textContent.includes("Ajoutez-le à vos favoris"))) {
          section.remove();
        }
      });

      const authorElement = articleSection.querySelector('[data-cy="story-header-author"]');
      if (authorElement) {
        const author = authorElement.textContent.trim();
        const authorElementParent = authorElement.parentElement;
        authorElementParent.innerHTML = `<span class="text-sm text-secondary">Rédigé par ${author}</span>`;
        authorElementParent.classList.add("text-center");
      }
      articleSection.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((header) => {
        header.classList.add("my-4", "font-bold", "text-base-content");
      });
      articleSection.querySelectorAll("p").forEach((p) => {
        p.classList.add("my-2", "text-base-content", "leading-relaxed");
      });
      articleSection.querySelectorAll("img").forEach((img) => {
        img.classList.add("my-4", "rounded-lg", "shadow-md", "mx-auto");
      });
      articleSection.querySelectorAll("ul, ol").forEach((list) => {
        list.classList.add("list-disc", "ml-5", "my-2", "text-base-content");
      });

      const firstDiv = articleSection.querySelector("div:not([class])");
      if (firstDiv) {
        firstDiv.classList.add("mx-9");
      }

      const caption = articleSection.querySelector('section[data-cy="caption"]');
      if (caption) {
        caption.classList.add("text-center", "text-sm", "text-secondary", "mb-6");
      }

      const h1 = articleSection.querySelector("h1");
      if (h1) {
        h1.classList.add("text-center", "text-3xl");
      }

      const h2 = articleSection.querySelectorAll("h2");
      if (h2) {
        h2.forEach((h) => {
          h.classList.add("text-2xl", "my-4");
        });
      }

      const VerifiedIcon = articleSection.querySelectorAll('img[alt="Community Verified icon"]');
      if (VerifiedIcon) {
        VerifiedIcon.forEach((icon) => {
          icon.remove();
        });
      }

      const articleContent = articleSection.innerHTML;
      this.setState({ articleContent });
      const back = document.getElementById("back");
      if (back) {
        back.style.visibility = "visible";
      }
    } else {
      this.setState({ articleContent: '<p class="text-red-500">Contenu de l\'article non trouvé.</p>' });
    }
    hideLoader();
  }

  componentDidMount() {
    this.initializeScraping();
  }

  render() {
    return {
      tag: "div",
      children: [
        this.navbar.render(),
        {
          tag: "div",
          props: { class: "container mx-auto p-5" },
          children: [
            {
              tag: "h1",
              props: { class: "text-3xl font-bold text-center" },
              children: ["Découvrir"],
            },
            {
              tag: "p",
              props: { class: "text-center text-base-content" },
              children: ["Découvrez les meilleurs endroits à visiter et les événements à ne pas manquer lors des Jeux Olympiques 2024 à Paris."],
            },
            {
              tag: "div",
              props: { id: "content", class: "rounded-lg shadow-md mt-5 2xl:container mx-auto px-0 2xl:px-44 py-2" },
              children: [ { tag: "div", props: { innerHTML: this.state.content } } ],
            },
            {
              tag: "div",
              props: { id: "article-content", class: "container mx-auto my-8 p-4 rounded-lg shadow-md hidden" },
              children: [ { tag: "div", props: { innerHTML: this.state.articleContent } } ],
            },
          ],
        },
        this.footer.render(),
      ],
    };
  }
}

export default DiscoverClass;
