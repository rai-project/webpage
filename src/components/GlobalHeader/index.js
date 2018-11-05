import React, { Component } from "react";
import "./GlobalHeader.css";
import { Layout, Icon } from "antd";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const { Header } = Layout;

export default class GlobalHeader extends Component {
  renderUser(username) {
    if (username == null) {
      return (
        <React.Fragment>
        <div className="GlobalHeader-right-block">
          <h3>SIGN UP</h3>
        </div>
        <Link to="/login">
          <div className="GlobalHeader-right-block">
            <h3>Login</h3>
          </div>
        </Link>
      </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
        <div className="GlobalHeader-right-block">
          <h3>Log Out</h3>
        </div>
        <Link to="/my">
          <div className="GlobalHeader-right-block">
            <h3>
              <Icon type="user" />
              {username}
            </h3>
          </div>
        </Link>
      </React.Fragment>
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
            <a href="https://docs.mlmodelscope.org/"><h3>About</h3></a>
        </div>
        <UserContext.Consumer>{context => this.renderUser(context.username)}</UserContext.Consumer>
      </Header>
    );
  }
}
