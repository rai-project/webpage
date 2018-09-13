import './LandingPage.css';
import { Row, Col, Button, Icon, Card } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Section5 extends Component {
  render() {
    return(
      <div className="LandingPage-section5">
       
        <Row className="LandingPage-content">
         
          <Col  className='LandingPage-text'>
          <Row className="LandingPage-title">
          <h2 style={{ marginTop:'20px', color: 'black'}}>Sample Text.
          ...............................................<br/>
          ...................................................</h2>
        </Row>
        
          </Col>
        </Row>
      
      </div>
      
    );
  }
}