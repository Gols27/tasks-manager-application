import { API_FAILED, API_SUCCEED } from "../types";

export default function apiFailed(state = {}, action) {
  switch (action.type) {
    case API_FAILED: {
      return { ...state, apiError: true };
    }
    case API_SUCCEED: {
      return { ...state, apiError: false };
    }
    default:
      return state;
  }
}
