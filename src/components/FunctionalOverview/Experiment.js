import './FunctionalOverview.css';
import { Row, Col, Button, Icon, Card } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ExperimentImage from '../../resources/logo/experiment.jpg'
import ExperimentPage from '../ExperimentSteps'

export default class Experiment extends Component {
  render() {
    return(
      <div className="FunctionalOverview-function">
        <Row className="FunctionalOverview-title">
          <h1>I need to perform experiments.</h1>
        </Row>
        <Row className="FunctionalOverview-content">
          <Col span={12} className='FunctionalOverview-left'>
            <img className="FunctionalOverview-img" src={ExperimentImage}/>
          </Col>
          <Col span={12} className='FunctionalOverview-text'>
            <Row>
            <p>
            As a model user there's no need to read many pages of documentations, 
            install frameworks, download models, set up software and hardware environment 
            to see which model most applicable to your problem.
            </p>
            <p>
            MLModelScope allows you to discover and experiment with different model/framework/hardware 
            options through a few clicks, with your own data. 
            </p>
            </Row>
            
            <Row>
                <p></p>
            </Row>

            <Row className="FunctionalOverview-button">
              <Link to={'/experiment'}>
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