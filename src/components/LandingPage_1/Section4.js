import './LandingPage.css';
import { Row, Col, Button, Icon, Card, Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../resources/img/arrow.svg';
import sec4back from '../../resources/img/sec4back.jpg';
function handleClick(e) {
  console.log('click', e);
} 
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Section4 extends Component {
  render() {
    return(
      <div className="LandingPage-section3">
         <Row >
      <Col style={{minHeight: '575px',backgroundColor:'#white', textAlign:'left'}} span={8}>
      <div>
      <a style={{textDecoration: 'none', marginLeft:'50px', marginTop:'50px'}} class="buttonSmall" href="#">FRAMEWORK</a>
      </div>
      <div>ßßß
      <Menu onClick={handleClick} style={{ width: '100%'  }} mode="vertical">
      <SubMenu style={{marginLeft:'10px',marginTop:'10px', position:'absolute', height: '145px'  }} 
      key="sub1" title={<span><Icon type="right" />
      <span style={{textDecoration:'none', fontSize:'15pt'}}>FEATURE-1 &#8199; </span> 
      </span> }>
    </SubMenu>
    <p style={{ position:'absolute', marginLeft:'50px',marginTop:'60px'}}> text </p>
    <SubMenu style={{marginLeft:'10px',marginTop:'158px', position:'absolute', height: '145px'  }} 
      key="sub2" title={<span><Icon type="right" />
      <span style={{textDecoration:'none', fontSize:'15pt'}}>FEATURE-2 &#8199; </span>
      </span> }>
    </SubMenu>
    <p style={{ position:'absolute', marginLeft:'50px',marginTop:'210px'}}> text </p>
   
    <SubMenu style={{marginLeft:'10px',marginTop:'290px', position:'absolute', height: '145px'  }} 
      key="sub3" title={<span><Icon type="right" />
      <span style={{textDecoration:'none', fontSize:'15pt'}}>FEATURE-3 &#8199; </span>
      </span> }>
    </SubMenu>
    <p style={{ position:'absolute', marginLeft:'50px',marginTop:'340px'}}> text </p>
  </Menu></div>
            <Row style={{marginTop:'486px' }} className="FunctionalOverview-section4">
       <Col style={{minHeight: '60px',backgroundColor:'#blue', textAlign:'left'}} >
       <a href="/" style={{ textDecoration:'none' }} > 
       <p style={{ color:'white' ,fontSize:'16pt' ,marginLeft:'20px', marginTop:'25px'}}> 
       EXPLORE MORE FEATURES<img  style={{ marginLeft:'80px', }} src={arrow}/> 	</p> </a>
       </Col>  
         </Row>
    
       </Col>
      <Col style={{minHeight: '655px',backgroundColor:'#141028',textAlign:'left'}} span={16}>
     <img style={{ height:'595px',width:'725px',marginLeft:'70px',marginTop:'60px'}} src={sec4back}/> 	 
      
      </Col>  
      
    </Row>
 
      
    </div>
    );
  }
}