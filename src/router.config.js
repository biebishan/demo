import React from "react"
import App from "./layouts/PrimaryLayout"
import Product from "@/pages/product/index"
import About from "@/pages/about/index"
import User from "@/pages/user/index"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom"
const Routes = () => (
	<Router>
		<App />
		<Switch >
			<Redirect exact from= "/" to="/product"></Redirect>
			<Route path="/product" component={Product} />
			<Route path="/about" component={About} />
			<Route path="/user" component={User} />
		</Switch>
	</Router>
)
export default Routes
