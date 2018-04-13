import './FunctionalOverview.css';
import { Row, Col, Button, Icon } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeploymentImage from '../../resources/logo/deployment.jpg'

export default class Deployment extends Component {
  render() {
    return(
      <div className="FunctionalOverview-function">
        <Row className="FunctionalOverview-title">
          <h1>I need to deploy my models.</h1>
        </Row>
        <Row className="FunctionalOverview-content">
          <Col span={12}  className='FunctionalOverview-left'>
            <img className="FunctionalOverview-img" src={DeploymentImage}/>
          </Col>
          <Col span={12}  className='FunctionalOverview-text'>
            <Row>
              <p>
                As a model developer there's no need to build a demo for
                anyone to try it. Focus only on model development.
              </p>
              <p>
                MLModelScope allows you to easily expose your model to the
                public without worrying about non-repeatable results. 
                Users see the same result as you would see on their dataset
                and can provide you feedback. 
              </p>
            </Row>

            <Row className="FunctionalOverview-button">
              <Link to={'/deployment'}>
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