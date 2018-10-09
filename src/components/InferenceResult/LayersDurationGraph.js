import React, { Component } from "react";
import _ from "lodash";
import isPromise from "is-promise";
import { layers as layersData } from "../../docs";
import { ExperimentContext } from "../../context/ExperimentContext";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  Coord,
} from "bizcharts";
import DataSet from "@antv/data-set";

class LayersDurationGraph extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      frameworks: [
        { name: "Caffe", version: "1.0" },
        { name: "Caffe2", version: "0.8.1" },
        { name: "MXNet", version: "0.11.0" }
      ],
    }
  }

  async componentDidMount() {
    try {
      let data = layersData[this.props.model]();
      if (isPromise(data)) {
        data = await data;
        if (!_.isString(data)) {
          data = await data.json();
        }
      }
      let groupedData = [];
      this.props.context.frameworks.map((framework) => {
        let temp = _.find(
          data,
          e =>
            _.toLower(e.framework_name).replace(/-/g, '_') ===
            _.toLower(framework.name).replace(/-/g, '_') &&
            e.machine_architecture === "amd64" &&
            e.host_name === "whatever" &&
            e.batch_size == 16
        )
        groupedData.push(temp);
      })
      console.log(groupedData);
      this.setState({ data: groupedData });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    if (this.state.data === null) {
      return (<div></div>)
    }
    let frameworksLayersData = [];
    this.state.data.map((group) => {
      let layersData = [];
      group.layer_informations.map((item) => {
        let name = item.name;
        if (_.find(layersData, e => e.layer === name) !== undefined) {
          let num = 1;
          while(true) {
            if (_.find(layersData, e => e.layer === name+num.toString()) === undefined) {
              name = name + num.toString();
              break;
            }
            num++;
          }
        }
        layersData.unshift({ layer: name, duration: _.mean(item.durations) });
      })
      frameworksLayersData.push({ framework_name: group.framework_name, layers_informations: layersData });
    });
    console.log(frameworksLayersData);

    return (
      <div>
        {frameworksLayersData.map((frameworkLayer) => {
          const scale = {
            layer: {
              type: "cat",
              tickCount: frameworkLayer.layers_informations.length,
            },
          }
          console.log(frameworkLayer.layers_informations.length * 20);
          return (
            <div>
              <h1>Layer durations for {this.props.model} using {frameworkLayer.framework_name}</h1>
              <Chart padding="auto" height={frameworkLayer.layers_informations.length * 20} data={frameworkLayer.layers_informations} forceFit>
                <Coord transpose />
                <Axis
                  name="layer"
                  labelOffset={10}
                />
                <Axis name="duration" />
                <Tooltip />
                <Geom type="interval" position="layer*duration" />
              </Chart>
            </div>
          )
        }
        )}
      </div>
    );
  }
}

export default props => (
  <ExperimentContext.Consumer>
    {context => <LayersDurationGraph {...props} context={context} />}
  </ExperimentContext.Consumer>
);