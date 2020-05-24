import { USER_SUCCESS, USER_FAILED } from "../types";

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_SUCCESS: {
      return { ...state, userAuth: true };
    }
    case USER_FAILED: {
      return { ...state, userAuth: false };
    }
    default:
      return state;
  }
}
