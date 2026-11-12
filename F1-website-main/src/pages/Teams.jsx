import React from 'react';
import './Teams.css';

const teams = [
  {
    name: 'McLaren',
    color: '#ff8700',
    drivers: ['Lando Norris', 'Oscar Piastri'],
    points: 279,
    base: 'Woking, United Kingdom',
    principal: 'Andrea Stella',
  },
  {
    name: 'Red Bull Racing',
    color: '#1e41ff',
    drivers: ['Max Verstappen', 'Yuki Tsunoda'],
    points: 217,
    base: 'Milton Keynes, United Kingdom',
    principal: 'Christian Horner',
  },
  {
    name: 'Ferrari',
    color: '#dc0000',
    drivers: ['Charles Leclerc', 'Lewis Hamilton'],
    points: 192,
    base: 'Maranello, Italy',
    principal: 'Frédéric Vasseur',
  },
  {
    name: 'Mercedes',
    color: '#00d2be',
    drivers: ['George Russell', 'Kimi Antonelli'],
    points: 160,
    base: 'Brackley, United Kingdom',
    principal: 'Toto Wolff',
  },
  {
    name: 'Aston Martin',
    color: '#006f62',
    drivers: ['Fernando Alonso', 'Lance Stroll'],
    points: 85,
    base: 'Silverstone, United Kingdom',
    principal: 'Mike Krack',
  },
  {
    name: 'Alpine',
    color: '#0090ff',
    drivers: ['Pierre Gasly', 'Jack Doohan'],
    points: 52,
    base: 'Enstone, United Kingdom',
    principal: 'Oliver Oakes',
  },
  {
    name: 'Williams',
    color: '#005aff',
    drivers: ['Alex Albon', 'Carlos Sainz'],
    points: 40,
    base: 'Grove, United Kingdom',
    principal: 'James Vowles',
  },
  {
    name: 'Haas',
    color: '#b6babd',
    drivers: ['Esteban Ocon', 'Oliver Bearman'],
    points: 28,
    base: 'Kannapolis, United States',
    principal: 'Ayao Komatsu',
  },
  {
    name: 'RB',
    color: '#4e7c9b',
    drivers: ['Liam Lawson', 'Isack Hadjar'],
    points: 22,
    base: 'Faenza, Italy',
    principal: 'Laurent Mekies',
  },
  {
    name: 'Sauber',
    color: '#52e252',
    drivers: ['Nico Hülkenberg', 'Gabriel Bortoleto'],
    points: 6,
    base: 'Hinwil, Switzerland',
    principal: 'Mattia Binotto',
  },
];

function Teams() {
  return (
    <div className="teams-page">
      <div className="teams-header">
        <h1>2025 CONSTRUCTORS</h1>
        <p className="teams-subtitle">All 10 teams competing in the 2025 FIA Formula One World Championship</p>
      </div>

      <div className="teams-list">
        {teams.map((team, i) => (
          <div key={team.name} className="team-card" style={{ '--team-color': team.color }}>
            <div className="team-rank">{i + 1}</div>
            <div className="team-color-bar" style={{ background: team.color }}></div>
            <div className="team-details">
              <h2 className="team-name">{team.name}</h2>
              <div className="team-drivers">
                {team.drivers.map((d) => (
                  <span key={d} className="team-driver">{d}</span>
                ))}
              </div>
              <div className="team-info-row">
                <span>📍 {team.base}</span>
                <span>👤 {team.principal}</span>
              </div>
            </div>
            <div className="team-points">
              <div className="team-points-value">{team.points}</div>
              <div className="team-points-label">PTS</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
