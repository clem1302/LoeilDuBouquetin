import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Station from "../screens/Station";
import Header from "./Header";
import Footer from "./Footer";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
        <div>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/stations/:station"} component={Station} />
          </Switch>
          <Footer />
        </div>
=======
        <Switch>
          <Route exact path={"/"} component={Home} />
        </Switch>
>>>>>>> 2f77b43... Add tests for Homepage
      </BrowserRouter>
    );
  }
}

export default Router;
