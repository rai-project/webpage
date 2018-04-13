import './LandingPage.css';
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

export default class DeploymentPage extends Component {
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
            <Menu.Item key="upload"><Icon type="upload" />Upload Your Model</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <header>
            <h1 className='page-title'> Deployment </h1>
          </header>

          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <div>
              
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}