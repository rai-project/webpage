/* eslint-disable */
/*jshint esversion: 6 */
/*global fetch, btoa */

"use strict";

import uuid from "uuid/v4";
import { has, includes, assign } from "lodash";

const baseURL = process.env.REACT_APP_NETLIFY_API_URL || "";

function serializeQueryParams(parameters) {
  let str = [];
  for (let p in parameters) {
    if (parameters.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]));
    }
  }
  return str.join("&");
}

function mergeQueryParams(parameters, queryParameters) {
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      let parameter = parameters.$queryParameters[parameterName];
      queryParameters[parameterName] = parameter;
    });
  }
  return queryParameters;
}

const propagationHeaders = [
  "x-request-id",
  "x-powered-by",
  "x-b3-flags",
  "x-b3-traceid",
  "x-b3-spanid",
  "x-b3-sampled",
];

function processHeaders(headers) {
  let res = {};
  for (let key of headers.keys()) {
    if (includes(propagationHeaders, key)) {
      res[key] = headers.get(key);
    }
  }
  return {
    headers: res,
  };
}

/**
 * Close a predictor clear it's memory.
 * @method
 * @name DLFramework#Close
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Close(params) {
  let urlPath = baseURL + "/api/predict/close";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * The result is a prediction feature list.
 * @method
 * @name DLFramework#Dataset
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Dataset(params) {
  let urlPath = baseURL + "/api/predict/dataset";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * The result is a prediction feature list for each image.
 * @method
 * @name DLFramework#Images
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Images(params) {
  let urlPath = baseURL + "/api/predict/images";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * Opens a predictor and returns an id where the predictor
is accessible. The id can be used to perform inference
requests.
 * @method
 * @name DLFramework#Open
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Open(params) {
  let urlPath = baseURL + "/api/predict/open";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * Clear method clears the internal cache of the predictors
 * @method
 * @name DLFramework#Reset
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Reset(params) {
  let urlPath = baseURL + "/api/predict/reset";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * The result is a prediction feature stream.
 * @method
 * @name DLFramework#DatasetStream
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function DatasetStream(params) {
  let urlPath = baseURL + "/api/predict/stream/dataset";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * The result is a prediction feature stream for each image.
 * @method
 * @name DLFramework#ImagesStream
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function ImagesStream(params) {
  let urlPath = baseURL + "/api/predict/stream/images";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * The result is a prediction feature stream for each url.
 * @method
 * @name DLFramework#URLsStream
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function URLsStream(params) {
  let urlPath = baseURL + "/api/predict/stream/urls";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * The result is a prediction feature stream for each url.
 * @method
 * @name DLFramework#URLs
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function URLs(params) {
  let urlPath = baseURL + "/api/predict/urls";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );

  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 *
 * @method
 * @name DLFramework#FrameworkAgents
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.frameworkVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function FrameworkAgents(params) {
  let urlPath = baseURL + "/api/registry/frameworks/agent";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["frameworkName"] !== undefined) {
    queryParameters["framework_name"] = parameters["frameworkName"];
  }

  if (parameters["frameworkVersion"] !== undefined) {
    queryParameters["framework_version"] = parameters["frameworkVersion"];
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "GET",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 *
 * @method
 * @name DLFramework#FrameworkManifests
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.frameworkVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function FrameworkManifests(params) {
  let urlPath = baseURL + "/api/registry/frameworks/manifest";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["frameworkName"] !== undefined) {
    queryParameters["framework_name"] = parameters["frameworkName"];
  }

  if (parameters["frameworkVersion"] !== undefined) {
    queryParameters["framework_version"] = parameters["frameworkVersion"];
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "GET",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 *
 * @method
 * @name DLFramework#ModelAgents
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.frameworkVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.modelName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.modelVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function ModelAgents(params) {
  let urlPath = baseURL + "/api/registry/models/agent";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["frameworkName"] !== undefined) {
    queryParameters["framework_name"] = parameters["frameworkName"];
  }

  if (parameters["frameworkVersion"] !== undefined) {
    queryParameters["framework_version"] = parameters["frameworkVersion"];
  }

  if (parameters["modelName"] !== undefined) {
    queryParameters["model_name"] = parameters["modelName"];
  }

  if (parameters["modelVersion"] !== undefined) {
    queryParameters["model_version"] = parameters["modelVersion"];
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "GET",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 *
 * @method
 * @name DLFramework#ModelManifests
 * @param {object} parameters - method options and parameters
 * @param {string} parameters.frameworkName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.frameworkVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.modelName - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 * @param {string} parameters.modelVersion - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function ModelManifests(params) {
  let urlPath = baseURL + "/api/registry/models/manifest";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["frameworkName"] !== undefined) {
    queryParameters["framework_name"] = parameters["frameworkName"];
  }

  if (parameters["frameworkVersion"] !== undefined) {
    queryParameters["framework_version"] = parameters["frameworkVersion"];
  }

  if (parameters["modelName"] !== undefined) {
    queryParameters["model_name"] = parameters["modelName"];
  }

  if (parameters["modelVersion"] !== undefined) {
    queryParameters["model_version"] = parameters["modelVersion"];
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "GET",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * Login to MLModelScope platform
 * @method
 * @name DLFramework#Login
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Login(params) {
  let urlPath = baseURL + "/api/login";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}

/**
 * Signup to MLModelScope platform
 * @method
 * @name DLFramework#Signup
 * @param {object} parameters - method options and parameters
 * @param {} parameters.body - CarML (Cognitive ARtifacts for Machine Learning) is a framework allowing people to develop and deploy machine learning models. It allows machine learning (ML) developers to publish and evaluate their models, users to experiment with different models and frameworks through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.
 */
export function Signup(params) {
  let urlPath = baseURL + "/api/signup";
  let body = {},
    queryParameters = {},
    headers = {},
    form = {};

  if (params && params.headers) {
    headers = params.headers;
  }

  headers["Accept"] = "application/json";
  headers["Content-Type"] = "application/json";

  if (has(params, "requestId")) {
    headers["X-Request-ID"] = params.requestId;
  } else if (has(params, "X-Request-ID")) {
    headers["X-Request-ID"] = params["X-Request-ID"];
  } else {
    headers["X-Request-ID"] = uuid();
  }

  if (!has(headers, "Content-Type")) {
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  let parameters = params;

  if (parameters === undefined) {
    parameters = {};
  }

  if (parameters["body"] !== undefined) {
    parameters["body"] = JSON.stringify(parameters["body"]);
  }

  if (parameters["body"] === undefined) {
    throw new Error("Missing required  parameter: body");
  }

  queryParameters = mergeQueryParams(parameters, queryParameters);

  const queryParams =
    queryParameters && Object.keys(queryParameters).length
      ? "?" + serializeQueryParams(queryParameters)
      : "";

  let options = {
    credentials: "include",
    cache: "no-cache",
    mode: "cors",
  };

  options = assign(parameters, options);

  options = assign(
    {
      method: "POST",
      headers,
    },
    options
  );
  return fetch(urlPath + queryParams, options).then(response =>
    response.json().then(json => assign(processHeaders(response.headers), json))
  );
}
