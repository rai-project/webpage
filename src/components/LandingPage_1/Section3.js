import './LandingPage.css';
import { Row, Col, Button, Icon, Card } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../resources/img/arrow.svg'
import arrowblack from '../../resources/img/arrowblack.png'

export default class Section3 extends Component {
  render() {
    return(
      <div className="LandingPage-section3">
         <Row >
      <Col style={{minHeight: '575px',backgroundColor:'#CEFFF8', textAlign:'left'}} span={8}>
      <a style={{textDecoration: 'none', marginLeft:'50px', marginTop:'60px'}} class="buttonSmall" href="#">FRAMEWORK</a>
      <p style={{ fontSize:'16pt' ,marginLeft:'50px', marginTop:'15px'}}> HOW TO CHOOSE RIGHT <br/> FRAMEWORK? </p>
      <p style={{ fontSize:'12pt' ,marginLeft:'50px', marginTop:'20px'}}> text...  </p>
      <a href="/" style={{ textDecoration:'none' }} > 
       <p style={{ color:'black' ,fontSize:'16pt' ,marginLeft:'50px', marginTop:'300px'}}> text.......     
            <img style={{marginLeft:'225px'}} src={arrowblack}/> 	</p> </a>
      
       </Col>
      <Col style={{minHeight: '575px',backgroundColor:'#322CC9',textAlign:'left'}} span={8}>
      <a style={{textDecoration: 'none',backgroundColor: 'rgba(255, 253, 253, 0.24)',color: 'white',marginLeft:'50px', marginTop:'60px'}} class="buttonSmall" href="#">MODELS</a>
      <p style={{ fontSize:'16pt' ,marginLeft:'50px', marginTop:'15px',color: 'white'}}> HOW TO CHOOSE RIGHT <br/> FRAMEWORK? </p>
      <p style={{ fontSize:'12pt' ,marginLeft:'50px', marginTop:'20px',color: 'white'}}> text...  </p>
      <a href="/" style={{ textDecoration:'none' }}>  <p style={{  fontSize:'16pt' ,marginLeft:'50px', marginTop:'300px',color: 'white'}}> text.......     
            <img style={{marginLeft:'225px'}} src={arrow}/> 	</p> </a>
      </Col>  
      <Col style={{minHeight: '575px',backgroundColor:'#0170C6', textAlign:'left'}} span={8}>
      <a style={{textDecoration: 'none', backgroundColor: 'rgba(17, 0, 255, 0.37)',color: 'white', marginLeft:'50px', marginTop:'60px'}} class="buttonSmall" href="#">MACHINES</a>
      <p style={{ fontSize:'16pt' ,marginLeft:'50px', marginTop:'15px',color: 'white'}}> HOW TO CHOOSE RIGHT <br/> FRAMEWORK? </p>
      <p style={{ fontSize:'12pt' ,marginLeft:'50px', marginTop:'20px',color: 'white'}}> text...  </p>
     <a href="/" style={{ textDecoration:'none' }}> <p style={{  fontSize:'16pt' ,marginLeft:'50px', marginTop:'300px',color: 'white'}}> text.......     
            <img style={{marginLeft:'225px'}} src={arrow}/> 	</p> </a>
      </Col>
    </Row>
      </div>
    );
  }
}