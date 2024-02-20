// redux/actions/userActions.js
import axios from 'axios';

export const fetchUserData = () => async (dispatch) => {
  const response = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
  dispatch({ type: 'FETCH_USERS', payload: response.data.data });
};

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user,
  };
};
