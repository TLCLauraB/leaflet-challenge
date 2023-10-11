# leaflet-challenge
**Title:** Using JavaScript and LeafletJS to Map Earthquake Data </br>
**Homework Repo for Challenge 15** </br>
**Author:** Laura Bishop (TLCLauraB) </br>

# Introduction
Using data collected by the [United States Geological Survey](https://www.usgs.gov/programs/earthquake-hazards), I used Python, JavaScript, and LeafletJS to create an 'Earthquake Visualization' website. The HTML and CSS were provided by edX Boot Camps LLC, but I created the JSON file to run the website.

I used data collected in the last 30 days as of October 11, 2023.

<img src="https://github.com/TLCLauraB/leaflet-challenge/blob/main/images/image1-20231011.png">

Understanding the data is updated every 30 seconds, I downloaded the geoJSON data into a file as backup.

<img src="https://github.com/TLCLauraB/leaflet-challenge/blob/main/images/image2-20231011.png">

In this challenge, I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding!) on issues facing our planet.

<img src="https://github.com/TLCLauraB/leaflet-challenge/blob/main/images/image3-20231011.png">

# Overview
I received help and support from my fellow Data Viz classmates during class time, through Slack, and via our Discord server. I regularly attended both the before and after-class office hours.

I reviewed the Monday, October 2, 2023 class recording titled "Data Visualization with Leaflet" to refresh myself on how to create tile layer to apply the USGS data.

I used the [ANSS Comprehensive Earthquake Catalog (ComCat) Documentation](https://earthquake.usgs.gov/data/comcat/index.php) to pull apart the USGS results. However, it was the homework assignment that gave me the clue I was looking for: **Hint:** The depth of the earth can be found as the third coordinate for each earthquake. 

I spent longer than I care to admit looking for the depth event term.

EXAMPLE OF DATA FROM UNITED STATES GEOLOGICAL SURVEY EARTHQUAKE HAZARD API:
```
{
    "type": "Feature",
    "properties": {
        "mag": 6.3,
        "place": "191 km N of Hirara, Japan",
        "time": 1695043283535,
        "updated": 1695748805722,
        "tz": null,
        "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us7000kwg2",
        "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000kwg2.geojson",
        "felt": 42,
        "cdi": 4.3,
        "mmi": 3.999,
        "alert": "green",
        "status": "reviewed",
        "tsunami": 0,
        "sig": 629,
        "net": "us",
        "code": "7000kwg2",
        "ids": ",us7000kwg2,",
        "sources": ",us,",
        "types": ",dyfi,ground-failure,losspager,moment-tensor,origin,phase-data,shakemap,",
        "nst": 165,
        "dmin": 2.324,
        "rms": 0.84,
        "gap": 21,
        "magType": "mww",
        "type": "earthquake",
        "title": "M 6.3 - 191 km N of Hirara, Japan"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [125.2312, 26.5312, 176]
    },
    "id": "us7000kwg2"
}
```

## Part 1: Create the Earthquake Visualization
The result index page can be found here: [https://github.com/TLCLauraB/leaflet-challenge/blob/main/Leaflet-Part-1/index.html](https://github.com/TLCLauraB/leaflet-challenge/blob/main/Leaflet-Part-1/index.html)</br>
Part 1 can be found here: [https://github.com/TLCLauraB/leaflet-challenge/tree/main/Leaflet-Part-1](https://github.com/TLCLauraB/leaflet-challenge/tree/main/Leaflet-Part-1) </br>
The 'logic.js' file provided by the Starter Code can be found here: [https://github.com/TLCLauraB/leaflet-challenge/blob/main/Leaflet-Part-1/static/js/logic.js](https://github.com/TLCLauraB/leaflet-challenge/blob/main/Leaflet-Part-1/static/js/logic.js)

## Part 2: Gather and Plot More Data
TBD



# Documentation & Resources
  * https://leafletjs.com/examples.html
  * https://leafletjs.com/examples/quick-start/
  * https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  * https://earthquake.usgs.gov/data/comcat/index.php
  * https://geojson.org/
  * https://www.openstreetmap.org/#map=4/25.48/-93.34

