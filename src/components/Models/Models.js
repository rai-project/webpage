import React, { Component } from 'react';
import axios from "axios";
import uniqBy from 'lodash';
import { getModels } from "../../requests/Requests"
const json = require('../../docs/models.json');

// export default class Models extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {json: json};
//     this.models = json.manifests.map(m => { Model(m) })
//   }
// }

const response = getModels();
  
var models = json.manifests;
var uniqModels = uniqBy(models, 'name');
// models.map(
//   (item, index) => item['id'] = index
// );
console.log(models.length);
console.log(uniqModels);

export default models;