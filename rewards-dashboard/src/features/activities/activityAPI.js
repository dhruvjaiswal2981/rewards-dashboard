import axios from 'axios';

const API_URL = 'http://localhost:5000/activities';

// Fetch all activities
export const fetchActivities = async () => {
  return await axios.get(API_URL);
};

// Log a new activity
export const logActivity = async (activityData) => {
  return await axios.post(API_URL, activityData);
};
