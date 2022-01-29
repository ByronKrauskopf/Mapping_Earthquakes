//add console log for debugging
console.log('working');

//Create map object with center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 5);

//retreive data from cities.js
let cityData = cities;

// // Loop through cities array and create markers for each
// cityData.forEach(function(city) {
//     console.log(city)
//     L.marker(city.location)
//       .bindPopup('<h2>' + city.city + ', ' +city.state + '</h2> <hr> <h3>Population ' + city.population.toLocaleString() + '</h3>')
//       .addTo(map);
// });

//Loop through cities and create circleMarkers for each 
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/200000,
        color: 'orange',
        weight: 4
    })
      .bindPopup('<h2>' + city.city + ', ' +city.state + '</h2> <hr> <h3>Population ' + city.population.toLocaleString() + '</h3>')
      .addTo(map);
});

//Create the tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})

//Add 'greymap' tile layer to the map
streets.addTo(map);
