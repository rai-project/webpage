import { Component } from 'react';
import axios from "axios";

const instance = axios.create({
  baseURL: 'http://mlmodelscope.org:80/api/',
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function getModels() {
  axios.get('http://mlmodelscope.org:80/api/registry/models/manifest')
  .then(function (response) {
    console.log(response);
    return(response.data);
  })
  .catch(function (error) {
    console.log(error);
    return(error);
  });
}

export function open(params) {
  instance.post('http://mlmodelscope.org/api/predict/open', params)
  .then(function (response) {
    console.log(response);
    return(response.data);
  })
  .catch(function (error) {
    console.log(error);
    return(error);
  });
}