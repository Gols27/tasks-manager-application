import {
  LOAD_TASKS_SUCCESS,
  SUBMIT_NEW_TASK,
  TOGGLE_TASK_SUCCESS,
  API_FAILED,
  API_SUCCEED
} from "../types";

export function loadTasks() {
  return function(dispatch) {
    let api = "http://localhost:4000/v1/tasks";
    fetch(api)
      .then(response => response.json())
      .then(tasks => {
        dispatch({ type: LOAD_TASKS_SUCCESS, tasks });
        dispatch({ type: API_SUCCEED });
      })
      .catch(err => {
        dispatch({ type: API_FAILED });
      });
  };
}

export function toggleTask(id) {
  return function(dispatch) {
    let api = `http://localhost:4000/v1/tasks/${id}`;
    fetch(api, {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(tasks => {
        dispatch({ type: TOGGLE_TASK_SUCCESS, tasks });
        dispatch({ type: API_SUCCEED });
      })
      .catch(err => {
        dispatch({ type: API_FAILED });
      });
  };
}

export function submitNewTask(task, taskId) {
  return function(dispatch) {
    let api = "http://localhost:4000/v1/tasks/";
    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(item => {
        dispatch({ type: SUBMIT_NEW_TASK, newTask: item, taskId });
        dispatch({ type: API_SUCCEED });
      })
      .catch(err => {
        dispatch({ type: API_FAILED });
      });
  };
}
