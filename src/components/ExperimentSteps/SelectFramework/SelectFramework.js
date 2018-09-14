import SelectableCard from '../SelectableCard/SelectableCard'
import React, { Component } from 'react';
import { Layout, Col, Row } from 'antd';
import frameworks from '../../Frameworks/Frameworks';
const { Content } = Layout;

export default class SelectFramework extends Component {
  render() {
    return(
      <Layout style={{background: "#E8E9EB", margin: '0px 20px 120px 20px' }}>
        <Content style={{}}>
          <div style={{background: "#1A263A", color: "white", paddingTop: "30px", paddingBottom: "60px"}}>
            <h2 style={{marginTop: "60px", marginLeft: "40px", color: "white"}}>Select the Framework</h2>
          </div>

          <div>
            <Row gutter={16}>
              {
                frameworks.map(
                  (item, index) => 
                  <Col span={8} style={{padding: '10px'}}>
                    <SelectableCard
                      item={item}
                      content={ "Descriptions" }
                      tooltip={true}
                      // onClick={() => this.props.onSelect('models', item.id)}
                      // selected={this.props.selected[item.id]}
                    />
                  </Col>
                )
              }
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}