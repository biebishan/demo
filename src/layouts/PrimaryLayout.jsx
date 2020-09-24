import React, { Component, useState, useEffect } from "react"
import { Layout, Button, Transfer, Tree } from "antd"
import "./PrimaryLayout.less"
import Rain from "../product/Rain"
import Sunny from "../product/Sunny"
import Wind from "../product/Wind"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { routes, RouteMap } from "@/router/route"
const { Header, Footer, Sider, Content } = Layout
function PrimaryLayout() {
	return (
		<div className="primaryLayout">
			<Layout>
				<Sider>
					<ul>
						{routes.map((item, index) => {
							return (
								<li key={index}>
									<Link to={item.path}>{item.name}</Link>
								</li>
							)
						})}
					</ul>
				</Sider>
				<Layout>
					<Header>Header</Header>
					<Content>
						<Route path="/rain" component={Rain} />
						<Route path="/sunny" component={Sunny} />
						<Route path="/wind" component={Wind} />
					</Content>
					<Footer>Footer</Footer>
				</Layout>
			</Layout>
		</div>
	)
}
export default PrimaryLayout
