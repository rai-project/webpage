import "./LandingPage.css";
import { Row, Col, Card, Button } from "antd";
import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div className="LandingPage-introduction">
        <Row className="LandingPage-title">
          <p style={{ fontSize: "15pt", marginTop: "100px", color: "white" }}>
            {" "}
            FIND THE MOST EFFECTIVE
            <br />
            MACHINE LEARNING SETUP{" "}
          </p>
        </Row>
        <Row className="LandingPage-content">
          <p style={{ fontSize: "10pt", textAlign: "center", color: "white" }}>
            Find exactly what you need by exploring and reviewing results of{" "}
            <br />
            different AI experiment configurations; without the hassle of <br />
            installation.
          </p>
        </Row>
        <div style={{ marginTop: "20px" }} align="center">
          <a className="button2" href="Experiment">
            COMPARE
          </a>
        </div>
      </div>
    );
  }
}
