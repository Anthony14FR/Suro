export function fetchParis2024Sites() {
  const url =
    "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=100";

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        resolve(data.results);
      })
      .catch((error) => {
        reject("There has been a problem with your fetch operation:", error);
      });
  });
}

export function fetchParis2024SiteByCode(codeSide) {
  const url = `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=100&where=code_site like "${codeSide}"`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data.results);
      })
      .catch((error) => {
        reject("There has been a problem with your fetch operation:", error);
      });
  });
}