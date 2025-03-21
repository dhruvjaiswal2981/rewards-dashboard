import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from './activitiesSlice';

const LogActivity = () => {
  const [type, setType] = useState('');
  const [points, setPoints] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      id: Date.now(), 
      userId: 1, // Example user
      type,
      points: parseInt(points),
      timestamp: new Date().toISOString(),
    };

    dispatch(addActivity(newActivity));
    setType('');
    setPoints('');
  };

  return (
    <div>
      <h2>Log Activity</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Activity Type" 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="Points" 
          value={points} 
          onChange={(e) => setPoints(e.target.value)} 
          required 
        />
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default LogActivity;
