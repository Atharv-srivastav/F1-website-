import React from 'react';
import './Schedule.css';
import { previousRaces, upcomingRaces } from '../data/schedule.js';
import { downloadCalendar } from '../utils/calendar.js';

function RaceCard({ race }) {
  return (
    <div className="schedule-card">
      <img src={race.img} alt={race.track} loading="lazy" />
      <div className="schedule-overlay">
        <div className="schedule-round">ROUND {race.round}</div>
        <div className="schedule-track">{race.track}</div>
        <div className="schedule-date">{race.date}</div>
      </div>
    </div>
  );
}

function Schedule() {
  return (
    <div className="schedule-page">
      <div className="schedule-strip">
        <div className="strip-left">
          <strong>R24</strong>
          <span>05 - 07 DEC</span>
          <span className="strip-city">Abu Dhabi</span>
        </div>
        <div className="strip-right">
          <div><strong>MY TIME</strong><br />11:56</div>
          <div><strong>TRACK TIME</strong><br />10:26</div>
        </div>
      </div>

      <section className="schedule-hero">
        <h1>2025 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</h1>
        <button className="btn-calendar" type="button" onClick={() => downloadCalendar([...previousRaces, ...upcomingRaces])}>
          📅 Add F1 Calendar
        </button>
      </section>

      <section className="schedule-section">
        <h2>Previous</h2>
        <div className="schedule-grid">
          {previousRaces.map((race) => (
            <RaceCard key={race.round} race={race} />
          ))}
        </div>
      </section>

      <section className="schedule-section">
        <h2>Next</h2>
        <div className="schedule-grid">
          {upcomingRaces.map((race) => (
            <RaceCard key={race.round} race={race} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Schedule;
