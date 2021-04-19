import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Product from '@/pages/product/index'
import About from '@/pages/about/index'
import User from '@/pages/user/index'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
export const routes = [
	{
		path: "/demo/product",
		component: Product,
		name: "Product"
	},
	{
		path: "/demo/about",
		component: About,
		name: "About"
	},
	{
		path: "/demo/user",
		component: User,
		name: "User"
	}
]

export class RouteMap extends Component {
	render() {
		return (
			<Route>
				<Route path="/demo/product" component={Product} />
				<Route path="/demo/about" component={About} />
				<Route path="/demo/user" component={User} />
			</Route>
		)
	}
}