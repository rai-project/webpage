import React, { Component } from 'react';
import Routes from './config';
import { Route } from 'react-router-dom';

export default class Router extends Component {
  render() {
    return (
      Routes.map((route, i) =>
        <Route
          exact
          key={i}
          path={route.path}
          component={route.component}
        />
      )
    );
  }
}