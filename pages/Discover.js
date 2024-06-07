import Navbar from "../components/Navbar.js";

export default function Discover() {
  const div = document.createElement("div");
  div.appendChild(Navbar());
  
  const mainContent = document.createElement("div");
  mainContent.className = "container mx-auto p-5";
  
  const contentDiv = document.createElement("div");
  contentDiv.id = "content";
  contentDiv.className = "container mx-auto my-8 p-4 rounded-lg shadow-md";
  div.appendChild(contentDiv);
  
  const articleContentDiv = document.createElement("div");
  articleContentDiv.id = "article-content";
  articleContentDiv.className = "container mx-auto my-8 p-4 rounded-lg shadow-md hidden";
  div.appendChild(articleContentDiv);
  
  const title = document.createElement("h1");
  title.textContent = "Découvrir";
  title.className = "text-3xl font-bold text-center";
  mainContent.appendChild(title);
  
  const description = document.createElement("p");
  description.textContent = "Découvrez les dernières informations sur les Jeux Olympiques de Paris 2024.";
  description.className = "text-center text-base-content";
  mainContent.appendChild(description);
  
  div.appendChild(mainContent);
  document.body.appendChild(div);
  
  const displayedArticles = new Set();
  
  async function scrapeSite() {
    const response = await fetch('https://olympics.com/fr/paris-2024/infos');
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    
    // const articles = doc.querySelectorAll('.Mosaic-styles__ItemsContainer-sc-d682610a-0 .CardItem-styles__Wrapper-sc-84f1ea3f-20'); 5 Articles
    const articles = doc.querySelectorAll('ul[data-cy="content-list-containter"] > li');
    let newContent = '<ul class="space-y-4">';
    let newArticles = false;

    articles.forEach(article => {
      const linkElement = article.querySelector('a[data-cy="link"]');
      const titleElement = article.querySelector('h3[data-cy="title"]');
      const imageElement = article.querySelector('img');
      const spanElement = article.querySelector('.text--tag');
      
      if (linkElement && titleElement && imageElement) {
        const title = titleElement.textContent.trim();
        const href = linkElement.href;
        const imgSrc = imageElement.src;
        
        if (!displayedArticles.has(href)) {
          displayedArticles.add(href);
          newArticles = true;
          
          newContent += `<li class="flex items-center space-x-4 cursor-pointer p-4 bg-base-200 rounded-lg hover:bg-base-300" data-url="${href}">
              <div class="w-32 h-24 overflow-hidden rounded-lg shadow-md">
                <img src="${imgSrc}" alt="${title}" class="w-full h-full object-cover">
              </div>
              <span class="text-lg font-semibold text-base-content">${title}</span>
              ${spanElement ? `<span class="badge badge-primary">${spanElement.textContent}</span>` : ''}
            </li>`;
        }
      }
    });
    
    if (newArticles) {
      newContent += '</ul>';
      document.getElementById('content').innerHTML = newContent;
      
      document.querySelectorAll('li[data-url]').forEach(item => {
        item.addEventListener('click', function () {
          const url = this.getAttribute('data-url');
          scrapeArticle(url);
        });
      });
    }
  }
  
  async function scrapeArticle(url) {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    document.getElementById('content').classList.add('hidden');
    window.scrollTo(0, 0);
    
    const articleSection = doc.querySelector('body > div > section');
    if (articleSection) {
      const backToTopBtn = document.getElementById('back-to-top');
      if (backToTopBtn) {
        backToTopBtn.remove();
      }
      articleSection.querySelectorAll('a').forEach(link => link.remove());
      articleSection.querySelectorAll('p').forEach(p => {
        if (p.textContent.includes('LIRE AUSSI')) {
          p.remove();
        }
        if (p.textContent.includes('Related content')) {
          p.remove();
        }
        if (p.textContent.includes('TO READ')) {
          p.remove();
        }
      });
      articleSection.querySelectorAll('ul').forEach(ul => {
        if (ul.textContent.trim() === '') {
          ul.remove();
        }
      });
      articleSection.querySelectorAll('strong').forEach(strong => {
        strong.outerHTML = strong.innerHTML;
      });
      const athleteLikeSection = articleSection.querySelector('#athlete-you-may-like');
      if (athleteLikeSection) {
        athleteLikeSection.remove();
      }
      articleSection.querySelectorAll('section').forEach(section => {
        if (section.querySelector('span') && section.querySelector('span').textContent.includes('Ajoutez-les à vos favoris')) {
          section.remove();
        }
        if (section.querySelector('span') && section.querySelector('span').textContent.includes('Ajoutez-le à vos favoris')) {
          section.remove();
        }
      });
      
      const authorElement = articleSection.querySelector('[data-cy="story-header-author"]');
      if (authorElement) {
        const author = authorElement.textContent.trim();
        const authorElementParent = authorElement.parentElement;
        authorElementParent.innerHTML = `<span class="text-sm text-secondary">Rédigé ${author}</span>`;
        authorElementParent.classList.add('text-center');
      }
      articleSection.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(header => {
        header.classList.add('my-4', 'font-bold', 'text-base-content');
      });
      articleSection.querySelectorAll('p').forEach(p => {
        p.classList.add('my-2', 'text-base-content', 'leading-relaxed');
      });
      articleSection.querySelectorAll('img').forEach(img => {
        img.classList.add('my-4', 'rounded-lg', 'shadow-md', 'mx-auto');
      });
      articleSection.querySelectorAll('ul, ol').forEach(list => {
        list.classList.add('list-disc', 'ml-5', 'my-2', 'text-base-content');
      });
      
      const firstDiv = articleSection.querySelector('div:not([class])');
      if (firstDiv) {
        firstDiv.classList.add('mx-9');
      }
      
      const caption = articleSection.querySelector('section[data-cy="caption"]');
      if (caption) {
        caption.classList.add('text-center', 'text-sm', 'text-secondary' ,'mb-6');
      }
      
      const h1 = articleSection.querySelector('h1');
      if (h1) {
        h1.classList.add('text-center', 'text-3xl');
      }

      const h2 = articleSection.querySelectorAll('h2');
      if (h2) {
        h2.forEach(h => {
          h.classList.add('text-2xl', 'my-4');
        });
      }

      const VerifiedIcon = articleSection.querySelectorAll('img[alt="Community Verified icon"]');
      if (VerifiedIcon) {
        VerifiedIcon.forEach(icon => {
          icon.remove();
        });
      }
      
      const articleContent = articleSection.innerHTML;
      document.getElementById('article-content').innerHTML = articleContent;
      articleContentDiv.classList.remove('hidden');

      const back = document.createElement('div');
      back.innerHTML = '<i class="fas fa-arrow-left mr-2"></i>';
      back.innerHTML += '<span>Retour</span>';
      back.id = 'back';
      back.style.left = '50%';
      back.style.visibility = 'hidden';
      back.style.transform = 'translateX(-50%)';
      back.classList.add('fixed', 'bottom-4', 'btn', 'text-white', 'px-4', 'py-2', 'rounded-lg', 'shadow-md', 'cursor-pointer' ,'btn-primary');
      back.addEventListener('click', function () {
        articleContentDiv.classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
        back.remove();
        window.scrollTo(0, 0);
      });
      document.body.appendChild(back);
      setTimeout(() => {
        back.style.visibility = 'visible';
      }, 500);
      

    } else {
      document.getElementById('article-content').innerHTML = '<p class="text-red-500">Contenu de l\'article non trouvé.</p>';
    }
  }
  
  scrapeSite();
  
  setInterval(s => {
    scrapeSite();
    console.log('actualisaiton des articles');
  }
  , 20000);
  
  return div;
}
