let spotsDataCache = null;

async function fetchSpots() {
  const response = await fetch('../src/assets/spots.json');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export default async function loadSpots() {
  if (spotsDataCache !== null) {
    return spotsDataCache;
  }

  try {
    spotsDataCache = await fetchSpots();
  } catch (error) {
    console.error('Error loading spots data:', error);
    throw error;
  }

  return spotsDataCache;
}