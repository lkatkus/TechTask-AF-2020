import axios from 'axios';

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsersData = async () => {
  let data;

  try {
    const response = await axios.get(USER_API_URL);
    data = response.data;
  } catch (error) {
    // @todo add request fail handler
  }

  return data;
};

export default { getUsersData };
