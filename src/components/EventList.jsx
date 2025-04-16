import React from "react";
import { useState } from "react";

function EventList({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} onClick={() => handleClick(event)}>
            {event.name}
          </li>
        ))}
      </ul>
      {selectedEvent && (
        <div>
          <h2>{selectedEvent.name}</h2>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
}
export default EventList;