import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Logout from "./components/pages/DashboardPage";
import StatePanel from "./components/panels/StatePanel";
import TopNavigation from "./components/navigation/TopNavigation";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import CustomDomain from "./components/pages/customdomain"
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Sidebar from './components/sidebar'
import Billing from "./components/pages/billing"
import Dashboard from './components/pages/dashboard'
import Website from './components/pages/websites'
import Inbox from './components/pages/inbox'
const { Content, Footer, Sider } = Layout;

const App = ({ location }) => (
  <div>
    <Layout>
      <Sidebar />
      <Layout style={{ height: '100vh' }}>
        {/* <StatePanel /> */}
        <TopNavigation />
        <Route location={location} exact path="/" component={HomePage} />
        <GuestRoute location={location} exact path="/login" component={LoginPage} />
        <UserRoute
          location={location}
          exact
          path="/logout"
          component={Logout}
        />
         <UserRoute
          location={location}
          exact
          path="/billing"
          component={Billing}
        />
         <UserRoute
          location={location}
          exact
          path="/websites"
          component={Website}
        />
         <UserRoute
          location={location}
          exact
          path="/inbox"
          component={Inbox}
        />
         <UserRoute
          location={location}
          exact
          path="/billing"
          component={Billing}
        />
        <UserRoute
          location={location}
          exact
          path="/customdomain"
          component={CustomDomain}
        />
          <UserRoute
          location={location}
          exact
          path="/dashboard"
          component={Dashboard}
        />
        
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
