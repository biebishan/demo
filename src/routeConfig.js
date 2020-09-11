import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route, Link } from "react-router";
import { Router, Route } from 'react-router-dom'
import { routes } from "./router";
import Rain from "../src/product/Rain.jsx";
import App from "../src/App.js";
console.log("routes", routes);
ReactDOM.render(
  <Router path="/" component={App}>
    {routes.map((route, index) => {
      return <Route path="/rain" component={Rain}></Route>;
    })}
  </Router>,
  document.getElementById("root")
);
// const RouterList = () => (
//   <Router path="/" component={App}>
//     {routes.map((route, index) => {
//       console.log("routes", routes);
//       return <Route path="/rain" component={Rain}></Route>;
//     })}
//   </Router>
// );
// export default RouterList;
