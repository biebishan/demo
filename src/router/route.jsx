import React, { Component, useState, useEffect } from "react"
import Rain from "../product/Rain"
import Sunny from "../product/Sunny"
import Wind from "../product/Wind"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
export const routes = [
	{
		path: "/rain",
		component: Rain,
		name: "Rain"
	},
	{
		path: "/sunny",
		component: Sunny,
		name: "Sunny"
	},
	{
		path: "/wind",
		component: Wind,
		name: "Wind"
	}
]

export class RouteMap extends Component {
	render() {
		return (
			<Route>
				<Route path="/rain" component={Rain} />
				<Route path="/sunny" component={Sunny} />
				<Route path="/wind" component={Wind} />
			</Route>
		)
	}
}