import './FunctionalOverview.css';
import { Row, Col, Button, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EvaluationImage from '../../resources/logo/evaluation.jpg'

export default class Experiment extends Component {
  render() {
    return(
      <div className="FunctionalOverview-function">
        <Row className="FunctionalOverview-title">
          <h1>I need to perform evaluations.</h1>
        </Row>
        <Row className="FunctionalOverview-content">
          <Col span={12}  className='FunctionalOverview-left'>
            <img className="FunctionalOverview-img" src={EvaluationImage}/>
          </Col>
          <Col span={12}  className='FunctionalOverview-text'>
          <Row>
            <p>
                MLModelScope allows you to profile and understand model/system
                bottlenecks. Developers can design and optimize the model with
                deployment and hardware in mind. System designers can introspect
                the model and its interaction with the entire software and
                hardware stack.
              </p>
              <p>
                Works on X86, ARM, and PPC, with more to come.
              </p>
            </Row>

            <Row className="FunctionalOverview-button">
              <Link to={'/evaluation'}>
                <Button type="primary">
                  <Icon type="right" />Get Started Now
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}