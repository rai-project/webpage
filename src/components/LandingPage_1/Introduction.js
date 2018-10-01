import "./LandingPage.css";
import { Row, Col } from "antd";
import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div className="LandingPage-introduction">
        <Row type="flex">
          <Col span={8} offset={8}>
            <h1
              style={{
                marginTop: "100px",
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Find the most effective
              <br />
              machine learning setup
            </h1>
          </Col>
        </Row>
        <Row type="flex">
          <Col span={8} offset={8}>
            <p
              style={{
                fontSize: "10pt",
                textAlign: "center",
                color: "white",
              }}
            >
              Find exactly what you need by exploring and reviewing results of <br />
              different AI experiment configurations; without the hassle of <br />
              installation.
            </p>
          </Col>
        </Row>
        <Row type="flex">
          <Col span={8} offset={8}>
            <div style={{ marginTop: "20px" }} align="center">
              <a className="button2" href="Experiment">
                COMPARE
              </a>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
