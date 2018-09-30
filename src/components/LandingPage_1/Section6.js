import "./LandingPage.css";
import { Row, Col, Button, Icon, Card } from "antd";
import React, { Component } from "react";
import Image1 from "../../resources/img/1.jpg";
import { Link } from "react-router-dom";

export default class Section6 extends Component {
  render() {
    return (
      <div className="LandingPage-section6">
        <Row>
          <Col>
            <img
              style={{ position: "absolute", marginLeft: "125px", marginTop: "50px" }}
              src={Image1}
            />
          </Col>
          <h3
            style={{
              color: "white",
              position: "absolute",
              marginLeft: "785px",
              marginTop: "165px",
            }}
          >
            ONE PLATFORM
          </h3>
          <h2
            style={{
              color: "white",
              position: "absolute",
              marginLeft: "785px",
              marginTop: "220px",
            }}
          >
            Bring together dispersed tools into <br />
            one platform to explore the <br />
            performance of different <br />
            combinations.
          </h2>
          <a
            class="buttonsec6"
            style={{
              textAlign: "left",
              position: "absolute",
              marginLeft: "785px",
              marginTop: "385px",
            }}
            href="#"
          >
            DISCOVER PLATFORM <Icon style={{ fontSize: 20 }} size="large" type="arrow-right" />
          </a>
        </Row>
      </div>
    );
  }
}
