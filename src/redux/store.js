import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer defined in reducers.js

const store = createStore(rootReducer); // Creating the Redux store with the rootReducer

export default store; // Exporting the Redux store
