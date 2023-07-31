import SingIn from "../features/SingIn";
import Catalog from "../features/Catalog";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./store";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={SingIn} />
          <Route
            exact
            path="/catalog"
            render={() => {
              return isAuthenticated ? <Catalog /> : <Redirect to="/login" />;
            }}
          />
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;