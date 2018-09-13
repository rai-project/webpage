import SelectableCard from '../SelectableCard/SelectableCard'
import React, { Component } from 'react';
import { Col, Row, Select, Input, Button, Icon, Layout } from 'antd';
import models from '../../Models/Models';
const Option = Select.Option;
const Search = Input.Search;
const { Content } = Layout;

export default class SelectModel extends Component {
  render() {
    return(
      <Layout style={{background: "#E8E9EB", margin: '0px 20px 120px 20px' }}>
        <Content style={{}}>
          <div style={{background: "#1A263A", color: "white", paddingTop: "30px", paddingBottom: "60px"}}>
            <h2 style={{marginTop: "60px", marginLeft: "40px", color: "white"}}>Select the model</h2>
          </div>

          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              {
                models.map(
                  (item, index) => 
                  <Col span={8} style={{padding: '10px'}}>
                    <SelectableCard
                      item={item}
                      content={item.description.split(" ").slice(0,10).join(" ") + " ..."}
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