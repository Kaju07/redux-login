import { USER_LOGGING_IN } from "../types";
import { USER_LOGGING_OUT } from "../types";
import { USER_LOGGED_IN } from "../types";
import { USER_NOT_LOGGED_IN } from "../types";

const initialState = {
  stateName: USER_NOT_LOGGED_IN,
  isFetching: false
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGING_IN:
      return Object.assign(
        {},
        { stateName: USER_LOGGING_IN },
        { isFetching: true }
      );
    case USER_LOGGING_OUT:
      return Object.assign(
        {},
        { stateName: USER_LOGGING_OUT },
        { isFetching: true }
      );
    case USER_LOGGED_IN:
      return Object.assign(
        {},
        { stateName: USER_LOGGED_IN },
        { isFetching: false },
        action.payload
      );
    case USER_NOT_LOGGED_IN:
      return Object.assign(
        {},
        { stateName: USER_NOT_LOGGED_IN },
        { isFetching: false }
      );

    default:
      return state;
  }
}
