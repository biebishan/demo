import React from "react"
import ReactDOM from "react-dom";
import Product from "@/pages/product/index"
import About from "@/pages/about/index"
import User from "@/pages/user/index"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
const Routes = () => (
	<Router>
		<Route>
			<Route path="/product" component={Product} />
			<Route path="/about" component={About} />
			<Route path="/user" component={User} />
		</Route>
	</Router>
)
export default Routes
