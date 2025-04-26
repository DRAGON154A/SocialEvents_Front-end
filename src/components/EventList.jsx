import React from "react";
import './styles/EventList.css';

function EventList() {
  const events = [
    {
      title: 'Festival Afrobeats',
      description: 'Un événement musical vibrant à Lagos.',
    },
    {
      title: 'Semaine de la Cuisine Sénégalaise',
      description: 'Plats traditionnels et modernes à Dakar.',
    },
    {
      title: 'Défilé de Mode Africaine',
      description: 'Créateurs d’Afrique en lumière à Abidjan.',
    },
  ];

  return (
    <div className="event-list">
    {events
      .filter(e => e.title.toLowerCase().includes(search.toLowerCase()))
      .map((event, index) => (
        <div className="event-card" key={index}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
    ))}
  </div>
  );
}

export default EventList;

