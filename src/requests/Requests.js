import { Component } from 'react';
import axios from "axios";

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