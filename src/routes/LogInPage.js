import React, { Component } from "react";
import Helmet from "react-helmet";
import { Layout, Input } from "antd";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      loggedIn: false,
    };
  }

  handleClick = context => {
    context.logIn(this.state.username);
    this.setState({ loggedIn: true });
  };

  onChange = e => {
    const { id, value } = e.target;
    var obj = {};
    obj[id] = value;
    this.setState(obj);
  };

  render() {
    return this.state.loggedIn ? (
      <Redirect to="/Experiment" />
    ) : (
        <Layout
          className="LightGray"
          style={{ minHeight: 700 }}>
          <Helmet title="Login" meta={[{ property: "og:title", content: "Login" }]} />
          <header className="DarkBlue">
            <div style={{ marginTop: "40px", marginBottom: "40px", textAlign: "center" }}>
              <h1 style={{ color: "white" }}> Log into ML ModelScope </h1>
              {/* <p>Didn't have an account </p> */}
            </div>
          </header>

          <div className="CenterBlock" style={{ width: "40%" }}>
            <div style={{ marginTop: "40px" }}>
              <p>User Name</p>
              <Input
                id="username"
                placeholder="Username"
                style={{ width: "100%" }}
                onChange={this.onChange}
              />
            </div>
            <div style={{ marginTop: "40px" }}>
              <p>Password</p>
              <Input
                id="password"
                placeholder="Password"
                style={{ width: "100%" }}
                onChange={this.onChange}
              />
            </div>
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <UserContext.Consumer>
                {context => (
                  <PrimaryButton
                    text="LOGIN"
                    onClick={() => this.handleClick(context)}
                    style={{ width: "100%" }}
                  />
                )}
              </UserContext.Consumer>
            </div>
          </div>
        </Layout>
      );
  }
}
