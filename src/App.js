import "./App.css";
import "./share/style.css";
import React, { Component } from "react";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import Router from "./router/router";
import { Layout, Row, Col } from "antd";
import { BrowserRouter as ReactRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <ReactRouter>
          <Layout>
            <GlobalHeader />

            <Layout.Content>
              <Router />
            </Layout.Content>

            <GlobalFooter />
          </Layout>
        </ReactRouter>
      </UserProvider>
    );
  }
}

export default App;
