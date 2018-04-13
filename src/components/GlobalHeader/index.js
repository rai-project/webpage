import React, { Component } from 'react';
import './GlobalHeader.css';
import carmlImage from "../../resources/logo/carml_small.png";
import { Layout, Menu, Dropdown, Icon, Row, Col } from 'antd';
import {
  BrowserRouter as ReactRouter,
  Route,
  Link
} from 'react-router-dom'
const { Header } = Layout;


export default class GlobalHeader extends Component {
  render() {
		return (
			<Header style={{height: '160px', background: '#0db7c4'}}>
			<div>
				<div>
					<header>
						<h1 className="GlobalHeader-title">
							<img src={carmlImage} style={{width: '5%', height: '5%'}}/>
							MLModelScope
						</h1>
					</header>
					<div>
					<Row>
						<Col span={14} />
						<Col span={10}>
							<Menu mode="horizontal" style={{ background: '#0db7c4', color: 'white' }}>
								<Menu.Item key="home">
									<Link to={"/"} style={{color: 'white'}}> <Icon type="home" /> Home </Link>
								</Menu.Item>
								<Menu.Item key="docs">
									<Icon type="book" /> Docs
								</Menu.Item>
								<Menu.SubMenu title={<span><Icon type="bars" />Get Started</span>}>
									<Menu.Item key="experiment">
										<Link to="/experiment">Experiment</Link>
									</Menu.Item>
									<Menu.Item key="deployment">
										<Link to="/deployment">Deployment</Link>
									</Menu.Item>
									<Menu.Item key="evaluation">
										<Link to="/evaluation">Evaluation</Link>
									</Menu.Item>
								</Menu.SubMenu>
								<Menu.Item key="login">
									<Icon type="user" /> Log In
								</Menu.Item>
							</Menu>
						</Col>
						</Row>
					</div>
				</div>
			</div>
      </Header>
		);
  }
}