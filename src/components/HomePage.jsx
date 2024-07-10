import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to ICTAK Student Portal</h1>
      <div className="d-flex justify-content-around mt-3">
        <Link to="/signup" className="btn btn-primary">Signup</Link>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
}

export default HomePage;
