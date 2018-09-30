import "./LandingPage.css";
import { Row, Col } from "antd";
import React, { Component } from "react";
import arrow from "../../resources/img/arrow.svg";
import arrowblack from "../../resources/img/arrowblack.png";

export default class Section3 extends Component {
  render() {
    return (
      <div className="LandingPage-section3">
        <Row style={{ minHeight: "700px" }} type="flex" justify="space-around" align="middle">
          <Col
            style={{
              backgroundColor: "#CEFFF8",
              textAlign: "left",
              minHeight: "700px",
              padding: "10px",
            }}
            span={8}
          >
            <a
              style={{
                textDecoration: "none",
                marginLeft: "50px",
                marginTop: "60px",
                textTransform: "uppercase",
              }}
              className="buttonSmall"
              href="/"
            >
              FRAMEWORK
            </a>
            <p style={{ fontSize: "16pt", marginLeft: "50px", marginTop: "15px" }}>
              {" "}
              HOW TO CHOOSE RIGHT <br /> FRAMEWORK?{" "}
            </p>
            <p style={{ fontSize: "12pt", marginLeft: "50px", marginTop: "20px" }}>
              Run and compare performance and accuracy results of the same models on a wide range of
              deep learning frameworks, such as Tensorflow, MXNet, PyTorch, Caffe, Caffe2, CNTK,
              TensorRT and more. Side-by-side comparison results clearly reveal the pros and cons of
              various framework.{" "}
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              <p
                style={{
                  color: "black",
                  fontSize: "16pt",
                  marginLeft: "50px",
                  marginTop: "320px",
                  textTransform: "uppercase",
                }}
              >
                Test Your Frameworks
                <img alt="back" style={{ marginLeft: "225px" }} src={arrowblack} />{" "}
              </p>{" "}
            </a>
          </Col>
          <Col
            style={{
              backgroundColor: "#322CC9",
              textAlign: "left",
              minHeight: "700px",
              padding: "10px",
            }}
            span={8}
          >
            <a
              style={{
                textDecoration: "none",
                backgroundColor: "rgba(255, 253, 253, 0.24)",
                color: "white",
                marginLeft: "50px",
                marginTop: "60px",
                textTransform: "uppercase",
              }}
              className="buttonSmall"
              href="/"
            >
              MODELS
            </a>
            <p
              style={{
                fontSize: "16pt",
                marginLeft: "50px",
                marginTop: "15px",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {" "}
              HOW TO CHOOSE RIGHT <br /> MODELS?{" "}
            </p>
            <p style={{ fontSize: "12pt", marginLeft: "50px", marginTop: "20px", color: "white" }}>
              {" "}
              Find the latest models as published in the literature for your task (be it
              classification, object detection, tracking, machine translation and more) and directly
              run those models using either standard dataset or your own dataset - without worrying
              about the hassle of installing any software. See how those models perform and compare
              with each other and draw your own conclusion.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              <p
                style={{ fontSize: "16pt", marginLeft: "50px", marginTop: "300px", color: "white" }}
              >
                Test Your Models
                <img style={{ marginLeft: "225px" }} src={arrow} alt="" />{" "}
              </p>{" "}
            </a>
          </Col>
          <Col
            style={{
              backgroundColor: "#0170C6",
              textAlign: "left",
              minHeight: "700px",
              padding: "10px",
            }}
            span={8}
          >
            <a
              style={{
                textDecoration: "none",
                backgroundColor: "rgba(17, 0, 255, 0.37)",
                color: "white",
                marginLeft: "50px",
                marginTop: "60px",
                textTransform: "uppercase",
              }}
              className="buttonSmall"
              href="/"
            >
              MACHINES
            </a>
            <p
              style={{
                fontSize: "16pt",
                marginLeft: "50px",
                marginTop: "15px",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              {" "}
              HOW TO CHOOSE RIGHT <br /> MACHINES?{" "}
            </p>
            <p style={{ fontSize: "12pt", marginLeft: "50px", marginTop: "20px", color: "white" }}>
              Gain the insight of system performance bottlenecks across the hierarchical stacks,
              from application pipeline to model pipeline, to framework runtime pipeline, to kernel
              launching pipeline, to library and hardware instruction sets, with a rich set of
              traces collected from running the most relevant machine learning models and datasets.
              The supported hardware systems include X86, POWER, and ARM with accelerators including
              GPUS and FPGAs.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              {" "}
              <p
                style={{ fontSize: "16pt", marginLeft: "50px", marginTop: "310px", color: "white" }}
              >
                Test Your Machines
                <img alt="back" style={{ marginLeft: "225px" }} src={arrow} />{" "}
              </p>{" "}
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
