import { USER_SUCCESS, USER_FAILED, API_FAILED, API_SUCCEED } from "../types";

export function submitUserAuthReq(user) {
  return function(dispatch) {
    let api = "http://localhost:4000/v1/users";
    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(res => {
        if (res) dispatch({ type: USER_SUCCESS });
        else dispatch({ type: USER_FAILED });
        dispatch({ type: API_SUCCEED });
      })
      .catch(err => {
        dispatch({ type: API_FAILED });
      });
  };
}
