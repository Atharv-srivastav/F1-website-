import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/schedule', label: 'Schedule' },
    { to: '/results', label: 'Results' },
    { to: '/drivers', label: 'Drivers' },
    { to: '/teams', label: 'Teams' },
    { to: '/news', label: 'News' },
  ];

  return (
    <header className="topbar">
      <div className="brand">
        <Link to="/" className="logo">F1</Link>
        <div>
          <div className="brand-title">Race Mania</div>
          <div className="brand-sub">2025 • Classic</div>
        </div>
      </div>

      <button
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="primary-navigation" className={`nav ${menuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? 'nav-link active' : 'nav-link'}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
