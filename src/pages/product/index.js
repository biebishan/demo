import React, { Component } from "react";
import { Button, Statistic } from 'antd';
import Banner from './Banner';
import api from '@/api/index.js'
const {
	getData
} = api
class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data:{}
		}
	}
	queryData = () => {
		getData().then( (res) => {
			let data = res.data;
			this.setState({
				data:data[0]
			})
		})
	}
	render() {
		const { data } =this.state;
		console.log('data', data)
		return (
			<div>
				{/* <Banner /> */}
				<Button onClick={this.queryData}>获取数据</Button>
				<Statistic title="Account Balance (CNY)" value={data.gender} precision={2} />
			</div>
		)
	}
}
export default Product
