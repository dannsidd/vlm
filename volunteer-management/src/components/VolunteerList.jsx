// src/components/VolunteerList.jsx
import React from 'react';

const VolunteerList = ({ volunteers, removeVolunteer }) => {
  return (
    <div>
      <h2>Volunteer List</h2>
      {volunteers.length === 0 ? (
        <p>No volunteers yet.</p>
      ) : (
        <ul>
          {volunteers.map((volunteer) => (
            <li key={volunteer.id}>
              <p><strong>Name:</strong> {volunteer.name}</p>
              <p><strong>Email:</strong> {volunteer.email}</p>
              <p><strong>Contact:</strong> {volunteer.contact}</p>
              <p><strong>Event:</strong> {volunteer.event}</p>  {/* Display event name */}
              <button onClick={() => removeVolunteer(volunteer.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VolunteerList;
