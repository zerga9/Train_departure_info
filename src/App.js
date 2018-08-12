import React, { Component } from "react";
import data from "./data/wat-departures.json";
import moment from "moment";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  backgroundColor: "#d1f4ec",
  width: "100%",
  padding: "5px 15px 0"
};

class App extends Component {
  render() {
    const allServices1 = data.services;
    const allServices = allServices1.filter(
      service => service.destinationList[0]["crs"] !== "WAT"
    );
    return (
      <div style={styles}>
        {allServices.map(service => {
          return (
            <div
              key={
                service.serviceIdentifier + service.destinationList[0]["crs"]
              }
            >
              <div>{service.destinationList[0]["crs"]}</div>
              <div>
                {moment(service.scheduledInfo.scheduledTime).format("HH:mm")}
              </div>
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
      </div>
    );
  }
}

export default App;
