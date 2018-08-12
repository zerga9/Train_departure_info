import React, { Component } from "react";
import data from "./data/wat-departures.json";
import moment from "moment";
import {
  styles,
  Container,
  Col1,
  Col2,
  Col3,
  SecondSp
} from "./trainDeparturesStyles";

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
                <span>
                  {moment(service.scheduledInfo.scheduledTime).format("HH:mm")}
                </span>
              </Col1>
              <Col2>
                <span>{service.destinationList[0]["crs"]}</span>
                <SecondSp>{service.serviceOperator}</SecondSp>
              </Col2>
              <Col3>
                Plat.{service.scheduledInfo.scheduledPlatform
                  ? service.scheduledInfo.scheduledPlatform
                  : "--"}
                <SecondSp>
                  {service.scheduledInfo.scheduledTime ===
                  service.realTimeUpdatesInfo.realTimeServiceInfo.realTime
                    ? "On Time"
                    : "Delayed"}
                </SecondSp>
              </Col3>
            </div>
          );
        })}
      </Container>
    );
  }
}

export default App;
