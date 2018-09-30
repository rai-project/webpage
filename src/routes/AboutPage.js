import React, { Component } from "react";
import Markdown from "react-markdown";
import { Layout, Col, Row } from "antd";

// eslint-disable-next-line
import AboutContent from "!raw-loader!./../docs/about.md";

export default class AboutPage extends Component {
  render() {
    return (
      <Layout.Content style={{ marginTop: "60px", marginLeft: "40px", padding: "30px" }}>
        <Markdown source={AboutContent} />
      </Layout.Content>
    );
  }
}
