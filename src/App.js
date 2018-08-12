import React, { Component } from "react";
import data from "./data/wat-departures.json";

class App extends Component {
  render() {
    const allServices = data.services;
    return (
      <div>
        {allServices.map(service => {
          return (
            <div
              key={
                service.serviceIdentifier + service.destinationList[0]["crs"]
              }
            >
              {service.destinationList[0]["crs"]}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
