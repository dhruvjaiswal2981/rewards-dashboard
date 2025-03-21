import axios from 'axios';

export const fetchUsers = () => {
  return axios.get('http://localhost:5000/users'); // Replace with your mock API
};