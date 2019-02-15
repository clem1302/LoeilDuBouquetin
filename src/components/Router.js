import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../screens/Home";
import Station from "../screens/Station";
import Header from "./Header";

class Router extends React.Component{
	render(){
		return <BrowserRouter>
			<div>
				<Header/>
				<Switch>
					<Route exact path={"/"} component={Home}/>
					<Route exact path={"/stations/:station"} component={Station}/>
				</Switch>
			</div>
		</BrowserRouter>;
	}
}

export default Router