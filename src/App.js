import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Logout from "./components/navigation/logout";
import StatePanel from "./components/panels/StatePanel";
import TopNavigation from "./components/navigation/TopNavigation";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import CustomDomain from "./components/pages/customdomain"
import { Layout } from 'antd';
import Sidebar from './components/sidebar'
import Billing from "./components/pages/billing"
import Dashboard from './components/pages/dashboard'
import Website from './components/pages/websites'
import Inbox from './components/pages/inbox'
import Favorites from './components/pages/favorites'
import Dashboard_singlemail from './components/pages/dashboard/singlemail'
import Alert from './components/pages/alerts'
import Header from './components/navigation/header';
// import { Route, Redirect } from "react-router-dom";
// const { Content, Footer, Sider } = Layout;
const App = ({ location }) => (
  <div>
    <Layout>
      <Sidebar />
      <Layout style={{ height: '100vh' }}>
        <Header />
        <Route location={location} exact path="/" component={HomePage} />
        <GuestRoute location={location} exact path="/login" component={LoginPage} />
        <UserRoute location={location} exact path="/logout" component={Logout} />
        <Route location={location} exact path="/dashboard" component={Dashboard} />
        <Route location={location} exact path="/billing" component={Billing} />
        <Route location={location} exact path="/websites" component={Website} />
        <Route location={location} exact path="/inbox" component={Inbox} />
        <Route location={location} exact path="/favorites" component={Favorites} />
        <Route location={location} exact path="/customdomain" component={CustomDomain} />
        <Route location={location} exact path="/alerts" component={Alert} />
        <Route location={location} exact path="/logout" component={Logout} />
        <Route location={location} exact path="/dashboard/singlemail" component={Dashboard_singlemail} />
      </Layout>
    </Layout>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
