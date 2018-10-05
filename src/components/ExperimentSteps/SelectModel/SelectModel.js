import SelectableCard from "../SelectableCard/SelectableCard";
import React, { Component } from "react";
import { Col, Row, Layout } from "antd";
import yeast from "yeast";
import { isArray, keys } from "lodash";
import { ModelManifests } from "../../../swagger";
import { ExperimentContext } from "../../../context/ExperimentContext";

const { Content } = Layout;

class SelectModel extends Component {
  async componentDidMount() {
    if (this.props.context.modelManifests == null) {
      try {
        const req = await ModelManifests({
          frameworkName: "*",
          frameworkVersion: "*",
          modelName: "*",
          modelVersion: "*",
        });
        this.props.context.setModelManifests(req.manifests);
      } catch (err) {
        console.error(err);
      }
    }
  }

  handleSelect(item) {
    this.props.context.addModel(item.name, item.version);
    console.log(this.props.context);
  }

  render() {
    const models = this.props.context.modelManifests;
    console.log(models);
    const modelsKey = keys(models).sort();

    if (!isArray(models)) {
      return <div />;
    }

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
              Select the model
            </h2>
          </div>

          <div>
            <Row gutter={16}>
              {modelsKey.map(key => (
                <Col key={yeast()} span={8} style={{ padding: "10px" }}>
                  <SelectableCard
                    item={models[key]}
                    content={
                      models[key].description
                        .split(" ")
                        .slice(0, 10)
                        .join(" ") + " ..."
                    }
                    description={models[key].description}
                    height="300px"
                    tooltip={true}
                    onClick={() => this.handleSelect(models[key])}
                  // selected={this.props.selected[item.id]}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <SelectModel {...props} context={context} />}
  </ExperimentContext.Consumer>
);
