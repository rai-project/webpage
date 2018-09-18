import './InferenceResult.css';
import React, { Component } from 'react';
import { Col, Row, Table, Divider, Pagination, Layout, Tag } from 'antd';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import response from '../PredictResponse/Response';
import { ExperimentContext } from '../../context/ExperimentContext';
import { open } from '../../requests/Requests';

const { Content } = Layout;

export default class InferenceResult extends Component {
  predict() {
    var setup = <ExperimentContext.Consumer>{(context) => context}</ExperimentContext.Consumer>;
    var openParams = {
      framework_name:"CNTK",
      framework_version:"2.3",
      model_name:"BVLC-AlexNet",
      model_version:"1.0",
      options: {
        batch_size:1,
        execution_options: {
          trace_level:"FULL_TRACE",
          device_count:{
            GPU:0
          }
        }
      }
    }
    var response = open(openParams);
  }

  render() {
    const responseHeader=[
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Probability',
        dataIndex: 'probability',
        key: 'probability',
      }
    ];
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

    this.predict();
    // return(
    //   <div>
    //     <Row gutter={24}>
    //       <Col span={12}>
    //         <h3>Performance Overview</h3>
    //         <Table
    //           dataSource={performanceOverviewData}
    //           columns={performanceOverviewHeader}
    //           showHeader={false}
    //           pagination={false}
    //         />
    //       </Col>
    //       <Col span={12}>
    //         <h3>Inference Parameters</h3>
    //         <Table
    //           dataSource={inferenceParametersData}
    //           columns={inferenceParametersHeader}
    //           showHeader={false}
    //           pagination={false}
    //         />
    //       </Col>
    //     </Row>

    //     <br />
    //     <h3>Inference Results</h3>
    //     <Chart width={900} height={500} data={response}>
    //       <Axis name="name" />
    //       <Axis name="probability" />
    //       <Tooltip />
    //       <Geom type="interval" position="name*probability" color="name" />
    //     </Chart>

    //     <Pagination simple defaultCurrent={1} total={50} />
    //   </div>
    // )

    return (
      <Layout style={{background: "#E8E9EB", margin: '0px 20px 120px 20px' }}>
        <Content style={{}}>
          <div style={{background: "#1A263A", color: "white", paddingTop: "30px", paddingBottom: "60px"}}>
            <h2 style={{marginTop: "60px", marginLeft: "40px", color: "white"}}>Inference Result</h2>
          </div>

          <div>
            <ExperimentContext.Consumer>
              {(context) => context.imageUrls.map(
                (url) =>
                <div style={{marginTop: "40px", marginLeft: "20%", marginRight: "20%"}}>
                <img src={url} style={{width: "60%", marginLeft: "20%", marginRight: "20%"}}/>
                {context.models.map(
                  (model) =>
                  <div>
                    {context.frameworks.map(
                      (framework) =>
                      <div style={{marginTop: "40px"}}>
                        <h1 style={{textAlign: "center"}}>
                          {model.name + " V" + model.version}
                          <Tag color="#E84A27">{framework.name + " V" + framework.version}</Tag>
                        </h1>
                        <Table
                          dataSource={response}
                          columns={responseHeader}
                          showHeader={true}
                          pagination={false}
                          style={{marginTop: "20px"}}
                        />
                      </div>
                    )}
                  </div>
                )}
                </div>
              )}
            </ExperimentContext.Consumer>
          </div>
        </Content>
      </Layout>
    )
  }
}