import React from 'react';
import './Results.css';
import raceResults from '../data/results.js';

function Results() {
  return (
    <div className="results-page">
      <div className="results-strip">
        <div>R24 | 05–07 DEC &nbsp;&nbsp; <span className="results-city">Abu Dhabi</span></div>
        <div className="results-times">
          MY TIME 12:05<br />TRACK TIME 10:35
        </div>
      </div>

      <div className="results-header">
        <h1>2025 RACE RESULTS</h1>
      </div>

      <div className="table-wrap">
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>GRAND PRIX</th>
                <th className="center">DATE</th>
                <th>WINNER</th>
                <th>TEAM</th>
                <th className="center">LAPS</th>
                <th className="center">TIME</th>
              </tr>
            </thead>
            <tbody>
              {raceResults.map((r) => (
                <tr key={r.gp} className="result-row">
                  <td>{r.flag} {r.gp}</td>
                  <td className="center">{r.date}</td>
                  <td className="winner-cell">{r.winner}</td>
                  <td>
                    <span className="team-badge">{r.team}</span>
                  </td>
                  <td className="center">{r.laps}</td>
                  <td className="center mono">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
