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
import { CSSTransition } from "react-transition-group"
const { Meta } = Card

class About extends Component {
	constructor(props) {
		super(props)
		this.state = {
			index: 0,
			initValue: 0,
			translateValue: 0,
			showInfoType: "website",
			showInfo: false,
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
		let value = 200 * index + this.state.initValue
		this.setState({
			translateValue: value
		})
		switch (index) {
			case 0: {
				this.setState({
					showInfoType: "website",
				})
				break
			}
			case 1: {
				this.setState({
					showInfoType: "mall",
				})
				break
			}
			case 2: {
				this.setState({
					showInfoType: "application",
				})
				break
			}
			case 3: {
				this.setState({
					showInfoType: "sale",
				})
				break
			}
			case 4: {
				this.setState({
					showInfoType: "picture",
				})
				break
			}
			default:
				break
		}
	}
	render() {
		const arr = [1, 2, 3]
		const { list, translateValue, showInfoType } = this.state
		const Info0 = (
			<div className={"aboutWrapper_tabInfo"}>
				<div className={"aboutWrapper_tabWebsite"}></div>
				<div className={"aboutWrapper_tabModule"}>
					<h1>各行各业模板提供选择</h1>
					<ul>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
						<li>人力资源0</li>
					</ul>
				</div>
			</div>
		)
		const Info1 = (
			<div className={"aboutWrapper_tabInfo"}>
				<div className={"aboutWrapper_tabWebsite"}></div>
				<div className={"aboutWrapper_tabModule"}>
					<h1>各行各业模板提供选择</h1>
					<ul>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
						<li>人力资源1</li>
					</ul>
				</div>
			</div>
		)
		const Info2 = (
			<div className={"aboutWrapper_tabInfo"}>
				<div className={"aboutWrapper_tabWebsite"}></div>
				<div className={"aboutWrapper_tabModule"}>
					<h1>各行各业模板提供选择</h1>
					<ul>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
						<li>人力资源2</li>
					</ul>
				</div>
			</div>
		)
		const Info3 = (
			<div className={"aboutWrapper_tabInfo"}>
				<div className={"aboutWrapper_tabWebsite"}></div>
				<div className={"aboutWrapper_tabModule"}>
					<h1>各行各业模板提供选择</h1>
					<ul>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
						<li>人力资源3</li>
					</ul>
				</div>
			</div>
		)
		const Info4 = (
			<div className={"aboutWrapper_tabInfo"}>
				<div className={"aboutWrapper_tabWebsite"}></div>
				<div className={"aboutWrapper_tabModule"}>
					<h1>各行各业模板提供选择</h1>
					<ul>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
						<li>人力资源4</li>
					</ul>
				</div>
			</div>
		)
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
								transition: "all 0.3s"
							}}
						></div>
					</ul>
				</div>
				{showInfoType === "website" && Info0}
				{showInfoType === "mall" && Info1}
				{showInfoType === "application" && Info2}
				{showInfoType === "sale" && Info3}
				{showInfoType === "picture" && Info4}
			</div>
		)
	}
}
export default About
