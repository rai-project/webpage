import './ExperimentSteps.css';
import React, { Component } from 'react';
import { Button, message, Icon } from 'antd';
import { Card, Col, Row, Select, Input } from 'antd';
import SelectDataSet from '../ExperimentSteps/SelectDataSet'
import SelectModel from '../ExperimentSteps/SelectModel'
import SelectFramework from '../ExperimentSteps/SelectFramework'
import models from '../Models/Models'
import frameworks from '../Frameworks/Frameworks'

const Option = Select.Option;
const Search = Input.Search;

const datasetOptions = [
  { key: 0, name: "ilsvrc2012", description: "vision/ilsvrc2012" },
  { key: 1, name: "cifar10", description: "vision/cifar10" },
  { key: 2, name: "cifar100", description: "vision/cifar100" },
  { key: 3, name: "caltech256", description: "vision/caltech256" },
  { key: 4, name: "mnist", description: "vision/mnist" },
  { key: 5, name: "custom", description: "vision/custom" }
];

export default class ExperimentSteps extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      current: null,
      displayInfo: false,
      counts: [datasetOptions.length, models.length, frameworks.length, 0],
      selections: {
        'data': Array(datasetOptions.length).fill(false),
        'models': Array(models.length).fill(false),
        'frameworks': Array(frameworks.length).fill(false),
      },
    };
  }

  handleSelect(key, i) {
    // var selections = this.state.selections;
    // selections[key][i] = !selections[key][i];
    // this.setState({selections: selections});
  }

  

  render() {
    const steps = [{
      title: 'Data',
      icon: <Icon type="folder" style={{ fontSize: 30 }}/>,
      select: <SelectDataSet
                datasetOptions={datasetOptions}
                onSelect={this.handleSelect}
                selected={this.state.selections['data']}
              />,
      content: 'Choose a data set from the data sets available for your inference selections.',
    }, {
      title: 'Model',
      icon: <Icon type="line-chart" style={{ fontSize: 30 }}/>,
      select: <SelectModel models={models} onSelect={this.handleSelect}/>,
      content: 'Choose a model that supports your inference selections.',
    }, {
      title: 'Framework',
      select: <SelectFramework frameworks={frameworks} onSelect={this.handleSelect}/>,
      content: 'Choose a framework that supports your inference selections.',
    }, {
      title: 'Machine',
      icon: <Icon type="database" style={{ fontSize: 30 }}/>,
      content: 'Choose a machine to run your inference.',
    }];
    const { current } = this.state;

    return (
      <div>
        <div>
        <Row gutter={16}>
          {
            steps.map(
              (item, index) => 
              <Col span={6}>
                <Card
                  title={item.title + '(' + this.state.counts[index] + ')'}
                  hoverable
                  onClick={() => this.setState({ current: index })}
                  style={{height: '200px'}}
                >
                  <div style={{textAlign: 'center'}}>
                    {item.icon}
                  </div>
                  <div style={{textAlign: 'center'}}>
                    {item.content}
                  </div>
                </Card>
              </Col>
            )
          }
        </Row>
        </div>
        
        <br/>

        {this.state.current != null && steps[this.state.current].select}
      </div>
    );
  }
}