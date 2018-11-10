import './SelectableCard';
import React, { Component } from 'react';
import { Card, Tooltip, Icon } from 'antd';

export default class SelectableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || false,
    };
  }

  handleClick() {
    this.setState({ selected: !this.state.selected });
    this.props.onClick();
  }

  render() {
    return (
      <Card
        hoverable
        onClick={this.handleClick.bind(this)}
        bordered={this.state.selected}
        style={{ height: this.props.height || '200px', borderColor: '#e84a27' }}
      >
        <div style={{ position: "relative", paddingTop: "40px", paddingLeft: "40px", paddingRight: "40px", paddingBottom: "40px" }}>
          <div>
            <div style={{ position: "absolute", top: "0px", right: "0px" }}>
              <Tooltip placement="right" title={this.props.description}>
                <Icon type="info-circle" theme="outlined" />
              </Tooltip>
            </div>
            <div>
              <h1>{this.props.title}</h1>
            </div>
            <div>
              {this.props.content}
            </div>
          </div>

          {/* <div style={{marginTop: "20px"}}>
            Instances: 
          </div>

          <div style={{marginTop: "22px"}}>
            Format: 
          </div>

          <div style={{marginTop: "22px"}}>
            Default Task: 
          </div> */}
        </div>
      </Card>
    );
  }
}