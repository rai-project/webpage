import React, { Component } from "react";
import yeast from "yeast";
import Helmet from "react-helmet";
import { Layout } from "antd";
import SelectDataset from "../components/ExperimentSteps/SelectDataset/SelectDataset";
import ExperimentSetupSider from "../components/ExperimentSteps/ExperimentSetupSider/ExperimentSetupSider";
import SelectModel from "../components/ExperimentSteps/SelectModel/SelectModel";
import SelectFramework from "../components/ExperimentSteps/SelectFramework/SelectFramework";
import SelectMachine from "../components/ExperimentSteps/SelectMachine/SelectMachine";
import InferenceResult from "../components/InferenceResult/InferenceResult";
import ExperimentProvider from "../context/ExperimentContext";
import { Route, Switch, Redirect } from "react-router-dom";

const siderMenuNextStep = {
  dataset: "model",
  model: "framework",
  framework: "machine",
  machine: "predict",
};

export default class ExperimentPage extends Component {
  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.state = {
      current: "dataset",
      future: "model",
    };
  }

  handleChangePage(s) {
    if (s !== "predict") {
      this.setState({ current: s });
      this.setState({ future: siderMenuNextStep[s] });
    } else {
      this.setState({ current: s });
    }
  }

  render() {
    return (
      <Layout style={{ background: "#E8E9EB" }}>
        <Helmet title="Experiment" meta={[{ property: "og:title", content: "Experiment" }]} />
        <ExperimentProvider>
          <ExperimentSetupSider
            onPageChange={this.handleChangePage}
            current={this.state.current}
            future={this.state.future}
            siderMenuNextStep={siderMenuNextStep}
          />
          <Switch>
            <Route exact path={"dataset"} component={SelectDataset} />
            <Route exact path={"model"} component={SelectModel} />
            <Route exact path={"framework"} component={SelectFramework} />
            <Route exact path={"machine"} component={SelectMachine} />
            <Route exact path={"predict"} component={InferenceResult} />
            <Redirect exact from="/experiment" to="/experiment/dataset" />
          </Switch>
        </ExperimentProvider>
      </Layout>
    );
  }
}
