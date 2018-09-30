import SelectableCard from "../SelectableCard/SelectableCard";
import React, { Component } from "react";
import { Layout, Col, Row } from "antd";
import yeast from "yeast";
import frameworks from "../../Frameworks/Frameworks";
import { ExperimentContext } from "../../../context/ExperimentContext";
const { Content } = Layout;

export default class SelectFramework extends Component {
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
              Select the Framework
            </h2>
          </div>

          <div>
            <Row gutter={16}>
              {frameworks.map((item, index) => (
                <Col key={yeast()} span={8} style={{ padding: "10px" }}>
                  <ExperimentContext.Consumer>
                    {context => (
                      <SelectableCard
                        item={item}
                        content={"Descriptions"}
                        tooltip={true}
                        onClick={() => context.addFramework(item.name, item.version)}
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
