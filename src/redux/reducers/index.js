import { combineReducers } from "redux";
import tasks from "./taskReducer";
import users from "./userReducer";
import apiFailed from "./apiFailedReducer";

const rootreducer = combineReducers({
  tasks,
  users,
  apiFailed
});

export default rootreducer;
