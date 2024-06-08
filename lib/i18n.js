const translations = {
    en: null,
    fr: null,
  };
  
  async function loadTranslations(language) {
    const response = await fetch(`/locales/${language}.json`);
    translations[language] = await response.json();
  }
  
  function t(key, language) {
    return translations[language][key] || key;
  }
  
  function getCurrentLang() {
    return localStorage.getItem("language") || "en";
  }
  
  function setLanguage(language) {
    localStorage.setItem("language", language);
    window.location.reload();
  }
  
  export { loadTranslations, t, getCurrentLang, setLanguage };
  