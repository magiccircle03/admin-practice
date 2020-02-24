import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu1" component={MainPage} />
        <Route path="/menu2" component={MainPage} />
        <Route path="/menu3" component={MainPage} />
        <Route path="/menu4" component={MainPage} />
        <Route path="/menu5" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/test" component={TestPage} />
        <Route path="/" exact component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
