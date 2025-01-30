// src/components/Dashboard.jsx
import React from 'react';
import VolunteerForm from './VolunteerForm';
import VolunteerList from './VolunteerList';

const Dashboard = ({ user, logout, addVolunteer, volunteers, removeVolunteer }) => {
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <button onClick={logout}>Logout</button>
      
      <VolunteerForm addVolunteer={addVolunteer} />
      <VolunteerList volunteers={volunteers} removeVolunteer={removeVolunteer} />
    </div>
  );
};

export default Dashboard;
