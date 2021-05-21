import React, { Component, useState, useEffect } from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink
} from "react-router-dom"
import styles from "./Side.less"
import hadeImg from "@/assets/war.jpg"
const activeStyleObj = {
	backgroundColor: "rgba(255, 255, 255, 0.24)",
	transition: "all 0.8s"
}
function Side() {
	return (
		<div className={styles.sideWrapper}>
			<div className={styles.sideWrapper_headImg}>
				<img src={hadeImg} alt="" />
			</div>
			<NavLink to={"/demo/product"} activeStyle={activeStyleObj}>
				文章
			</NavLink>
			<NavLink to={"/demo/about"} activeStyle={activeStyleObj}>
				发布
			</NavLink>
			<NavLink to={"/demo/user"} activeStyle={activeStyleObj}>
				个人中心
			</NavLink>
		</div>
	)
}
export default Side
