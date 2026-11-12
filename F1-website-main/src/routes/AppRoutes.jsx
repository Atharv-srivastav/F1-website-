import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Schedule from '../pages/Schedule';
import Results from '../pages/Results';
import Drivers from '../pages/Drivers';
import Teams from '../pages/Teams';
import News from '../pages/News';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/results" element={<Results />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/news" element={<News />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
