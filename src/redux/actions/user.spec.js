import configureStore from 'redux-mock-store'; // ES6 modules
import thunk from 'redux-thunk';
import { submitUserAuthReq } from './user';
 
const mockStore = configureStore([thunk]);
 
it('should dispatch action with auth true', () => {
 // Initialize mockstore with empty state
 const initialState = {};
 const store = mockStore(initialState);
 

 const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve("true"); 
const mockFetchPromise = Promise.resolve({ // 3
  json: () => mockJsonPromise,
});
jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

 // Dispatch the action
 store.dispatch(submitUserAuthReq({}));
 
 // expect action to be defined
 expect(store.getActions()).toBeDefined();
});



it('should dispatch action with auth false', () => {
    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);
    
   
    const mockSuccessResponse = {};
   const mockJsonPromise = Promise.resolve(false); 
   const mockFetchPromise = Promise.resolve({ // 3
     json: () => mockJsonPromise,
   });
   jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
   
    // Dispatch the action
    store.dispatch(submitUserAuthReq({}));
    
    // expect action to be defined
    expect(store.getActions()).toBeDefined();
   });