import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <div className="notfound-code">404</div>
        <h1>Race Not Found</h1>
        <p>Looks like this page took a wrong turn at the chicane.</p>
        <Link to="/" className="notfound-btn">
          🏁 Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
