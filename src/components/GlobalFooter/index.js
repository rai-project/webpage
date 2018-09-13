import React, { Component } from 'react';
import './GlobalFooter.css';
import { Layout, Menu, Dropdown, Icon, Row, Col } from 'antd';
import C3SRLogo from "../../resources/logo/logo-c3sr.png";
import IBMLogo from "../../resources/logo/logo-ibm.svg";
import UIUCLogo from "../../resources/logo/logo-uiuc.svg";
const { Footer } = Layout;

export default class GlobalFooter extends Component {
  render() {
		return (
      <Footer className="DarkBlue" style={{verticalAlign: 'middle', height: '100px', padding: '0px'}}>
        <div style={{display: 'inline', float: 'left', paddingTop: '20px'}}>
          <div className="GlobalFooter-block">
            <img src={ C3SRLogo } className="C3SR-logo"/>
          </div>
          <div className="GlobalFooter-block">GitHub</div>
          <div className="GlobalFooter-block">Terms</div>
          <div className="GlobalFooter-block">Privacy</div>
          <div className="GlobalFooter-block">Copyright</div>
        </div>
        <div style={{display: 'inline', float: 'right', paddingTop: '40px'}}>
          <div className="GlobalFooter-block-right">
            <img src={ IBMLogo } className="IBM-logo"/>
          </div>
          <div className="GlobalFooter-block-right">
            <img src={ UIUCLogo } className="UIUC-logo"/>
          </div>
        </div>
      </Footer>
    );
  }
}