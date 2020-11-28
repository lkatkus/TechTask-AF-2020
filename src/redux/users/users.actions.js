import { usersAPI } from '@data';

import * as types from './users.types';

const getUsers = () => async (dispatch, getState) => {
  const { users } = getState();

  // Prevent refetch if users were set
  if (users.data.length > 0) {
    return;
  }

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
