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
					showInfoType: "website"
				})
				break
			}
			case 1: {
				this.setState({
					showInfoType: "mall"
				})
				break
			}
			case 2: {
				this.setState({
					showInfoType: "application"
				})
				break
			}
			case 3: {
				this.setState({
					showInfoType: "sale"
				})
				break
			}
			case 4: {
				this.setState({
					showInfoType: "picture"
				})
				break
			}
			default:
				break
		}
	}
	render() {
		return <div>hello</div>
	}
}
export default About
