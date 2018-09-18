import './ExperimentSetupSider.css';
import React, { Component } from 'react';
import { Layout, Menu, Icon, InputNumber, Select } from 'antd';
import PrimaryButton from '../../Buttons/PrimaryButton';
import { ExperimentContext } from '../../../context/ExperimentContext';

const { Content, Sider } = Layout;
const Option = Select.Option;

const trace_options = [
  { key: 0, text: "None", value: "NO_TRACE" },
  { key: 1, text: "Step", value: "STEP_TRACE" },
  { key: 2, text: "Framework", value: "FRAMEWORK_TRACE" },
  { key: 3, text: "CPU", value: "CPU_ONLY_TRACE" },
  { key: 4, text: "Hardware", value: "HARDWARE_TRACE" },
  { key: 5, text: "Full", value: "FULL_TRACE" }
];

export default class ExperimentSetupSider extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <Sider width="300" style={{ width: '30%', background: '#E8E9EB' }}>
        <div className="Experiment-setup-title-bar Experiment-setup-sider-bar">
          <h3 style={{color: "white"}}>EXPERIMENT SETUP</h3>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[this.props.current]}
          style={{ border: 1, backgroundColor: "#E8E9EB"}}
          onClick={(e) => this.props.onPageChange(e.key)}
        >
          {
            Object.keys(this.props.siderMenuNextStep).map(
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
            <ExperimentContext.Consumer>
              {(context) =>
                <Select
                  showSearch
                  style={{ width: 100 }}
                  defaultValue={trace_options[0].value}
                  optionFilterProp="children"
                  onChange={(value) => context.changeTraceLevel(value)}
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {
                    trace_options.map(
                      (option) =>
                        <Option value={option.value}>{option.text}</Option>
                    )
                  }
                </Select>
              }
            </ExperimentContext.Consumer>
          </div>
        </div>
 
        <div style={{marginTop: "30px"}}>
          <PrimaryButton
            style={{width: "100%"}}
            text={"Next Step: " + this.props.future.toUpperCase()}
            onClick={() => this.props.onPageChange(this.props.future)}/>
        </div>
      </Sider>
    );
  }
}