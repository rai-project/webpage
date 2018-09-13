import '../ExperimentSteps.css';
import React, { Component } from 'react';
import { Card, Row, Tooltip } from 'antd';

export default class PredictButton extends Component {
  render() {
    return(
      <Button type="primary" size="large" >Predict</Button>
    )
  }
}