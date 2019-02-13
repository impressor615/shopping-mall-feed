import "@/assets/styles/main.scss";
import React from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Loading from "@/components/Loading";
import configureStore from "@/configureStore";
import Products from "@/pages/products";
import Ranks from "@/pages/ranks";

const Store = configureStore();
class App extends React.PureComponent {
  public render() {
    return (
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route exact path="/ranks" component={Ranks} />
            <Redirect to="/products" />
          </Switch>
        </Router>
        <Loading />
      </Provider>
    );
  }
}

export default App;
