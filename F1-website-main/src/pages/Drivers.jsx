import React from 'react';
import './Drivers.css';

const drivers = [
  { firstName: 'George', lastName: 'Russell', team: 'Mercedes', number: 63, color: 'green', flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg' },
  { firstName: 'Kimi', lastName: 'Antonelli', team: 'Mercedes', number: 12, color: 'green', flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg' },
  { firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing', number: 1, color: 'blue', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg' },
  { firstName: 'Yuki', lastName: 'Tsunoda', team: 'Red Bull Racing', number: 22, color: 'blue', flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg' },
  { firstName: 'Lando', lastName: 'Norris', team: 'McLaren', number: 4, color: 'orange', flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg' },
  { firstName: 'Oscar', lastName: 'Piastri', team: 'McLaren', number: 81, color: 'orange', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg' },
  { firstName: 'Charles', lastName: 'Leclerc', team: 'Ferrari', number: 16, color: 'red', flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg' },
  { firstName: 'Lewis', lastName: 'Hamilton', team: 'Ferrari', number: 44, color: 'red', flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg' },
];

function Drivers() {
  return (
    <div className="drivers-page">
      <div className="drivers-strip">
        <div className="strip-info">Abu Dhabi &nbsp;&nbsp; <span style={{ opacity: 0.7 }}>R24 05 - 07 DEC</span></div>
        <div style={{ opacity: 0.8 }}>MY TIME 12:20</div>
      </div>

      <div className="drivers-header">
        <h1>2025 DRIVER LINEUP</h1>
        <p className="drivers-subtitle">The complete grid for the 2025 Formula 1 season</p>
      </div>

      <div className="drivers-grid">
        {drivers.map((driver) => (
          <div key={driver.number} className={`driver-card ${driver.color}`}>
            <div className="driver-info">
              <div className="driver-firstname">{driver.firstName}</div>
              <h2 className="driver-lastname">{driver.lastName}</h2>
              <div className="driver-team">{driver.team}</div>
              <div className="driver-meta">
                <div className="driver-number">{driver.number}</div>
                <div className="driver-flag">
                  <img src={driver.flag} alt={`${driver.lastName}'s national flag`} />
                </div>
              </div>
            </div>
            <div className="driver-number-bg">{driver.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drivers;
