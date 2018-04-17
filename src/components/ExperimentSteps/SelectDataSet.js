import './ExperimentSteps.css';
import React, { Component } from 'react';
import { Card, Col, Row, Select, Input, Button, Icon } from 'antd';
import SelectableCard from './SelectableCard/SelectableCard'
const Option = Select.Option;
const Search = Input.Search;

export default class SelectDataSet extends Component {
  render(){
    return (
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
            <Search placeholder="Search for dataset" enterButton="Search" />
          </div>
        </div>

        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={6} style={{padding: '10px'}}>
              <Button type="dashed" style={{height: '150px', width: '100%'}}>
                <Icon type="upload" /><br/>Upload Your Dataset
              </Button>
            </Col>
            {
              this.props.datasetOptions.map(
                (item, index) => 
                <Col span={6} style={{padding: '10px'}}>
                  <SelectableCard
                    item={item}
                    content={item.description}
                    height='150px'
                    onClick={() => this.props.onSelect('data', index)}
                    selected={this.props.selected[index]}
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