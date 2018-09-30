import "./LandingPage.css";
import { Row, Col, Icon } from "antd";
import React, { Component } from "react";
import Image2 from "../../resources/img/2.jpg";

export default class Section7 extends Component {
  render() {
    return (
      <div className="LandingPage-section7">
        <Row>
          <Col>
            <img
              style={{ position: "absolute", marginLeft: "125px", marginTop: "50px" }}
              src={Image2}
              alt=""
            />
          </Col>
          <h3
            style={{
              color: "black",
              position: "absolute",
              marginLeft: "785px",
              marginTop: "165px",
            }}
          >
            NO SETUP
          </h3>
          <h2
            style={{
              color: "black",
              position: "absolute",
              marginLeft: "785px",
              marginTop: "220px",
            }}
          >
            Take away the pain of comparing <br />
            tools by eliminating the cumbersome <br />
            installation process and the stress of
            <br />
            sorting dependencies.
          </h2>
          <a
            className="buttonsec6"
            style={{
              textAlign: "left",
              position: "absolute",
              marginLeft: "785px",
              marginTop: "385px",
            }}
            href="/"
          >
            EXPLORE ENVIRONMENT <Icon style={{ fontSize: 20 }} size="large" type="arrow-right" />
          </a>
        </Row>
      </div>
    );
  }
}
