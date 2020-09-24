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
	render() {
		return (
			<div className={'bannerWrapper'}>
				<Carousel autoplay>
					<div>
						<img src={night} alt="" />
					</div>
					<div>
						<img src={gun} alt="" />
					</div>
					<div>
						<img src={technology} alt="" />
					</div>
					<div>
						<img src={war} alt="" />
					</div>
					<div>
						<img src={planet} alt="" />
					</div>
					<div>
						<img src={city} alt="" />
					</div>
				</Carousel>
			</div>
		)
	}
}
export default Banner
