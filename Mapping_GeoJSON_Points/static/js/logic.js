//add console log for debugging
console.log('working');

//Create map object with center and zoom level
let map = L.map('mapid').setView([30, 30], 2);

//Create the tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})

//Add 'greymap' tile layer to the map
streets.addTo(map);

// Accessing airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/ByronKrauskopf/Mapping_Earthquakes/main/majorAirports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
      onEachFeature: function(feature, layer) {
          console.log(layer);
          layer.bindPopup('<h2> Airport Code: ' + feature.properties.faa + '</h2> <hr> <h3> Airport Name: ' + feature.properties.name + '</h3>');
      }
  }).addTo(map);
});
