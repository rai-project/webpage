import SelectableCard from "../SelectableCard/SelectableCard";
import React, { Component } from "react";
import { Col, Row, Layout, Card, Avatar, Icon } from "antd";
import yeast from "yeast";
import { withRouter } from "react-router-dom";
import { isArray, keys, uniqBy, find, findIndex, isNil, truncate } from "lodash";
import { ModelManifests } from "../../../swagger";
import { ExperimentContext } from "../../../context/ExperimentContext";

const { Content } = Layout;

class SelectModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: [],
      modelKey: [],
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

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
        const models = uniqBy(this.props.context.modelManifests, e => e.name + e.version);
        const modelsKey = keys(models).sort();
        this.setState({ models, modelsKey });
      } catch (err) {
        console.error(err);
      }
    }
  }

  handleSelect(isSelected, key) {
    const { models } = this.state;
    const model = models[key];
    if (isSelected) {
      const index = findIndex(
        this.props.context.models,
        e => e.name === model.name && e.version === model.version
      );
      this.props.context.removeModel(index);
      return;
    }
    this.props.context.addModel(model.name, model.version);
  }

  render() {
    const { models, modelsKey } = this.state;
    if (!isArray(models) || models.length === 0) {
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
              Select a model
            </h2>
          </div>
          <Row gutter={16}>
            {modelsKey.map(key => {
              const model = models[key];
              const isSelected = !isNil(
                find(
                  this.props.context.models,
                  e => e.name === model.name && e.version === model.version
                )
              );
              return (
                <Col key={`model-${key}`} span={6} style={{ paddingBottom: "10px" }}>
                  <SelectableCard
                    title={models[key].name}
                    content={truncate(models[key].description, {
                      length: 140,
                      separator: " ",
                    })}
                    descriptionTitle={`${model.name} Information`}
                    description={model.description}
                    height="150px"
                    onClick={() => this.handleSelect(isSelected, key)}
                    selected={isSelected}
                  />
                </Col>
              );
            })}
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default withRouter(props => (
  <ExperimentContext.Consumer>
    {context => <SelectModel {...props} context={context} />}
  </ExperimentContext.Consumer>
));
