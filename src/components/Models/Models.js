import React, { Component } from 'react';
import _ from 'lodash';
import * as models from './ModelLoader';

export const modelsKey = _.keys(models).sort();
export default models;