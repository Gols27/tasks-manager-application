import apiFailed from './apiFailedReducer';
import * as types from '../types';


describe('apiFailed reducer', () => {
    it('should return the initial state', () => {
        expect(apiFailed({}, {})).toEqual({})
    })
    it('should return the initial state', () => {
        expect(apiFailed({}, {type: types.API_FAILED})).toEqual({ "apiError": true });
    })
    it('should return the initial state', () => {
        expect(apiFailed({}, {type: types.API_SUCCEED})).toEqual({ "apiError": false });
    })
});
