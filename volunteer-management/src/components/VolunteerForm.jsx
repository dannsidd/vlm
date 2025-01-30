// src/components/VolunteerForm.jsx
import React, { useState } from 'react';

const VolunteerForm = ({ addVolunteer }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [event, setEvent] = useState('');  // New state for event name

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !contact || !event) {
      alert('Please fill out all fields');
      return;
    }

    const newVolunteer = {
      name,
      email,
      contact,
      event,
    };

    // Send the volunteer data to the backend
    const response = await fetch('http://localhost:5000/api/volunteers/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVolunteer),
    });

    const data = await response.json();

    if (data.message === 'Volunteer added successfully') {
      alert('Volunteer added');
      addVolunteer(newVolunteer);  // Update the UI with the new volunteer
    } else {
      alert('Failed to add volunteer');
    }

    // Clear the form
    setName('');
    setEmail('');
    setContact('');
    setEvent('');
  };

  return (
    <div>
      <h2>Add Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Contact Number" 
          value={contact} 
          onChange={(e) => setContact(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Event Name" 
          value={event} 
          onChange={(e) => setEvent(e.target.value)} 
        />
        <button type="submit">Add Volunteer</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
