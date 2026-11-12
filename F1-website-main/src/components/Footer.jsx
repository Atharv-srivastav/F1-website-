import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-brand">
            <span className="footer-logo">F1</span>
            <span className="footer-brand-text">Race Mania</span>
          </div>
          <p className="footer-desc">
            Your ultimate destination for Formula 1 racing coverage, standings, and news.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/schedule">Schedule</Link>
          <Link to="/results">Results</Link>
          <Link to="/drivers">Drivers</Link>
          <Link to="/teams">Teams</Link>
        </div>

        <div className="footer-col">
          <h4>More</h4>
          <Link to="/news">News</Link>
          <span>F1 TV</span>
          <span>Gaming</span>
          <span>Hospitality</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Race Mania — F1 layout inspired by racing passion.</p>
      </div>
    </footer>
  );
}

export default Footer;
