import React, { Component } from 'react';
import Routes from './config';
import { Route } from 'react-router-dom';

export default class Router extends Component {
  render() {
    return (
      <div>
      {
        Routes.map((route, i) =>
          <Route
            exact
            key={i}
            path={route.path}
            component={route.compoment}
          />
        )
      }
      </div>
    );
  }
}