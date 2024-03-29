import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";
import { userLoginSuccess, userLoginFail } from "./actions/auth";
import 'antd/dist/antd.css';
import './index.css';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.testToken && localStorage.testEmail) {
  store.dispatch(
    userLoginSuccess({
      email: localStorage.testEmail,
      token: localStorage.testToken
    })
  );
} else {
  localStorage.removeItem("testEmail");
  localStorage.removeItem("testToken");
  store.dispatch(userLoginFail());
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
