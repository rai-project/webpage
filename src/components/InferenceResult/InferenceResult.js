import "./InferenceResult.css";
import React, { Component } from "react";
import { Layout } from "antd";
import { ExperimentContext } from "../../context/ExperimentContext";
import ImageInferenceResult from "./ImageInferenceResult";
import DatasetInferenceResult from "./DatasetInferenceResult";

const { Content } = Layout;

class InferenceResult extends Component {
  render() {
    let resultContent = this.props.context.imageUrls.length === 0 ? <DatasetInferenceResult /> : <ImageInferenceResult />;
    return (
      <Layout style={{ background: "#E8E9EB", margin: "0px 20px 120px 20px" }}>
        <Content style={{}}>
          <div
            style={{
              background: "#1A263A",
              color: "white",
              paddingTop: "30px",
              paddingBottom: "60px",
            }}
          >
            <h2 style={{ marginTop: "60px", marginLeft: "40px", color: "white" }}>
              Inference Result
            </h2>
          </div>

          {resultContent}
        </Content>
      </Layout>
    );
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <InferenceResult {...props} context={context} />}
  </ExperimentContext.Consumer>
);