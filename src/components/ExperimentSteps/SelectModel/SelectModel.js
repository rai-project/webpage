import SelectableCard from "../SelectableCard/SelectableCard";
import React, { Component } from "react";
import { Col, Row, Layout } from "antd";
import models, { modelsKey } from "../../Models/Models";
import { ExperimentContext } from "../../../context/ExperimentContext";
import yeast from "yeast";

const { Content } = Layout;

export default class SelectModel extends Component {
  handleSelect(context, item) {
    context.addModel(item.model.name, item.model.version);
    console.log(context);
  }

  render() {
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
                  <ExperimentContext.Consumer>
                    {context => (
                      <SelectableCard
                        item={models[key].model}
                        content={
                          models[key].description
                            .split(" ")
                            .slice(0, 10)
                            .join(" ") + " ..."
                        }
                        description={models[key].description}
                        height="300px"
                        tooltip={true}
                        onClick={() => this.handleSelect(context, models[key])}
                        // selected={this.props.selected[item.id]}
                      />
                    )}
                  </ExperimentContext.Consumer>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}
