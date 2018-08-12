import React, { Component } from "react";
import data from "./data/wat-departures.json";
import moment from "moment";
import { styles, Container, Col1 } from "./trainDeparturesStyles";

class App extends Component {
  render() {
    const allServices1 = data.services;
    const allServices = allServices1.filter(
      service => service.destinationList[0]["crs"] !== "WAT"
    );
    return (
      <Container style={styles}>
        {allServices.map(service => {
          return (
            <div
              key={
                service.serviceIdentifier + service.destinationList[0]["crs"]
              }
            >
              <Col1>
                {moment(service.scheduledInfo.scheduledTime).format("HH:mm")}
              </Col1>
              <div>{service.destinationList[0]["crs"]}</div>
              <div>
                Plat.{service.scheduledInfo.scheduledPlatform
                  ? service.scheduledInfo.scheduledPlatform
                  : "--"}
              </div>
              <div>
                {service.scheduledInfo.scheduledTime ===
                service.realTimeUpdatesInfo.realTimeServiceInfo.realTime
                  ? "On Time"
                  : "Delayed"}
              </div>
            </div>
          );
        })}
      </Container>
    );
  }
}

export default App;
