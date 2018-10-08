import "./InferenceResult.css";
import React, { Component } from "react";
import _ from "lodash";
import Iframe from "react-iframe";
import { Table, Tag, Spin, Divider } from "antd";
import { ExperimentContext } from "../../context/ExperimentContext";

function processName(str) {
  var lower = str
    .split(",")[0]
    .split(" ")
    .slice(1)
    .join(" ");
  var result = lower.charAt(0).toUpperCase() + lower.substr(1);
  return result;
}

class ImageInferenceResult extends Component {
  processResponseFeatures(response) {
    response = _.sortBy(response, ["probability"]).reverse();
    response.forEach(function (item, index) {
      item["name"] = processName(item["name"]);
    });
    return response.slice(0, 10);
  }

  render() {
    const responseHeader = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Probability",
        dataIndex: "probability",
        key: "probability",
      },
    ];

    return (
      (this.props.context.result === null) ?
        <div style={{ width: "100%", marginTop: "20%", marginLeft: "50%" }}>
          <Spin size="large" />
        </div>
        :
        <div>
          {this.props.context.imageUrls.map((url, index) => (
            <div>
              <div
                style={{
                  marginTop: "40px",
                  marginLeft: "20%",
                  marginRight: "20%",
                }}
              >
                <img src={url} style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }} alt="" />
              </div>

              {this.props.context.result.map(result => {
                const traceURL = result.traceId
                  ? `http://trace.mlmodelscope.org:16686/trace/${result.traceId}`
                  : null;
                return (
                  <div>
                    <div
                      style={{
                        marginTop: "40px",
                        marginLeft: "20%",
                        marginRight: "20%",
                      }}
                    >
                      <h1 style={{ textAlign: "center" }}>
                        {result.model.name + " V" + result.model.version}
                        <Tag style={{ marginLeft: "20px" }} color="#E84A27">
                          {result.framework.name + " V" + result.framework.version}
                        </Tag>
                      </h1>
                      <Table
                        dataSource={this.processResponseFeatures(result.response[index].features)}
                        columns={responseHeader}
                        showHeader={true}
                        pagination={false}
                        style={{
                          width: "60%",
                          marginLeft: "20%",
                          marginRight: "20%",
                          marginTop: "20px",
                        }}
                      />
                    </div>

                    {result.traceId ? (
                      <div>
                        <Divider />
                        <h1 style={{ textAlign: "center" }}>
                          <a href={traceURL}> Trace </a>
                        </h1>
                        <Iframe position="relative" url={traceURL} width="100%" height="500px" />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
    );
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <ImageInferenceResult {...props} context={context} />}
  </ExperimentContext.Consumer>
);