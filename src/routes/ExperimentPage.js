import React, { Component } from 'react';
import { Layout, Menu, Icon, Dropdown, Tag, Input } from 'antd';
import SelectDataset from '../components/ExperimentSteps/SelectDataset/SelectDataset';
import ExperimentSetupSider from '../components/ExperimentSteps/ExperimentSetupSider/ExperimentSetupSider';
import SelectModel from '../components/ExperimentSteps/SelectModel/SelectModel';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class ExperimentPage extends Component {
  render() {
    return (
      <Layout style={{background: "#E8E9EB"}}>
        <ExperimentSetupSider/>

        {/* <SelectDataset/> */}
        <SelectModel/>
      </Layout>
    );
  }
}