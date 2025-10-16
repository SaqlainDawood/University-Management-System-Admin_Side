import React, { useState } from "react";
import {
  FaBell,
  FaSignOutAlt,
  FaUserCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="admin-header shadow-sm">
      {/* Left - Page Title */}
      <div className="header-left">
        <h4>University Management</h4>
      </div>

      {/* Right - User & Actions */}
      <div className="header-right">
        <button className="icon-btn">
          <FaBell />
          <span className="badge">3</span>
        </button>
        <div className="admin-user">
          <FaUserCircle className="user-avatar" />
          <span className="admin-name">Admin</span>
        </div>
        <button className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>

        {/* Hamburger for mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="dropdown-menu">
          <button className="dropdown-item">
            <FaBell /> Notifications
          </button>
          <button className="dropdown-item">
            <FaUserCircle /> Profile
          </button>
          <Link to='/admin/login'>
          <button className="dropdown-item logout">
            <FaSignOutAlt /> Logout
          </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
