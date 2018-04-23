import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import StatePanel from "./components/panels/StatePanel";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = () => (
  <div className="ui container">
    <StatePanel />
    <Route exact path="/" component={HomePage} />
    <GuestRoute exact path="/login" component={LoginPage} />
    <UserRoute exact path="/dashboard" component={DashboardPage} />
  </div>
);

export default App;
