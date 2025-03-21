import React from 'react';
import UserList from '../users/UserList';
import ActivityFeed from '../activities/ActivityFeed';
import RewardsList from '../rewards/RewardsList';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserList />
      <ActivityFeed />
      <RewardsList />
    </div>
  );
};

export default AdminDashboard;