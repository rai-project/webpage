import React, { Component } from 'react';
import './GlobalFooter.css';
import { Layout, Menu, Dropdown, Icon, Row, Col } from 'antd';
import C3SRImage from "../../resources/logo/C3SR_color.jpg";
import UIUCImage from "../../resources/logo/uiuc_logo_small.png"
const { Footer } = Layout;

export default class GlobalFooter extends Component {
  render() {
		return (
      <Footer style={{ textAlign: 'center' }}>
        <div>
          <Row>
          <Col span={4}>
            <div className="GlobalFooter-text">About</div>
          </Col>
          <Col span={4}>
            <div className="GlobalFooter-text">GitHub</div>
          </Col>
          <Col span={4}>
            <div className="GlobalFooter-text">FAQ</div>
          </Col>
          <Col span={4}>
            <div className="GlobalFooter-text">Contact Us</div>
          </Col>
          <Col span={8}>
            <img src={ UIUCImage } className="GlobalFooter-img"/>
            <img src={ C3SRImage } className="GlobalFooter-img"/>
          </Col>
          </Row>
        </div>
      </Footer>
    );
  }
}