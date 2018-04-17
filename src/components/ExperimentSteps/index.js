import './ExperimentSteps.css';
import React, { Component } from 'react';
import { Card, Col, Row, Select, Input, Icon } from 'antd';
import { filter } from 'lodash';

import SelectDataSet from '../ExperimentSteps/SelectDataSet'
import SelectModel from '../ExperimentSteps/SelectModel'
import SelectFramework from '../ExperimentSteps/SelectFramework'
import models from '../Models/Models'
import frameworks from '../Frameworks/Frameworks'

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
        'machines': [false],
      },
    };
  }

  handleSelect(key, i) {
    var selections = this.state.selections;
    selections[key][i] = !selections[key][i];
    this.setState({selections: selections});
    var counts = this.state.counts;
    counts[1] = this.availableModels(selections).length;
    this.setState({counts: counts});
  }

  availableModels(selections) {
    var temp = [];
    if (selections['frameworks'].every(x => x == false)) {
      temp = temp.concat(models);
    } else {
      selections['frameworks'].map(
        function (v, i) {
          if (v) {
            temp = temp.concat(filter(models, {'framework': frameworks[i]}));
          }
        }
      )
    }
    return temp;
  }

  cardContent(item) {
    if (this.state.selections[item.id].every(x => x==false)) {
      return(
        <div style={{textAlign: 'center'}}>
          <div> {item.icon} </div>
          <div> {item.content} </div>
        </div>
      );
    } else {
      return(
        <div>
          {
            this.state.selections[item.id].map(
              function(v, i) {
                if (v) {
                  return(
                    <Card.Grid style={{textAlign: 'center', width: '100%'}}>
                      {item.data[i].name}
                    </Card.Grid>
                  )
                }
              }
            )
          }
        </div>
      )
    }
  }

  render() {
    const steps = [{
      id: 'data',
      title: 'Data',
      data: datasetOptions,
      icon: <Icon type="folder" style={{ fontSize: 30 }}/>,
      select: <SelectDataSet
                datasetOptions={datasetOptions}
                onSelect={this.handleSelect}
                selected={this.state.selections['data']}
              />,
      content: 'Choose a data set from the data sets available for your inference selections.',
    }, {
      id: 'models',
      title: 'Model',
      data: models,
      icon: <Icon type="line-chart" style={{ fontSize: 30 }}/>,
      select: <SelectModel
                models={this.availableModels(this.state.selections)}
                onSelect={this.handleSelect}
                selected={this.state.selections['models']}
              />,
      content: 'Choose a model that supports your inference selections.',
    }, {
      id: 'frameworks',
      title: 'Framework',
      data: frameworks,
      select: <SelectFramework
                frameworks={frameworks}
                onSelect={this.handleSelect}
                selected={this.state.selections['frameworks']}
              />,
      content: 'Choose a framework that supports your inference selections.',
    }, {
      id: 'machines',
      title: 'Machine',
      icon: <Icon type="database" style={{ fontSize: 30 }}/>,
      content: 'Choose a machine to run your inference.',
    }];

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
                  style={{height: 'auto', minHeight: '200px' }}
                >
                 {this.cardContent(item)}
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