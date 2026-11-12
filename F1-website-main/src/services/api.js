import { allRaces } from '../data/schedule.js';
import results from '../data/results.js';
import news from '../data/news.js';

// ─── Drivers ───────────────────────────
export async function fetchDrivers() {
  const { default: drivers } = await import('../data/drivers.js');
  return drivers;
}

// ─── Teams / Constructors ────────────────────────────────────
export async function fetchTeams() {
  const { default: teams } = await import('../data/teams.js');
  return teams;
}

// ─── Race Schedule ───────────────────────────────────────────
export async function fetchSchedule() {
  return allRaces;
}

// ─── Race Results ────────────────────────────────────────────
export async function fetchResults() {
  return results;
}

// ─── News ────────────────────────────────────────────────────
export async function fetchNews() {
  return news;
}

export default {
  fetchDrivers,
  fetchTeams,
  fetchSchedule,
  fetchResults,
  fetchNews,
};
