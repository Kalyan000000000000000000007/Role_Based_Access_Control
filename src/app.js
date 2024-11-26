import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionsManagement';
import UserManagement from './components/UserManagement';

import './App.css';

// Welcome page component
const WelcomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="welcome-page">
      <h1>Welcome to the Role-Based Access Control System</h1>
      <p>Click below to manage roles, permissions, and users</p>
      <button onClick={() => navigate("/roles")} className="welcome-button">
        Start
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/roles" className="nav-button">Role Management</Link>
          <Link to="/permissions" className="nav-button">Permission Management</Link>
          <Link to="/users" className="nav-button">User Management</Link>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/roles" element={<RoleManagement />} />
            <Route path="/permissions" element={<PermissionManagement />} />
            <Route path="/users" element={<UserManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
