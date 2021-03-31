import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "../../mapdatajson/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";
import {useState} from 'react';

class MyMap extends Component {
//   state = {};

//this colors can be depending on travel ban for each country
  color = ['green', 'orange', 'red']; 
  

  componentDidMount() {
    console.log(mapData);
  }

  countryStyle = {
    fillColor: "green",
    fillOpacity: 0.5, //between 0-1
    color: "black",
    weight: 1, // border
    // dashArray: 5,
  };
  




  onCountryClick = (event) => {
    event.target.setStyle({
      color: "orange",
      fillColor: "yellow",
      fillOpacity: 0.5,
    });
    console.log("Doh");
    //we might want to add a function tu display som data or to take us to the country stats :)
  };

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName); 
    // const countryCode = country.properties.//When you click on a country, it displays the country name


    const colorIndex = 1; //we need to create a function that depending on travel ban status, a different color will be selected  
    layer.options.fillColor = this.color[colorIndex]; 



    layer.on({
      click: this.onCountryClick,
    });
  };

  

  render() {
    return (
      <div className="box">
        <h1>Map</h1>
        <MapContainer
          style={{ height: "40vh", width: "60vh" }}
          zoom={1}
          center={[20, 10]}
        >
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
      </div>
    );
  }
}

export default MyMap;
