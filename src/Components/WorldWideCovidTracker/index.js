
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Columns from "react-columns";
import SearchBar from "../SearchComponent";

function WwTracker() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountry, setSearchCountry] = useState("") // May need to move to App level 


  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries")
      ])
      .then(responseArr => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
        console.log(responseArr[1].data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

//this corrects the search bar
//regardless of case
  const filterCountry = results.filter(item => {
    return searchCountry && item.country.toLowerCase().startsWith(searchCountry.toLowerCase());
  })

  // reuseable component
  const countries = filterCountry.map((data, i) => {
    return (
      <Card
      // changed from i to data.country, because the key would not change when the list is re-rendered because of filter,i it can use old children
        key={data.country}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases: {data.cases}</Card.Text>
          <Card.Text>Deaths: {data.deaths}</Card.Text>
          <Card.Text>Recovered: {data.recovered}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];

  //function for button component
  function testClick() {
    console.log("component works");
  }

  return (
    <div>
      <br />
      <h2 style={{ textAlign: "center" }}>Covid-19 Live Stats</h2>
      <br />
      <CardDeck>
        <Card
          bg="secondary"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>{latest.cases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>

        <Card
          bg="danger"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>{latest.deaths}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>

        <Card
          bg="success"
          text="white"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>{latest.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>

      </CardDeck>

      <SearchBar searchCountry={searchCountry} setSearchCountry={setSearchCountry} placeholderText="Search for a country, to see COVID-19 stats..." />

      <Columns queries={queries}>{countries}</Columns>

    </div>
  );

}
export default WwTracker;
