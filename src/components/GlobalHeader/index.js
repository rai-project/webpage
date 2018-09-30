<<<<<<< HEAD
import React, { Component } from "react";
import "./GlobalHeader.css";
import carmlImage from "../../resources/logo/carml_small.png";
import { Layout, Menu, Dropdown, Icon, Row, Col } from "antd";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Section1BG from "../../resources/landingpage/assets/section1-background.jpg";
=======
import React, { Component } from 'react';
import './GlobalHeader.css';
import { Layout, Menu, Dropdown, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
>>>>>>> b15c95ed77dfcf6c3db4c4061f4ec0f50903a777
const { Header } = Layout;

export default class GlobalHeader extends Component {
<<<<<<< HEAD
  renderUser(username) {
    if (username == null) {
      return (
        <Link to="/login" style={{ color: "white" }}>
          <Icon type="user" />
          Log In
        </Link>
      );
    } else {
      return (
        <Link to="/login" style={{ color: "white" }}>
          <Icon type="user" />
          {username}
        </Link>
      );
    }
  }

  render() {
    return (
      <Header className="GlobalHeader-header">
        <div className="GlobalHeader-left-block">
          <Link to={"/"}>
            <h2>
              ML <b>ModelScope</b>
            </h2>
          </Link>
        </div>
        <div className="GlobalHeader-left-block">
          <Link to={"/Experiment"}>
            <h3>Experiment Setup</h3>
          </Link>
        </div>
        <div className="GlobalHeader-left-block">
          <h3>About</h3>
        </div>
        <div className="GlobalHeader-right-block">
          <h3>SIGN UP</h3>
        </div>
        <div className="GlobalHeader-right-block">
          <h3>Login</h3>
        </div>
=======
	renderUser(username) {
		if (username == null) {
			return(
				<Link to="/login">
					<div className="GlobalHeader-right-block">
						<h3>Login</h3>
					</div>
				</Link>
			);
		} else {
			return(
				<Link to="/login">
					<div className="GlobalHeader-right-block">
						<h3><Icon type="user" />{username}</h3>
					</div>
				</Link>
			);
		}
	}

  render() {
		return (
			<Header className="GlobalHeader-header">
			<div className="GlobalHeader-left-block">
				<Link to={"/"}>
				<h2>ML <b>ModelScope</b></h2>
				</Link>
			</div>
			<div className="GlobalHeader-left-block">
				<Link to={"/Experiment"}><h3>Experiment Setup</h3></Link>
			</div>
			<div className="GlobalHeader-left-block">
				<h3>About</h3>
			</div>
			<div className="GlobalHeader-right-block">
				<h3>SIGN UP</h3>
			</div>
			<UserContext.Consumer>
				{(context) => (
					this.renderUser(context.username)
				)}
			</UserContext.Consumer>
>>>>>>> b15c95ed77dfcf6c3db4c4061f4ec0f50903a777
      </Header>
    );
  }
}
