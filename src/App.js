import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/header";
import SignInSignUpPage from "./pages/sign-in-sign-up-page";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
