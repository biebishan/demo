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
			<Route path="/demo/product" component={Product} />
			<Route path="/demo/about" component={About} />
			<Route path="/demo/user" component={User} />
		</Switch>
	</Router>
)
export default Routes
