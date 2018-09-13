import './ExperimentSetupSider.css';
import React, { Component } from 'react';
import { Layout, Menu, Icon, InputNumber } from 'antd';
import PrimaryButton from '../../Buttons/PrimaryButton';
const { Content, Sider } = Layout;

const siderMenuNextStep = {
  "dataset": "model",
  "model": "framwork",
  "framework": "machine",
  "machine": "predict"
};

export default class ExperimentSetupSider extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      current: "dataset"
    };
  }

  handleClick = (e) => {
    this.setState({current: e.key});
    // console.log(this.state);
  }


  render() {
    return (
      <Sider width="300" style={{ width: '30%', background: '#E8E9EB' }}>
        <div className="Experiment-setup-title-bar Experiment-setup-sider-bar">
          <h3 style={{color: "white"}}>EXPERIMENT SETUP</h3>
        </div>

        <Menu
          mode="inline"
          defaultSelectedKeys="dataset"
          style={{ border: 1, backgroundColor: "#E8E9EB"}}
          onClick={this.handleClick.bind(this)}
        >
          {
            Object.keys(siderMenuNextStep).map(
              (item) =>
              <Menu.Item key={item}
                style={{ paddingTop: "30px", paddingBottom: "30px", paddingleft: "40px", height: "auto"}}> 
                <div>{item.toUpperCase()}</div>
                <div># {item} available</div>
              </Menu.Item>
            )
          }
        </Menu>

        <div style={{paddingLeft: "24px"}}>
          <div style={{display: "inline-block"}}>Batch Size: </div>
          <div style={{marginLeft: "40px", display: "inline-block"}}>
            <InputNumber min={1} max={10} defaultValue={32}/>
          </div>
        </div>

        <div style={{paddingLeft: "24px", marginTop: "30px"}}>
          <div style={{display: "inline-block"}}>Trace Level: </div>
          <div style={{marginLeft: "40px", display: "inline-block"}}>
            <InputNumber min={1} max={10} defaultValue={3}/>
          </div>
        </div>

        <div style={{marginTop: "30px"}}>
          <PrimaryButton style={{width: "100%"}} text={"Next Step: " + siderMenuNextStep[this.state.current].toUpperCase()}/>
        </div>
      </Sider>
    );
  }
}