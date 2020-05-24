import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import { loadTasks, toggleTask, submitNewTask } from './tasks';

 
const mockStore = configureStore([thunk]);

describe('tasks related actions', () => {

beforeEach(() => {
})

afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
})
 
it('should dispatch action', () => {
 // Initialize mockstore with empty state
 const initialState = {};
 const store = mockStore(initialState);


const mockJsonPromise = Promise.resolve([{id: 1, name: 'abc', status: 'pending'}] ); 
const mockFetchPromise = Promise.resolve({ // 3
  json: () => mockJsonPromise,
});
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
 
 // Dispatch the action
 store.dispatch(loadTasks([{},{}]));
 store.dispatch(toggleTask({}));
 store.dispatch(submitNewTask({}));
 
 // expect action to be defined
 expect(store.getActions()).toBeDefined();
});

});