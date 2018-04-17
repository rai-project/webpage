import './App.css';
import React, { Component } from 'react';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import Router from './router/router';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter as ReactRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <ReactRouter>
        <Layout className="layout">
          <GlobalHeader />

          <Router />

          <GlobalFooter />
        </Layout>
      </ReactRouter>
    );
  }
}

export default App;
