import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

export default class ImportImgFromURL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURLs: [],
    }
  }

  render() {
    return(
      <div style={{marginTop: "40px"}}>
        <Input
          addonAfter={<Icon type="plus" />}
          defaultValue="http://ww4.hdnux.com/photos/41/15/35/8705883/4/920x920.jpg"
          onPressEnter={e => this.setState({imageURLs: this.state.imageURLs.concat(e.target.value)})}
        />
        <div>
          {this.state.imageURLs.map(
            (url) =>
            <div style={{width: "100%", textAlign: "center"}}><a>{url}</a></div>
          )}
        </div>
      </div>
    );
  }
}