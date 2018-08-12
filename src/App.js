import React, { Component } from "react";
import data from "./data/wat-departures.json";
import moment from "moment";
import { HashRouter } from "react-router-dom";
import {
  styles,
  Container,
  Col1,
  Col2,
  Col3,
  SecondSp,
  LinkStyled
} from "./trainDeparturesStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    const allServices1 = data.services;
    const allServices = allServices1.filter(
      service => service.destinationList[0]["crs"] !== "WAT"
    );
    return (
      <div>
        <HashRouter>
          <div style={styles}>
            <header>
              <h1>
                <FontAwesomeIcon icon={faTrain} size="2x" />
                <ul>Departures from London Waterloo</ul>
              </h1>
            </header>
            {allServices.map(service => {
              return (
                <Container
                  key={
                    service.serviceIdentifier +
                    service.destinationList[0]["crs"]
                  }
                >
                  <LinkStyled
                    to={`/serviceDetails/${service.serviceIdentifier}`}
                  >
                    <Col1>
                      <span>
                        {moment(service.scheduledInfo.scheduledTime).format(
                          "HH:mm"
                        )}
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
                  </LinkStyled>
                </Container>
              );
            })}
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
