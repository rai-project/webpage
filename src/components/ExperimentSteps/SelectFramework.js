import SelectableCard from './SelectableCard/SelectableCard'
import './ExperimentSteps.css';
import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

export default class ModelSelect extends Component {
  render() {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          {
            this.props.frameworks.map(
              item => 
              <Col span={6} style={{padding: '10px'}}>

                <SelectableCard
                  content={<img
                    src={require("../../resources/logos/"+item.name.toLowerCase()+".png")}
                    style={{height: '60%', width: '60%'}}
                  />}
                  item={item}
                />
              </Col>
            )
          }
        </Row>
      </div>
    );
  }
}