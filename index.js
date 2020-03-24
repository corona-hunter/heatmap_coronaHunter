const latitude = '-26.99259'
const longitude = '-51.17597'

const mymap = L.map('mapid').setView([latitude, longitude], 18);
L.marker([latitude, longitude]).addTo(mymap)

const attribution = '&copy; contribuidores do <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);