import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import Header from "./components/Header.jsx"
import Test from "./components/Test.jsx"
import PrimaryLayout from "./layouts/PrimaryLayout.jsx"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

ReactDOM.render(
	<Router>
		<div>
			<PrimaryLayout />
			{/* <Header /> */}
			{/* <Test /> */}
		</div>
	</Router>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
