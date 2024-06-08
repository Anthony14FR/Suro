const translations = {
  en: null,
  fr: null,
  es: null,
  de: null,
  ja: null,
  ga: null
};

async function loadTranslations(language) {
  const response = await fetch(`/locales/${language}.json`);
  translations[language] = await response.json();
}

function t(key, language = getCurrentLang()) {
  if (!translations[language]) {
    throw new Error(`Translations for ${language} are not loaded yet.`);
  }
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
