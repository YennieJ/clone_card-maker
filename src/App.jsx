import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import styles from "./App.module.css";

function App({ authService }) {
  document.cookie = "promo_shown=1; Max-Age=2600000; Secure";
  // document.cookie = "safeCookie1=foo;SameSite=Lax";
  // document.cookie = "safeCookie2=foo";
  // document.cookie = "crossCookie=bar;SameSite=None;Secure";

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
