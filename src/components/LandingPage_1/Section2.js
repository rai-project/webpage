import './LandingPage.css';
import { Row, Col, Button, Icon, Card } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExperimentImage from '../../resources/logo/experiment.jpg'

export default class Section2 extends Component {
  render() {
    return(
      <div className="LandingPage-section2">
        <Row className="LandingPage-title">
          <p style={{fontSize:'15pt', marginTop:'40px', color: 'black'}}>Text</p>
        </Row>
        <Row className="LandingPage-content">
         
          <Col  className='LandingPage-text'>
          <Row className="LandingPage-title">
          <p style={{fontSize:'10pt', marginTop:'20px', color: 'black'}}>Sample Text.
          ...............................................<br/>
          ...................................................</p>
        </Row>
        <Row className="LandingPage-title">
          <p style={{fontSize:'8pt', marginTop:'10px', color: '#0FACAC'}}>LEARN MORE</p>
        </Row>
          </Col>
        </Row>
      
      </div>
      
    );
  }
}