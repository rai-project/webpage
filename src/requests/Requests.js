import { Component } from "react";
import Client from "./Client";

export function getModels() {
  Client.get("registry/models/manifest")
    .then(function(response) {
      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}

export function open(params) {
  Client.post("predict/open", params)
    .then(function(response) {
      console.log(response);
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}
