import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserList from './features/users/UserList';
import RewardsList from './features/rewards/RewardsList';
import AdminDashboard from './features/admin/AdminDashboard';
import { Provider } from 'react-redux';
import store from './app/store';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import './App.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};


const Home = () => (
  <div className="home">
    <h1>🏆 Welcome to the Rewards System</h1>
    <p>Earn points, redeem exciting rewards, and manage your progress effortlessly.</p>

    <div className="nav-links">
      <Link to="/users" className="nav-button">👥 View Users</Link>
      <Link to="/rewards" className="nav-button">🎁 Browse Rewards</Link>
      <Link to="/admin" className="nav-button">⚙️ Admin Dashboard</Link>
    </div>
    <div className="stats">
      <div className="stat-card">
        <h2>👥 1,245+</h2>
        <p>Active Users</p>
      </div>
      <div className="stat-card">
        <h2>🎁 500+</h2>
        <p>Rewards Redeemed</p>
      </div>
      <div className="stat-card">
        <h2>⚡ 10M+</h2>
        <p>Points Earned</p>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div className="app-container">
            <header className="header">
              <h1>Reward System Dashboard </h1>
              <ThemeToggle />
            </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/rewards" element={<RewardsList />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
