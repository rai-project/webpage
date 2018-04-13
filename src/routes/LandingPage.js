import './LandingPage.css';
import React, { Component } from 'react';
import Introduction from '../components/FunctionalOverview/Introduction'
import Experiment from '../components/FunctionalOverview/Experiment'
import Deployment from '../components/FunctionalOverview/Deployment'
import Evaluation from '../components/FunctionalOverview/Evaluation'
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

export default class LandingPage extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Introduction />
        <Experiment />
        <Deployment />
        <Evaluation />
      </Content>
    );
  }
}
