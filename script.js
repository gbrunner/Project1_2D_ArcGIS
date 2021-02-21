require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "dojo/domReady!"], function (esriConfig, Map, MapView, FeatureLayer) {

esriConfig.apiKey =  "AAPK6221ccc708944717801b1e737e84e229ARkRORCTCsMHPkG82l8m647wlPBVSru5T3Z9cJ0JjaSyfYk-s0mQw-UiHP3Xv8jT"; 
  
  const map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

const view = new MapView({
          map: map,
          center: [-90.35, 38.65], // Longitude, latitude
          zoom: 11.5, // Zoom level
          container: "viewDiv" // Div element
        });
  
const countyprklayer = new FeatureLayer({
  url: "https://services2.arcgis.com/w657bnjzrjguNyOy/arcgis/rest/services/Park_Boundaries/FeatureServer"
});

 map.add(countyprklayer);
  
var template = {
    title: "{stop_name}"};  

const metrolayer = new FeatureLayer({
  url: "https://services8.arcgis.com/gQbFGrxM4JkVjXE0/arcgis/rest/services/Metro_St_Louis_transit_routes/FeatureServer", 
outFields: ["*"],
popupTemplate: template});

map.add(metrolayer);
  
  metrolayer.renderer = {
      type: "simple",  
      symbol: {
        type: "simple-marker",  
        size: 6,
        color: "red",
        outline: {  
          width: 0.5,
          color: "white"
        }
      }
    };
  
});
