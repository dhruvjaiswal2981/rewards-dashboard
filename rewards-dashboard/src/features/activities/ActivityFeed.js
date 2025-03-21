import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from './activitiesSlice';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const dispatch = useDispatch();
  const { activities, loading, error } = useSelector((state) => state.activities);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  const filteredActivities = activities.filter(activity =>
    activity.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="activity-container">
      <h1 className="title">📌 Activity Feed</h1>
      <input
        type="text"
        className="filter-input"
        placeholder="🔍 Filter activities..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="activity-grid">
        {filteredActivities.map((activity) => (
          <div className="activity-card" key={activity.id}>
            <h2>{activity.type.replace('_', ' ').toUpperCase()}</h2>
            <p className="points">⭐ Points: <strong>{activity.points}</strong></p>
            <small className="timestamp">{new Date(activity.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
