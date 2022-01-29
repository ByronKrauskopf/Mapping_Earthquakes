//add console log for debugging
console.log('working');

//Create map object with center and zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//Coordinates for line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create polyline using line coordinates
L.polyline(line, {
    color: 'yellow'
}).addTo(map);

//Create the tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})

//Add 'greymap' tile layer to the map
streets.addTo(map);
