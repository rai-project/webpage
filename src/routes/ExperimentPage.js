import './LandingPage.css';
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import ExperimentSteps from '../components/ExperimentSteps'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class ExperimentPage extends Component {
  render() {
    return (
      <Layout>
        <Sider style={{ width: '20%', background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="user"> <Icon type="user" />User </Menu.Item>
            <SubMenu key="saved_assets" title={<span><Icon type="bars" />Saved Assets</span>}>
              <Menu.Item key="runs">Runs</Menu.Item>
              <Menu.Item key="data">Data</Menu.Item>
              <Menu.Item key="analysis">Analysis</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <header>
            <h1 className='page-title'> Experiment </h1>
          </header>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <div>
              <ExperimentSteps />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}