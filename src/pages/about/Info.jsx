import React, { Component } from "react"
import { Card, Avatar, Statistic, Carousel } from "antd"
import "./Info.less"
import mall from "@assets/mall.svg"
import jz from "@assets/jz.svg"
import kt from "@assets/kt.svg"
import wxast from "@assets/wxast.svg"
import yk from "@assets/yk.svg"
import yx from "@assets/yx.svg"
import qz from "@assets/qz.svg"
import zhouqiu from "@assets/zhongqiu.jpg"
import fanke from "@assets/fanke.gif"
import { transform } from "lodash"
const { Meta } = Card

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index: 0,
			initValue:0,
			translateValue:0,
			list: [
				{
					id: "tedfd",
					imgSrc: mall
				},
				{
					id: "tedfdfef",
					imgSrc: jz
				},
				{
					id: "tedfd12",
					imgSrc: kt
				},
				{
					id: "tedfffd",
					imgSrc: wxast
				},
				{
					id: "tedsdffd",
					imgSrc: yk
				},
				{
					id: "tedggwfd",
					imgSrc: yx
				}
			]
		}
	}
	componentDidMount() {}
	changeTab = (e, index) => {
		let value = 200*index + this.state.initValue
		this.setState({
			translateValue:value
		})
	}
	render() {
		const arr = [1, 2, 3]
		const { list, translateValue } = this.state
		return (
			<div className={"aboutWrapper"}>
				<div className={"aboutWrapper_bgc"}>
					<div className={"aboutWrapper_numberInfo"}>
						<h2>10年专注</h2>
						<h2>让经营更简单</h2>
						<div>
							<Statistic
								title={arr.toLocaleString()}
								value={"Active Users"}
							/>
						</div>
						<div>
							<Statistic title={293} value={34242555} />
						</div>
						<div>
							<Statistic title={2893} value={"Active Users"} />
						</div>
					</div>
					<div className={"aboutWrapper_numberCarousel"}>
						<Carousel autoplay>
							<div>
								<img src={zhouqiu} alt="" />
							</div>
							<div>
								<img src={fanke} alt="" />
							</div>
							<div>
								<img src={zhouqiu} alt="" />
							</div>
							<div>
								<img src={fanke} alt="" />
							</div>
						</Carousel>
					</div>
				</div>
				<div className={"aboutWrapper_info"}>
					{list.map((item) => {
						return (
							<div key={item.id}>
								<Card style={{ width: 300 }}>
									<Meta
										avatar={<Avatar src={item.imgSrc} />}
										title="Card title"
										description="This is the description"
									/>
								</Card>
							</div>
						)
					})}
				</div>
				<div className={"aboutWrapper_tab"}>
					<h1>海量模板免费体验</h1>
					<ul>
						<li onClick={(e) => this.changeTab(e, 0)}>网站模板</li>
						<li onClick={(e) => this.changeTab(e, 1)}>商城模板</li>
						<li onClick={(e) => this.changeTab(e, 2)}>
							小程序模板
						</li>
						<li onClick={(e) => this.changeTab(e, 3)}>
							营销活动模板
						</li>
						<li onClick={(e) => this.changeTab(e, 4)}>图片模板</li>
						<div
							className={"aboutWrapper_tabBorder"}
							style={{ 
								transform: `translateX(${translateValue}px)`,
								transition:'all 0.3s'
							}}
						></div>
					</ul>
				</div>
				<div className={"aboutWrapper_tabInfo"}>
					<div className={"aboutWrapper_tabWebsite"}>

					</div>
					<div className={"aboutWrapper_tabModule"}>
						<h1>各行各业模板提供选择</h1>
						<ul>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
							<li>人力资源</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default About
