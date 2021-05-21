import React, { Component } from "react"
import { Carousel } from "antd"
import night from "@/assets/yewan.jpg"
import gun from "@/assets/dazhan.jpg"
import technology from "@/assets/keji.jpg"
import war from "@/assets/war.jpg"
import planet from "@/assets/xingqiu.jpg"
import city from "@/assets/dushi.jpg"
import './Banner.less'
const contentStyle = {
	height: "160px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79"
}
class Banner extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentWillMount(){
		
	}
	render() {
		return (
			<div className={'bannerWrapper'}>
			</div>
		)
	}
}
export default Banner
