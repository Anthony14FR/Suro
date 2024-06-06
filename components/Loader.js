export default function Loader() {
    function showLoader() {
      const loader = document.createElement("div");
      loader.id = "loader";
      loader.style.position = "fixed";
      loader.style.top = "0";
      loader.style.left = "0";
      loader.style.width = "100%";
      loader.style.height = "100%";
      loader.style.display = "flex";
      loader.style.alignItems = "center";
      loader.style.justifyContent = "center";
      loader.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      loader.style.zIndex = "9999";
  
      const spinner = document.createElement("div");
      spinner.style.border = "16px solid #f3f3f3";
      spinner.style.borderRadius = "50%";
      spinner.style.borderTop = "16px solid #3498db";
      spinner.style.width = "120px";
      spinner.style.height = "120px";
      spinner.style.animation = "spin 2s linear infinite";
  
      loader.appendChild(spinner);
      document.body.prepend(loader);
  
      const style = document.createElement("style");
      style.innerHTML = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
  
      return loader;
    }
  
    function removeLoader(loader) {
      if (loader) {
        loader.remove();
      }
    }
  
    const initialLoader = showLoader();
  
    window.addEventListener("load", () => {
      removeLoader(initialLoader);
    });
  }
  