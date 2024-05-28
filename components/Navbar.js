export default function Navbar() {
    const nav = document.createElement("nav");
    nav.className = "bg-gray-800 p-4";
  
    const container = document.createElement("div");
    container.className = "container mx-auto flex justify-between items-center";
  
    const logo = document.createElement("a");
    logo.href = "/";
    logo.className = "text-white text-xl font-bold";
    logo.textContent = "Suro";
  
    const links = document.createElement("div");
    links.className = "flex space-x-4";
  
    const pages = [
      { href: "/", text: "Home" },
      { href: "/About", text: "About" },
    ];
  
    pages.forEach(page => {
      const link = document.createElement("a");
      link.href = page.href;
      link.className = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
      link.textContent = page.text;
      links.appendChild(link);
    });
  
    container.appendChild(logo);
    container.appendChild(links);
    nav.appendChild(container);
  
    return nav;
  }
  