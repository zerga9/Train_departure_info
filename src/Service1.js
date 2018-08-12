import React, { Component } from "react";
import data from "./data/WAT-service-origin-W92931-2018-04-24.json";
import moment from "moment";
import {
  Container,
  styles,
  TitleContainer,
  Col1,
  Col2,
  Container2,
  Col3,
  SecondSp
} from "./serviceDetailsStyles";

class Service1 extends Component {
  render() {
    const allStops = data.service.stops;

    return (
      <div>
        <Container>
          <TitleContainer style={styles}>
            <div>
              <div>
                <span>Waterloo to Basingstoke</span>
                <ul>operated by {data.service.serviceOperator}</ul>
              </div>
              <div>
                {allStops.map(function(stop) {
                  return (
                    <Container2 key={stop.location.crs}>
                      <Col1>
                        {stop.arrival.scheduled
                          ? moment(stop.arrival.scheduled.scheduledTime).format(
                              "HH:mm"
                            )
                          : moment(
                              stop.departure.scheduled.scheduledTime
                            ).format("HH:mm")}
                      </Col1>
                      <Col2>
                        <SecondSp>{stop.location.crs}</SecondSp>
                      </Col2>
                      <Col3>
                        Plat.
                        {stop.departure.scheduled
                          ? stop.departure.scheduled.scheduledPlatform
                          : "--"}
                        <SecondSp>
                          {stop.departure.scheduled &&
                          !stop.departure.realTime.realTimeServiceInfo
                            .hasDeparted
                            ? "Est " +
                              moment(
                                stop.departure.realTime.realTimeServiceInfo
                                  .realTime
                              ).format("HH:mm")
                            : stop.departure.scheduled &&
                              stop.departure.realTime.realTimeServiceInfo
                                .hasDeparted
                              ? "Dep " +
                                moment(
                                  stop.departure.realTime.realTimeServiceInfo
                                    .realTime
                                ).format("HH:mm")
                              : "Est " +
                                moment(
                                  stop.arrival.scheduled.scheduledTime
                                ).format("HH:mm")}
                        </SecondSp>
                      </Col3>
                    </Container2>
                  );
                })}
              </div>
            </div>
          </TitleContainer>
        </Container>
      </div>
    );
  }
}
export default Service1;
