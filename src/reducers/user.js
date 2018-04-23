import { USER_LOGIN_SUCCESS } from "../types";
import { USER_LOGIN_FAIL } from "../types";

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log("Reducing: login-success");
      return action.data;
    case USER_LOGIN_FAIL:
      console.log("Reducing: login-fail");
      return action.data;
    default:
      return state;
  }
}
