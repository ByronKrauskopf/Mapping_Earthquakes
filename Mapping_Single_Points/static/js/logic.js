//add console log for debugging
console.log('working');

//Create map object with center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// //Add a marker for LA, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // Add a circle for LA, California
// let circle = L.circle([34.0522, -118.2437], {
//     radius:300,
//     color:'black',
//     fillColor:'#FFFF00'
//     }).addTo(map);

// Add a circleMarker for LA, California
let circleMarker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: '#ffffa1'
}).addTo(map);

//Create the tile layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})

//Add 'greymap' tile layer to the map
streets.addTo(map);
