import React, { Component } from "react";
import "./GlobalHeader.css";
import carmlImage from "../../resources/logo/carml_small.png";
import { Layout, Menu, Dropdown, Icon, Row, Col } from "antd";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Section1BG from "../../resources/landingpage/assets/section1-background.jpg";
const { Header } = Layout;

export default class GlobalHeader extends Component {
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
      </Header>
    );
  }
}
