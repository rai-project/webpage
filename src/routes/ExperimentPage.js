import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown, Tag, Input } from 'antd';
import SelectDataset from '../components/ExperimentSteps/SelectDataset/SelectDataset';
import ExperimentSetupSider from '../components/ExperimentSteps/ExperimentSetupSider/ExperimentSetupSider';
import SelectModel from '../components/ExperimentSteps/SelectModel/SelectModel';
import SelectFramework from '../components/ExperimentSteps/SelectFramework/SelectFramework';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const siderMenuNextStep = {
  "dataset": "model",
  "model": "framework",
  "framework": "machine",
  "machine": "predict"
};

export default class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.state = {
      current: "dataset",
      future: "model",
    }
  }

  handleChangePage(s) {
    if (s !== "predict") {
      this.setState({current: s});
      this.setState({future: siderMenuNextStep[s]})
      console.log(this.state);
    }
  }

  render() {
    var currentPage;
    switch(this.state.current) {
      case "dataset":
        currentPage = <SelectDataset />;
        break;
      case "model":
        currentPage = <SelectModel />;
        break;
      case "framework":
        currentPage = <SelectFramework />;
        break;
    }

    return (
      <Layout style={{background: "#E8E9EB"}}>
        <ExperimentSetupSider
          onPageChange={this.handleChangePage}
          current={this.state.current}
          future={this.state.future}
          siderMenuNextStep={siderMenuNextStep}
        />

        {currentPage}
      </Layout>
    );
  }
}