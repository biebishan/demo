import React, { Component, useState, useEffect } from "react"
import { Layout, Button, Transfer, Tree, Icon } from "antd"
import "./PrimaryLayout.less"
import Side from "@component/Side"
import Product from "@/pages/product/index";
import Info from "@/pages/about/index";
import User from "@/pages/user/index";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink
} from "react-router-dom"
const { Header, Footer, Sider, Content } = Layout
function PrimaryLayout() {
	return (
		<div className="primaryLayout">
			<Layout>
				<Sider>
					<Side />
				</Sider>
				<Layout>
					<Header>Header</Header>
					<Content>
						<Route path="/demo/product" component={Product} />
						<Route path="/demo/about" component={Info} />
						<Route path="/demo/user" component={User} />
					</Content>
				</Layout>
			</Layout>
		</div>
	)
}
export default PrimaryLayout
