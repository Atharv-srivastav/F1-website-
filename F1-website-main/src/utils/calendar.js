export function downloadCalendar(races) {
  const events = races.map((race) => [
    'BEGIN:VEVENT',
    `SUMMARY:Formula 1 ${race.track} Grand Prix`,
    `DESCRIPTION:Round ${race.round} of the 2025 FIA Formula One World Championship`,
    `DTSTART;VALUE=DATE:${race.start}`,
    'END:VEVENT',
  ].join('\r\n')).join('\r\n');

  const calendar = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Race Mania//F1 Calendar//EN',
    events,
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([calendar], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'race-mania-2025-calendar.ics';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
