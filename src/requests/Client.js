import axios from 'axios';

export default axios.create({
  baseURL: 'http://mlmodelscope.org:80/api/'
});