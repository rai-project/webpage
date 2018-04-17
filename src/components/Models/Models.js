import React, { Component } from 'react';
const json = require('../../docs/models.json');

// export default class Models extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {json: json};
//     this.models = json.manifests.map(m => { Model(m) })
//   }
// }
var models = json.manifests;
models.map(
  (item, index) => item['id'] = index
);

export default models;