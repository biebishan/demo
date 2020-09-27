import React, { Component, useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Product from '@/pages/product/index'
import About from '@/pages/about/index'
import User from '@/pages/user/index'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
export const routes = [
	{
		path: "/product",
		component: Product,
		name: "Product"
	},
	{
		path: "/about",
		component: About,
		name: "About"
	},
	{
		path: "/user",
		component: User,
		name: "User"
	}
]

export class RouteMap extends Component {
	render() {
		return (
			<Route>
				<Route path="/product" component={Product} />
				<Route path="/about" component={About} />
				<Route path="/user" component={User} />
			</Route>
		)
	}
}