import './FunctionalOverview.css';
import { Row, Col, Card } from 'antd';
import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return(
      <div className="FunctionalOverview-introduction">
        <Row className="FunctionalOverview-title">
          <h1> All Machine Learning models in one place </h1>
        </Row>
        <Row className="FunctionalOverview-content">
          <Col span={12} className='FunctionalOverview-left'>
            <iframe
              width="60%"
              height="100%"
              src="https://www.youtube.com/embed/WS0iC0xdWaQ"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            >
            </iframe>
          </Col>
          <Col span={12} className='FunctionalOverview-text'>
            <p>
              MLModelScope is an open source distributed platform to aid users
              in model experimentation, deployment, and evaluation across hardware
              infrastructures.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}