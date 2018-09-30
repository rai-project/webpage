import React, { Component } from "react";
import { Layout, Spin } from "antd";

const { Content } = Layout;

export default class SelectMachine extends Component {
  render() {
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
              Select the machine
            </h2>
          </div>

          <Spin tip="Coming Soon...">
            <div style={{ marginTop: "80px", width: "100%", height: "100%" }}>

            </div>
          </Spin>

        </Content>
      </Layout>
    );
  }
}
