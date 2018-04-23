import { USER_LOGGING_IN } from "../types";
import { USER_LOGGING_OUT } from "../types";
import { USER_LOGGED_IN } from "../types";
import { USER_NOT_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggingIn = () => ({ type: USER_LOGGING_IN });
export const userLoggingOut = () => ({ type: USER_LOGGING_OUT });
export const userLoginSuccess = payload => ({ type: USER_LOGGED_IN, payload });
export const userLoginFail = () => ({ type: USER_NOT_LOGGED_IN });

export const login = credentials => dispatch => {
  dispatch(userLoggingIn());

  return api.user.login(credentials).then(data => {
    data.success
      ? dispatch(
          userLoginSuccess({ user: { email: data.email, token: data.token } })
        )
      : dispatch(userLoginFail());
  });
};
