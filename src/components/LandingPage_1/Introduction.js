import "./LandingPage.css";
import { Row, Col, Carousel } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";

function makeSlide({ tag, body, compare }) {
  return (
    <div>
      <Row type="flex">
        <Col span={6} offset={9}>
          <h1
            style={{
              marginTop: "100px",
              color: "white",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {tag}
          </h1>
        </Col>
      </Row>
      <Row type="flex">
        <Col span={6} offset={9}>
          <p
            style={{
              fontSize: "10pt",
              textAlign: "center",
              color: "white",
            }}
          >
            {body}
          </p>
        </Col>
      </Row>
      <Row type="flex">
        <Col span={6} offset={9}>
          <div style={{ marginTop: "20px" }} align="center">
            <Link
              to={"/experiment"}
              className="button2"
              style={{
                textTransform: "uppercase",
              }}
            >
              {compare}
            </Link>
            {/* <a
              className="button2"
              href="/Experiment"
              style={{
                textTransform: "uppercase",
              }}
            >
              {compare}
            </a> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

const Message1 = (() => {
  const tag = <div>Find the most effective machine learning model</div>;
  const body = (
    <div>
      Find exactly what you need by exploring and reviewing results of different AI experiment
      configurations; without the hassle of installation.
    </div>
  );
  const compare = "Compare Models";
  return makeSlide({ tag, body, compare });
})();

const Message2 = (() => {
  const tag = <div>Find the most effective machine learning framework</div>;
  const body = (
    <div>
      Find the framework to use for your model by uploading your model and evaluating its accuracy
      and performance across frameworks.
    </div>
  );
  const compare = "Compare Frameworks";
  return makeSlide({ tag, body, compare });
})();

const Message3 = (() => {
  const tag = <div>Find the most effective machine learning setup</div>;
  const body = (
    <div>
      Find exactly what you need by exploring and reviewing results of different AI experiment
      configurations; without the hassle of installation.
    </div>
  );
  const compare = "Compare Machines";
  return makeSlide({ tag, body, compare });
})();

export default class Introduction extends Component {
  render() {
    return (
      <div className="LandingPage-introduction">
        <Carousel vertical autoplay>
          {Message1}
          {Message2}
          {Message3}
        </Carousel>
      </div>
    );
  }
}
