import "./InferenceResult.css";
import React, { Component } from "react";
import _ from "lodash";
import { Table, Layout, Tag, Spin } from "antd";
import { ExperimentContext } from "../../context/ExperimentContext";

const { Content } = Layout;

function processName(str) {
  var lower = str
    .split(",")[0]
    .split(" ")
    .slice(1)
    .join(" ");
  var result = lower.charAt(0).toUpperCase() + lower.substr(1);
  return result;
}

class InferenceResult extends Component {
  processResponseFeatures(response) {
    response = _.sortBy(response, ["probability"]).reverse();
    response.forEach(function(item, index) {
      item["name"] = processName(item["name"]);
    });
    return response.slice(0, 10);
  }

  render() {
    const responseHeader = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Probability",
        dataIndex: "probability",
        key: "probability"
      }
    ];

    let predictContent;
    if (this.props.context.result == null) {
      predictContent = (
        <div style={{ width: "100%", marginTop: "20%", marginLeft: "50%" }}>
          <Spin size="large" />
        </div>
      );
    } else {
      predictContent = (
        <div>
          {this.props.context.imageUrls.map((url, index) => (
            <div
              style={{
                marginTop: "40px",
                marginLeft: "20%",
                marginRight: "20%"
              }}
            >
              <img
                src={url}
                style={{ width: "60%", marginLeft: "20%", marginRight: "20%" }}
              />
              {this.props.context.result.map(result => (
                <div>
                  <div style={{ marginTop: "40px" }}>
                    <h1 style={{ textAlign: "center" }}>
                      {result.model.name + " V" + result.model.version}
                      <Tag style={{ marginLeft: "20px" }} color="#E84A27">
                        {result.framework.name +
                          " V" +
                          result.framework.version}
                      </Tag>
                    </h1>
                    {result.traceId ? (
                      <h1 style={{ textAlign: "center" }}>
                        <a
                          href={`http://trace.mlmodelscope.org:16686/trace/${
                            result.traceId
                          }`}
                        >
                          {" "}
                          Trace{" "}
                        </a>
                      </h1>
                    ) : null}
                    <Table
                      dataSource={this.processResponseFeatures(
                        result.response[index].features
                      )}
                      columns={responseHeader}
                      showHeader={true}
                      pagination={false}
                      style={{
                        width: "60%",
                        marginLeft: "20%",
                        marginRight: "20%",
                        marginTop: "20px"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return (
      <Layout style={{ background: "#E8E9EB", margin: "0px 20px 120px 20px" }}>
        <Content style={{}}>
          <div
            style={{
              background: "#1A263A",
              color: "white",
              paddingTop: "30px",
              paddingBottom: "60px"
            }}
          >
            <h2
              style={{ marginTop: "60px", marginLeft: "40px", color: "white" }}
            >
              Inference Result
            </h2>
          </div>

          {predictContent}
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
