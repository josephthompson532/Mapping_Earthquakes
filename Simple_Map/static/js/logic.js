// Add console.log to check to see if our code is working.
console.log("working");


let map = L.map("mapid", {
  center: [
    34, -120
  ],
  zoom: 6
})


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

streets.addTo(map);

L.circleMarker([34,-118], {
  color: 'black',
  fillColor: 'yellow',
  fillOpacity: .3,
  radius: 300
}).addTo(map);





