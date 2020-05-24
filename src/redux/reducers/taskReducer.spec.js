import taskReducer from './taskReducer';
import {
  LOAD_TASKS_SUCCESS,
  SUBMIT_NEW_TASK,
  TOGGLE_TASK_SUCCESS
} from '../types';

const mockTaskList = [
    {
        "id": 1,
        "name": "Task 1",
        "status": "Pending"
    },
    {
        "id": 2,
        "name": "Task 2",
        "status": "Complete"
    },
    {
        "id": 3,
        "name": "Task 3",
        "status": "Pending"
    }
]

describe('task reducer', () => {
    it('should return the initial state', () => {
        expect(taskReducer([], {})).toEqual([])
    })
    it('should return the task list', () => {
        expect(taskReducer([], {type: LOAD_TASKS_SUCCESS, tasks: mockTaskList})).toEqual(mockTaskList);
    })
    it('should return new task', () => {
        expect(taskReducer([], {type: SUBMIT_NEW_TASK, newTask: mockTaskList[0]})).toEqual([mockTaskList[0]]);
    })
    it('should return task list with toggled task', () => {
        expect(taskReducer([], {type: TOGGLE_TASK_SUCCESS, tasks: mockTaskList})).toEqual(mockTaskList);
    })
});