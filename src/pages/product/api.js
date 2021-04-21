import request from '@/utils/request';
export function getData(params, callback) {
    return request.get('/getData', params, callback);
  }