import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  return (
    <li className='event-item-list'>
      <div className="event-item">
        <div className="id">id</div>
        <div className="created">created</div>
        <div className="location">location</div>
        <div className="name">name</div>
        {showDetails && <div className="description">description</div>}
        <button className="show-details" onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </li>
  );
}

export default Event;