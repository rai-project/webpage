import './InferenceResult.css';
import React, { Component } from 'react';
import { Col, Row, Table, Divider, Pagination} from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import response from '../PredictResponse/Response'

export default class InferenceResult extends Component {
  render() {
    const performanceOverviewHeader=[
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Result',
        dataIndex: 'result',
        key: 'result',
      }
    ];
    const performanceOverviewData=[
      {
        key: '1',
        name: 'Runtime',
        result: '9:54 min',
      },{
        key: '2',
        name: 'Accuracy',
        result: '99%',
      },{
        key: '3',
        name: 'Latency',
        result: '1.29 sec/image',
      },{
        key: '4',
        name: 'Throughput',
        result: '0.43 image/sec',
      }
    ];

    const inferenceParametersHeader=[
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Result',
        dataIndex: 'result',
        key: 'result',
      }
    ];
    const inferenceParametersData=[
      {
        key: '1',
        name: 'Data Set Size',
        result: '7.12 TB',
      },{
        key: '2',
        name: 'Model Size',
        result: '2.3 GB',
      },{
        key: '3',
        name: 'Batch size',
        result: '1',
      },{
        key: '4',
        name: 'Data Type',
        result: 'images',
      }
    ];

    return(
      <div>
        <Row gutter={24}>
          <Col span={12}>
            <h3>Performance Overview</h3>
            <Table
              dataSource={performanceOverviewData}
              columns={performanceOverviewHeader}
              showHeader={false}
              pagination={false}
            />
          </Col>
          <Col span={12}>
            <h3>Inference Parameters</h3>
            <Table
              dataSource={inferenceParametersData}
              columns={inferenceParametersHeader}
              showHeader={false}
              pagination={false}
            />
          </Col>
        </Row>

        <br />
        <h3>Inference Results</h3>
        <Chart width={900} height={500} data={response}>
          <Axis name="name" />
          <Axis name="probability" />
          <Tooltip />
          <Geom type="interval" position="name*probability" color="name" />
        </Chart>

        <Pagination simple defaultCurrent={1} total={50} />
      </div>
    )
  }
}