import React, { Component, useState, useEffect } from "react";
import { routes, RouteMap } from "@/router/route";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
function Side() {
	return (
		<ul>
			{routes.map((item, index) => {
				return (
					<li key={index}>
						<NavLink
							activeStyle={{
								fontWeight: "bold",
								backgroundColor: "rgba(64, 169, 255, 0.6)"
							}}
							to={item.path}
						>
							{item.name}
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
export default Side
