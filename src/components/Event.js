import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  return (
    <li className="event-item">
      <div>
      <div className="name">{event && event.summary}</div>
        <div className="created">{event && (new Date(event.created)).toUTCString()}</div>
        <div className="location">{event && event.location}</div>
        {showDetails && <div className="description">{event && event.description}</div>}
        <button className="show-details" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
}

export default Event;