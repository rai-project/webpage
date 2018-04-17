import './ExperimentSteps.css';
import SelectableCard from './SelectableCard/SelectableCard'
import React, { Component } from 'react';
import { Col, Row, Select, Input, Button, Icon } from 'antd';
const Option = Select.Option;
const Search = Input.Search;

export default class SelectModel extends Component {
  render() {
    return(
      <div>
        <div style={{textAlign: 'center', padding: '20px'}}>
          <div>
            <Select
              mode="multiple"
              defaultValue="All"
              style={{ width: '100%' }}
            >
              <Option key={1}>filter1</Option>
            </Select>
          </div>
          <br/>
          <div>
            <Search placeholder="Search for model" enterButton="Search" />
          </div>
        </div>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={6} style={{padding: '10px'}}>
              <Button type="dashed" style={{height: '200px', width: '100%'}}>
                <Icon type="upload" /><br/>Upload Your Model
              </Button>
            </Col>
            {
              this.props.models.map(
                (item, index) => 
                <Col span={6} style={{padding: '10px'}}>
                  <SelectableCard
                    item={item}
                    content={item.description.split(" ").slice(0,10).join(" ") + " ..."}
                    tooltip={true}
                    onClick={() => this.props.onSelect('models', item.id)}
                    selected={this.props.selected[item.id]}
                  />
                </Col>
              )
            }
          </Row>
        </div>
      </div>
    );
  }
}