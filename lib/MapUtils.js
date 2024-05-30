import Card from "../components/Card.js";

export function handleSortChange(sites, sortType, updateView, map, cardContainer) {
  console.log("handleSortChange called with sortType:", sortType);
  const sortedSites = [...sites].sort((a, b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return sortType === "recent" ? dateB - dateA : dateA - dateB;
  });
  console.log("Sorted sites:", sortedSites);
  updateView(sortedSites, map, cardContainer);
}

export function handleFilterChange(sites, gameType, updateView, map, cardContainer) {
  console.log("handleFilterChange called with gameType:", gameType);
  const filteredSites = sites.filter((site) => {
    return gameType === "paralympic"
      ? site.category_id.includes("venue-paralympic")
      : site.category_id.includes("venue-olympic");
  });
  console.log("Filtered sites:", filteredSites);
  updateView(filteredSites, map, cardContainer);
}

export function handleSportChange(sites, sport, updateView, map, cardContainer) {
  console.log("handleSportChange called with sport:", sport);
  const filteredSites = sites.filter((site) => site.sports.includes(sport));
  console.log("Filtered sites by sport:", filteredSites);
  updateView(filteredSites, map, cardContainer);
}

export function updateView(data, map, container) {
  console.log("updateView called with data:", data);
  container.innerHTML = "";
  const layersToRemove = [];
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      layersToRemove.push(layer);
    }
  });
  layersToRemove.forEach(layer => map.removeLayer(layer));

  data.forEach((record) => {
    const { nom_site: name, sports, start_date: startDate, end_date: endDate, latitude, longitude, code_site } = record;
    const lat = parseFloat(latitude.replace(",", "."));
    const lng = parseFloat(longitude.replace(",", "."));

    const marker = L.marker([lat, lng], { color: 'blue' }).addTo(map);
    const popupContent = `
    <div class="flex flex-col">
      <b>${name}</b><br>
      Sports: ${sports}<br>
      <button class="btn bg-green-primary hover:bg-green-200 text-white dark:bg-green-primary dark:hover:bg-green-200 dark:text-white text-xs flex items-center mt-3" onclick="navigateToSpots('${code_site}', '${name}', '${lat}', '${lng}', '${sports}', '${startDate}', '${endDate}')">Find Spots</button>
    </div>
    `;
    marker.bindPopup(popupContent);

    const card = Card(
      name,
      sports,
      startDate,
      endDate,
      "View on Map",
      () => map.setView([lat, lng], 15),
      lat,
      lng
    );
    container.appendChild(card);
  });
}

// Fonction pour naviguer vers la page Spots
window.navigateToSpots = (codeSite, name, lat, lng, sports, startDate, endDate) => {
  const params = new URLSearchParams({
    codeSite,
    name,
    lat,
    lng,
    sports,
    startDate,
    endDate
  });
  window.location.href = `/spots?${params.toString()}`;
};

export function getSportsList(sites) {
  const sportsSet = new Set();
  sites.forEach((site) => {
    site.sports.split(", ").forEach((sport) => sportsSet.add(sport));
  });
  return Array.from(sportsSet);
}
