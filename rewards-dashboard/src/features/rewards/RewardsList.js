import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRewards } from './rewardsSlice';
import './RewardsList.css';

const RewardsList = () => {
  const dispatch = useDispatch();
  const { rewards, loading, error } = useSelector((state) => state.rewards);

  useEffect(() => {
    dispatch(getRewards());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="rewards-container">
      <h1 className="title">🎁 Rewards Marketplace</h1>
      <div className="rewards-grid">
        {rewards.map((reward) => (
          <div className="reward-card" key={reward.id}>
            <h2>{reward.name}</h2>
            <p className="cost">⭐ Cost: <strong>{reward.points} points</strong></p>
            <button className="redeem-btn">Redeem</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardsList;
