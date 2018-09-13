import './LandingPage.css';
import { Row, Col, Button, Icon, Card } from 'antd';
import React, { Component } from 'react';
import Image3 from '../../resources/img/3.jpg'
import { Link } from 'react-router-dom';

export default class Section8 extends Component {
  
  render() {
    return(
      <div className="LandingPage-section6">
       
        <Row >
         
        <Col >
            <img style={{position:'absolute', marginLeft:'125px', marginTop:'50px'}} 
            src={Image3}/>
          </Col>
        <h3 style={{ color:'white', position:'absolute', marginLeft:'785px', marginTop:'165px'}}>
        EXPERIMENT</h3>
          <h2 style={{ color:'white', position:'absolute', marginLeft:'785px', marginTop:'220px'}}>
          Discover the most efficient <br/>
          frameworks, models and hardware<br/>
          for your specific experiment.</h2>
          <a class="buttonsec6" style={{textAlign: 'left', position:'absolute', marginLeft:'785px', marginTop:'385px'}} href="#">
           START EXPERIMENTATION {" "} <Icon style={{ fontSize: 20 }}  size="large" type="arrow-right" /></a>
        </Row>
      
      </div>
      
     );
  }
}