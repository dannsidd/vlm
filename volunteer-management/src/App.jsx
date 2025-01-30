// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import VolunteerForm from './components/VolunteerForm';
import VolunteerList from './components/VolunteerList';

function App() {
  const [user, setUser] = useState(null);
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restore user from localStorage
    }
  }, []);

  const addVolunteer = (volunteer) => {
    setVolunteers((prevVolunteers) => [...prevVolunteers, volunteer]);
  };

  const removeVolunteer = (id) => {
    setVolunteers((prevVolunteers) => prevVolunteers.filter(vol => vol.id !== id));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <nav>
        {!user ? (
          <div>
            <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
          </div>
        ) : (
          <Link to="/dashboard">Dashboard</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to Volunteer Management</h1>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        
        {/* Protected Route: Only accessible if logged in */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard
                user={user}
                logout={logout}
                addVolunteer={addVolunteer}
                volunteers={volunteers}
                removeVolunteer={removeVolunteer}
              />
            ) : (
              <h2>Please log in to access the dashboard.</h2>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
