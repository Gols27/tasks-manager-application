import {
  LOAD_TASKS_SUCCESS,
  SUBMIT_NEW_TASK,
  TOGGLE_TASK_SUCCESS
} from "../types";

export default function taskReducer(state = {}, action) {
  let { tasks } = action;
  switch (action.type) {
    case LOAD_TASKS_SUCCESS: {
      const newTasks = [...tasks];
      return [...newTasks];
    }
    case SUBMIT_NEW_TASK: {
      let { newTask } = action;
      return [...state, newTask];
    }
    case TOGGLE_TASK_SUCCESS: {
      const newTasks = [...tasks];
      return [...newTasks];
    }
    default:
      return state;
  }
}
