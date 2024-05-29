import spotsData from './spots.json';

export default function loadSpots() {
  return new Promise((resolve, reject) => {
    try {
      resolve(spotsData);
    } catch (error) {
      reject(`Error loading spots: ${error}`);
    }
  });
}
