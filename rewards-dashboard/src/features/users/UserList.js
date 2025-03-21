import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './usersSlice';
import './UserList.css';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-list-container">
      <h1 className="title">User Leaderboard</h1>
      <div className="user-card-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p className="points">⭐ Points: <strong>{user.points}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
