// src/App.js
import React from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import your page components
import DashboardPanel from './pages/DashboardPanel';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPanel />} />
        {/* Add a route for a 404 page or not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Optional: A simple NotFound component to handle unmatched routes
function NotFound() {
  return <h1>404 - Not Found</h1>;
}

export default App;
