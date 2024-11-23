import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">TravelBuddy</div>
        <div className="nav-links">
          <button>My Trips</button>
          <button>Profile</button>
          <button>Logout</button>
        </div>
      </nav>
      
      <main className="main-content">
        <div className="welcome-section">
          <h1>Plan your trip with TravelBuddy</h1>
          <p>Your adventure begins here!</p>
        </div>
        
        <div className="trips-section">
          <h2>Your Trips</h2>
          <div className="trips-grid">
            <div className="trip-card">
              <h3>Create New Trip</h3>
              <button>+</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;