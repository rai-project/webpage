import SelectableCard from './SelectableCard/SelectableCard'
import './ExperimentSteps.css';
import React, { Component } from 'react';
import { Col, Row } from 'antd';

export default class ModelSelect extends Component {
  render() {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>
          {
            this.props.frameworks.map(
              (item, index) => 
              <Col span={6} style={{padding: '10px'}}>

                <SelectableCard
                  content={<img
                    src={require("../../resources/logos/"+item.name.toLowerCase()+".png")}
                    style={{height: '60%', width: '60%'}}
                  />}
                  item={item}
                  onClick={() => this.props.onSelect('frameworks', index)}
                  selected={this.props.selected[index]}
                />
              </Col>
            )
          }
        </Row>
      </div>
    );
  }
}