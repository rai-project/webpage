import axios from 'axios';

export default axios.create({
  baseURL: 'https://mlmodelscope.org:80/api/'
});