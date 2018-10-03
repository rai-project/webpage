import React, { Component } from "react";
import { Col, Row, Icon, Dropdown, Menu, Tag, Spin } from "antd";
import SelectableCard from "../SelectableCard/SelectableCard";

const menu = (
  <Menu>
    <Menu.Item>
      <a // eslint-disable-line
        target="_blank"
        rel="noopener noreferrer"
      >
        Image
      </a>
    </Menu.Item>
    <Menu.Item>
      <a // eslint-disable-line
        target="_blank"
        rel="noopener noreferrer"
      >
        Video
      </a>
    </Menu.Item>
    <Menu.Item>
      <a // eslint-disable-line
        target="_blank"
        rel="noopener noreferrer"
      >
        Text
      </a>
    </Menu.Item>
  </Menu>
);

export default class PublicDataset extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            paddingTop: "20px",
            paddingLeft: "40px",
            backgroundColor: "#131C2D",
            height: "60px",
            color: "white",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <Dropdown overlay={menu}>
              <a // eslint-disable-line
                style={{ color: "white" }}
              >
                Data Format <Icon type="caret-down" theme="outlined" />
              </a>
            </Dropdown>
          </div>

          <div style={{ marginLeft: "40px", display: "inline-block" }}>
            <Dropdown overlay={menu}>
              <a // eslint-disable-line
                style={{ color: "white" }}
              >
                Technique <Icon type="caret-down" theme="outlined" />
              </a>
            </Dropdown>
          </div>

          <div style={{ marginLeft: "40px", display: "inline-block" }}>
            <Dropdown overlay={menu}>
              <a // eslint-disable-line
                style={{ color: "white" }}
              >
                Number of Instances <Icon type="caret-down" theme="outlined" />
              </a>
            </Dropdown>
          </div>

          <div style={{ float: "right", marginRight: "40px", display: "inline-block" }}>
            <Icon type="appstore" theme="outlined" />
          </div>

          <div style={{ float: "right", marginRight: "40px", display: "inline-block" }}>
            <Icon type="bars" theme="outlined" />
          </div>
        </div>

        <div style={{ paddingTop: "20px", paddingBottom: "20px", paddingLeft: "40px" }}>
          Filtered By:
          <Tag style={{ marginLeft: "20px" }} closable>
            IMAGE
          </Tag>
          <Tag style={{ marginLeft: "20px" }} closable>
            VIDEO
          </Tag>
          <Tag style={{ marginLeft: "20px" }} closable>
            IMAGE CLASSIFICATION
          </Tag>
        </div>

        <Spin tip="Comming Soon...">
          <div>
            <Row gutter={1}>
              {this.props.datasetOptions.map((item, index) => (
                <Col span={8} style={{ padding: "10px" }}>
                  <SelectableCard
                    item={item}
                    content={item.description}
                    height="auto"
                    // onClick={() => this.props.onSelect('data', index)}
                    selected={false}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Spin>
      </div>
    );
  }
}
