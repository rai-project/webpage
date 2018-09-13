import './LandingPage.css';
import { Row, Col, Button, Icon, Card } from 'antd';
import React, { Component } from 'react';
import Image4 from '../../resources/img/4.jpg'
import { Link } from 'react-router-dom';

export default class Section9 extends Component {
  
  render() {
    return(
      <div className="LandingPage-section7">
       
        <Row >
         
        <Col >
            <img style={{position:'absolute', marginLeft:'125px', marginTop:'50px'}} src={Image4}/>
          </Col>
        <h3 style={{ color:'black', position:'absolute', marginLeft:'785px', marginTop:'165px'}}>
        COMPARE</h3>
          <h2 style={{ color:'black', position:'absolute', marginLeft:'785px', marginTop:'220px'}}>
         Use side by side comparisons, graphs, <br/>
         and tables to draw insights and make <br/>
         an informed decision on which tools <br/>
         to use.</h2>
          <a class="buttonsec6" style={{textAlign: 'left', position:'absolute', marginLeft:'785px', marginTop:'385px'}} href="#">
           COMPARE STUFF {" "} <Icon style={{ fontSize: 20 }}  size="large" type="arrow-right" /></a>
        </Row>
      
      </div>
      
     );
  }
}