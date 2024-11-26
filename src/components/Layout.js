import React from 'react';
import { Outlet } from 'react-router-dom'; // For nested routing (React Router)
import './Layout.css'; // Import your CSS file for styling

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <div className="logo">My App</div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <div className="main-container">
        <aside className="sidebar">
          <h3>Sidebar</h3>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/settings">Settings</a></li>
          </ul>
        </aside>
        
        <main className="content">
          {/* This is where the child components will render based on routing */}
          <Outlet />
        </main>
      </div>

      <footer className="footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
