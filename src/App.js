import './App.css';
import React, { Component } from 'react';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import LandingPage from './routes/LandingPage';
import Introduction from './components/FunctionalOverview/Introduction';
import ExperimentPage from './components/FunctionalOverview/Experiment';
import Router from './router/router';
import { Layout, Row, Col } from 'antd';
import {
  BrowserRouter as ReactRouter,
  Route,
  Link
} from 'react-router-dom'
const { Header, Content, Footer } = Layout;

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
