// import './LandingPage.css';
import React, { Component } from 'react';
import { Layout, Input, Button } from 'antd';
import UserContext from '../context/UserContext'

export default class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }

  handleClick (context) {
    context.logIn(this.state.username);
  }

  onChange = (e) => {
    const { id, value } = e.target;
    var obj = {};
    obj[id] = value;
    this.setState(obj);
  }


  render() {
    return (
      <Layout style={{ 
        padding: '0 24px 24px',
        background: '#fff',
        minHeight: 500,
        textAlign: 'center',
        }}>
        <header>
          <h1> User LogIn </h1>
        </header>
        <div>
          <div>
            <Input
              id="username"
              placeholder="Username"
              style={{width: '50%'}}
              onChange={this.onChange}
            />
          </div>
          <div>
            <Input
              id="password"
              placeholder="Password"
              style={{width: '50%'}}
              onChange={this.onChange}
            />
          </div>
          <div>
            <UserContext.Consumer>
              {(context) => (
                <Button onClick={() => this.handleClick(context)}>LogIn</Button>
              )}
            </UserContext.Consumer>
          </div>
        </div>
      </Layout>
    )
  }
}