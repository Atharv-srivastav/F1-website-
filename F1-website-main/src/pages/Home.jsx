import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { downloadCalendar } from '../utils/calendar.js';
import { allRaces } from '../data/schedule.js';

const previousRaces = [
  { round: 21, track: 'Brazil', img: 'https://cazloyd.com/wp-content/uploads/2024/05/GettyImages-537871420-e1714662191730.jpg.webp' },
  { round: 22, track: 'Las Vegas', img: 'https://wallpapercat.com/w/full/c/a/b/1575399-2560x1600-desktop-hd-las-vegas-strip-wallpaper-photo.jpg' },
  { round: 23, track: 'Singapore', img: 'https://t4.ftcdn.net/jpg/02/09/82/45/360_F_209824591_K05Tob490TmBlTekkPlNrxh1Hy7IKMTU.jpg' },
  { round: 24, track: 'Bahrain', img: 'https://gfmag.com/wp-content/uploads/2024/04/Bahrain-scaled.jpg' },
  { round: 25, track: 'Saudi Arabia', img: 'https://blogassets.airtel.in/wp-content/uploads/2024/12/Saudi-Arabia.png' },
  { round: 26, track: 'Japan', img: 'https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1544787019/Fujiyoshida_1544786567.jpg' },
];

const nextRaces = [
  { round: 24, track: 'Abu Dhabi', img: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/39/de/88.jpg' },
  { round: 25, track: 'Australia', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fHww' },
  { round: 26, track: 'Monaco', img: 'https://www.baltana.com/files/wallpapers-23/Santa-Monica-Beach-Wallpaper-4096x2160-56329.jpg' },
];

function Home() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="year-select">2025 ▾</div>
          <h1 className="title">
            2025 FIA FORMULA ONE WORLD
            <br />
            <span className="title-accent">CHAMPIONSHIP</span>
            <br />
            RACE CALENDAR
          </h1>
          <p className="hero-subtitle">Experience the thrill of every Grand Prix this season</p>
        </div>

        <aside className="panel">
          <div className="panel-header">
            <div className="panel-dot"></div>
            Add to calendar
          </div>
          <p className="muted">Add the full season to your calendar so you never miss a race.</p>
          <button className="add-btn" type="button" onClick={() => downloadCalendar(allRaces)}>
            📅 Add F1 calendar
          </button>

          <div className="panel-divider"></div>

          <div className="time-display">
            <div>
              <div className="time-label">My Time</div>
              <div className="time-value">{time}</div>
            </div>
            <div>
              <div className="time-label">Track Time</div>
              <div className="time-value muted">14:07</div>
            </div>
          </div>
        </aside>
      </section>

      {/* Previous Races */}
      <section className="section">
        <div className="section-header">
          <h3>Previous Races</h3>
          <Link to="/results" className="see-all">See all results →</Link>
        </div>
        <div className="cards">
          {previousRaces.map((race) => (
            <div key={race.round} className="card">
              <div className="card-image-wrap">
                <img src={race.img} alt={`${race.track} track`} loading="lazy" />
                <div className="card-overlay"></div>
              </div>
              <div className="meta">
                <div className="round">ROUND {race.round}</div>
                <div className="track">{race.track}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Next Races */}
      <section className="section">
        <div className="section-header">
          <h3>Upcoming Races</h3>
          <Link to="/schedule" className="see-all">Full schedule →</Link>
        </div>
        <div className="cards">
          {nextRaces.map((race) => (
            <div key={race.round} className="card upcoming">
              <div className="card-image-wrap">
                <img src={race.img} alt={`${race.track} track`} loading="lazy" />
                <div className="card-overlay"></div>
              </div>
              <div className="meta">
                <div className="round">ROUND {race.round}</div>
                <div className="track">{race.track}</div>
                <div className="upcoming-badge">UPCOMING</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
