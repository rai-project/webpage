import './App.css';
import './share/style.css';
import React, { Component } from 'react';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import Router from './router/router';
import { Layout, Row, Col } from 'antd';
import { BrowserRouter as ReactRouter } from 'react-router-dom'
import UserContext from './context/UserContext'

class UserProvider extends Component {
  constructor(props) {
    super(props);
      this.state = {
      username: null,
    }
  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state,
        logIn: (username) => this.setState({
          username: username
        }),
        logOut: () => this.setState({
          username: null
        }),
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <ReactRouter>
          <Layout>
            <GlobalHeader />

            <Router />

            <GlobalFooter />
          </Layout>
        </ReactRouter>
      </UserProvider>
    );
  }
}

export default App;
