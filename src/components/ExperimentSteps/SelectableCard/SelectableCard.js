import '../ExperimentSteps.css';
import React, { Component } from 'react';
import { Card, Col, Row, Tooltip } from 'antd';

export default class SelectableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  handleClick() {
    this.setState({selected: !this.state.selected});
    // this.props.onClick();
  }

  render() {
    var item = this.props.item;

    if (this.props.tooltip) {
      return(
        <Tooltip placement="right" title={item.description}>
          <Card
            title={item.name}
            hoverable
            onClick={() => this.handleClick()}
            bordered={this.state.selected}
            style={{height: this.props.height || '200px', borderColor: '#707070'}}
          >
            <div style={{textAlign: 'center'}}>
              {this.props.content}
            </div>
          </Card>
        </Tooltip>
      )
    } else {
      return(
        <Card
          title={item.name}
          hoverable
          onClick={() => this.handleClick()}
          bordered={this.state.selected}
          style={{height: this.props.height || '200px', borderColor: '#707070'}}
        >
          <div style={{textAlign: 'center'}}>
            {this.props.content}
          </div>
        </Card>
      );
    }
  }
}