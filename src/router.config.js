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
			<Redirect exact from= "/demo" to="/demo/product"></Redirect>
			<Redirect exact from= "/" to="/demo/product"></Redirect>
		</Switch>
	</Router>
)
export default Routes
