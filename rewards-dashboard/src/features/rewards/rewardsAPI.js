import axios from 'axios';

export const fetchRewards = () => {
  return axios.get('http://localhost:5000/rewards'); // Replace with your mock API
};