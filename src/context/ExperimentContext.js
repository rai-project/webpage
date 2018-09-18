import React, { Component } from 'react';

export const ExperimentContext = React.createContext();

export default class ExperimentProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      traceLevel: "NO_TRACE",
      imageUrls: [],
      models: [],
      frameworks: [],
      machines: [],
      addUrl: (url) => this.setState({
        imageUrls: this.state.imageUrls.concat(url)
      }),
      addModel: (name, version) => this.setState({
        models: this.state.models.concat({name: name, version: version})
      }),
      addFramework: (name, version) => this.setState({
        frameworks: this.state.frameworks.concat({name: name, version: version})
      }),
      changeTraceLevel: (newLevel) => this.setState({
        traceLevel: newLevel
      }),
    }
  }

  render() {
    return (
      <ExperimentContext.Provider value={this.state}>
        {this.props.children}
      </ExperimentContext.Provider>
    )
  }
}