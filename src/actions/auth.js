import { USER_LOGIN_SUCCESS } from "../types";
import { USER_LOGIN_FAIL } from "../types";
import api from "../api";

export const userLoginSuccess = data => ({
  type: USER_LOGIN_SUCCESS,
  data
});

export const userLoginFail = data => ({
  type: USER_LOGIN_FAIL,
  data
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(data => {
    data.success
      ? dispatch(userLoginSuccess(data))
      : dispatch(userLoginFail(data));
  });
