import "./LandingPage.css";
import { Row, Col, Button, Icon, Card } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Section5 extends Component {
  render() {
    return (
      <div className="LandingPage-section5">
        <Row className="LandingPage-title" type="flex">
          <Col span={12} offset={6}>
            <h2 style={{ marginTop: "20px", color: "black" }}>
              A common platform that shields heterogeneity (frameworks, datasets, models, hardware
              configurations) away from you so that you can focus on what you need to accomplish.{" "}
            </h2>
          </Col>
        </Row>
      </div>
    );
  }
}
