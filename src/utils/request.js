import axios from "axios"
import qs from 'qs';
import { useCallback } from "react";
const _axios = axios.create({
	baseURL: "http://localhost:8080/"
})
const get = (url, data, callback) => {
	return _axios.get(`${url}?${qs.stringify(data)}`).then((res) => callback(res.data))
}
const post = (url, data, callback) => {
	return _axios.post(`${url}`, data).then((res) => callback(res.data))
}
export default {
	get,
	post
}
