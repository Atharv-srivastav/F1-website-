import React, { useState } from 'react';
import './News.css';

const categories = ['All', 'Analysis', 'Technical', 'Lifestyle & Culture', 'F1 Unlocked', 'F2', 'F3', 'F1 Academy'];

const newsItems = [
  {
    img: 'https://cdn-3.motorsport.com/images/amp/0a9mQ3P0/s300/anothony-alfredo-young-s-motor.webp',
    title: 'Alpine confirm 2026 launch event date',
    time: '13 hours ago',
    tag: null,
    category: 'All',
  },
  {
    img: 'https://cdn-8.motorsport.com/images/amp/YK13g9r0/s300/alex-rins-yamaha-factory-racin.webp',
    title: 'Which drivers impressed our judges in Qatar?',
    time: '15 hours ago',
    tag: 'POWER RANKINGS',
    tagColor: 'purple',
    category: 'Analysis',
  },
  {
    img: 'https://cdn-2.motorsport.com/images/amp/6Vy7yGnY/s300/charles-leclerc-ferrari.webp',
    title: 'F1 2026 line-ups confirmed in full',
    time: '15 hours ago',
    tag: null,
    category: 'All',
  },
  {
    img: 'https://cdn-4.motorsport.com/images/amp/0rVxQGG0/s300/marc-marquez-ducati-team.webp',
    title: 'The key questions as Red Bull confirm 2026 line-up',
    time: '16 hours ago',
    tag: 'ANALYSIS',
    tagColor: 'pink',
    category: 'Analysis',
  },
  {
    img: 'https://cdn-3.motorsport.com/images/amp/0a9mQ3P0/s300/anothony-alfredo-young-s-motor.webp',
    title: 'Mercedes reveal new sidepod concept for 2026',
    time: '18 hours ago',
    tag: 'TECHNICAL',
    tagColor: 'blue',
    category: 'Technical',
  },
  {
    img: 'https://cdn-2.motorsport.com/images/amp/6Vy7yGnY/s300/charles-leclerc-ferrari.webp',
    title: 'Leclerc\'s Monaco photo diary: Behind the scenes',
    time: '20 hours ago',
    tag: null,
    category: 'Lifestyle & Culture',
  },
];

function News() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredNews = activeFilter === 'All'
    ? newsItems
    : newsItems.filter((n) => n.category === activeFilter);

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>LATEST F1 NEWS</h1>
      </div>

      <div className="news-content-wrap">
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.length === 0 && (
            <p className="news-empty">No stories are available in this category yet.</p>
          )}
          {filteredNews.map((item) => (
            <article key={item.title} className="news-card">
              <div className="news-img-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="news-card-content">
                {item.tag && (
                  <span className={`news-tag ${item.tagColor}`}>{item.tag}</span>
                )}
                <h3>{item.title}</h3>
                <p className="news-time">{item.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
