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
      removeModel: (index) => {
        console.log(this.state);
        this.setState({models: this.state.models.splice(index, 1)});
        console.log(this.state);
      },
      addFramework: (name, version) => this.setState({
        frameworks: this.state.frameworks.concat({name: name, version: version})
      }),
      removeFramework: (index) => this.setState({
        frameworks: this.state.frameworks.splice(index, 1)
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