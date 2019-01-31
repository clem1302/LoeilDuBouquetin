import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../screens/Home";

class Router extends React.Component{
	render(){
		return <BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Home}/>
			</Switch>
		</BrowserRouter>;
	}
}

export default Router