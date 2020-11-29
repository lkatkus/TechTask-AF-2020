import { usersAPI } from '@data';
import { toast } from 'react-toastify';

import * as types from './users.types';

const getUsers = () => async (dispatch) => {
  dispatch({ type: types.BEFORE_GET_USERS });

  // To get some time for loading state
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  try {
    const userData = await usersAPI.getUsersData();

    const payload = {
      users: userData,
    };

    dispatch({ type: types.ON_GET_USERS, payload });
  } catch (error) {
    toast('Failed to fetch users data', { type: 'error' });
    dispatch({
      type: types.AFTER_GET_USERS_ERROR,
      payload: {
        error: 'Failed to fetch users',
      },
    });
  }
};

export default {
  getUsers,
};
