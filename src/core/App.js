import React from "react";
import SingIn from "../features/SingIn";
import Catalog from "../features/Catalog";
import { HashRouter, Route, Switch, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      <Switch>
      <Route exact path="/" component={SingIn} />
        <Route path="/catalog" component={Catalog} />
      </Switch>
    </HashRouter>
    </Provider>
  );
}

export default App;
