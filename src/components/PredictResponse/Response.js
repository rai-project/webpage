import React, { Component } from 'react';
import { sortBy } from 'lodash';
const json = require('../../docs/response.json');

function processName(str) {
  var lower = str.split(',')[0].split(' ').slice(1).join(' ');
  var result = lower.charAt(0).toUpperCase() + lower.substr(1);
  return result;
}

var response = sortBy(json['responses'][0]['features'], ['probability']).reverse();
response.forEach(function(item, index) {
  item['name'] = processName(item['name']);
});
export default response.slice(0, 5);