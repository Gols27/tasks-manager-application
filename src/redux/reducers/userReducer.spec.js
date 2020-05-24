import userReducer from './userReducer';
import { rootreducer } from "./"; // covering root reducer
import {
    USER_SUCCESS,
    USER_FAILED
} from '../types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(userReducer([], {})).toEqual([])
    })
    it('should return the task list', () => {
        expect(userReducer([], {type: USER_SUCCESS})).toEqual({"userAuth": true});
    })
    it('should return new task', () => {
        expect(userReducer([], {type: USER_FAILED})).toEqual({"userAuth": false}); 
    })
});