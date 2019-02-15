import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../screens/Home";
import Station from "../screens/Station";

class Router extends React.Component{
	render(){
		return <BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Home}/>
				<Route exact path={"/stations/:station"} component={Station}/>
			</Switch>
		</BrowserRouter>;
	}
}

export default Router