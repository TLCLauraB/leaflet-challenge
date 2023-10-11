// Initialize the map
let myMap = L.map("map", {
    center: [0, 0], 
    zoom: 2, 
});

// Add a base map layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(myMap);

// Load and visualize earthquake data from the USGS GeoJSON feed
let earthquakeDataUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

// Define the function to style the earthquake markers
function style(feature) {
    return {
        radius: feature.properties.mag * 5, 
        fillColor: getColor(feature.geometry.coordinates[2]), 
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
    };
}

// Define the function to get marker color based on depth
function getColor(depth) {
    if (depth < 70) return "green";
    else if (depth < 300) return "orange";
    else return "red";
}

// Load the GeoJSON data and create earthquake markers
fetch(earthquakeDataUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, style(feature));
            },
            onEachFeature: function (feature, layer) {
                const location = feature.properties.place;
                layer.bindPopup(
                    "Location: " + location + "<br>Magnitude: " + feature.properties.mag + "<br>Depth: " + feature.geometry.coordinates[2] + " km"
                );
            },
        }).addTo(myMap);
    });


// Create the legend
 let legend = L.control({ position: "bottomright" });
 legend.onAdd = function (map) {
    let div = L.DomUtil.create("div", "info legend");
    let depthRanges = ["<70 km", "70-300 km", "≥300 km"];
    let colors = ["green", "orange", "red"];
    for (let i = 0; i < depthRanges.length; i++) {
        div.innerHTML += '<i style="background:' + colors[i] + '"></i> ' + depthRanges[i] + "<br>";
    }
   return div;
 };
legend.addTo(myMap);


