import React, { useState } from "react";
import "./Settings.css";
import logo from "../../assets/final.png";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");

  const [emailNotif, setEmailNotif] = useState(true);
  const [reminders, setReminders] = useState(true);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="settings-wrapper">

      {/* NAVBAR */}
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="nav-right">
          <button className="nav-btn" onClick={() => navigate("/")}>
            My Courses
          </button>

          <button
            className="nav-btn"
            onClick={() => navigate("/recommendations")}
          >
            Recommendations
          </button>

          <button
            className="nav-btn"
            onClick={() => navigate("/plan")}
          >
            My Plan
          </button>

          <div className="profile">
            <div
              className="avatar"
              onClick={() => setOpen(!open)}
            >
              U
            </div>

            {open && (
              <div className="dropdown">
                <p onClick={() => navigate("/profile")}>Profile</p>
                <p onClick={() => setShowLogoutModal(true)}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Customize your experience</p>
      </div>

      {/* GRID */}
      <div className="settings-grid">

        {/* APPEARANCE */}
        <div className="settings-card">
          <h3>Appearance</h3>

          <div className="options">
            {["light", "dark", "system"].map((mode) => (
              <div
                key={mode}
                className={`option ${theme === mode ? "active" : ""}`}
                onClick={() => setTheme(mode)}
              >
                {mode}
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGE */}
        <div className="settings-card">
          <h3>App Language</h3>

          <div className="options">
            {["english", "hindi"].map((lang) => (
              <div
                key={lang}
                className={`option ${language === lang ? "active" : ""}`}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="settings-card">
          <h3>Notifications</h3>

          <div className="toggle-row">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
            />
          </div>

          <div className="toggle-row">
            <span>Reminders</span>
            <input
              type="checkbox"
              checked={reminders}
              onChange={() => setReminders(!reminders)}
            />
          </div>
        </div>
            {showLogoutModal && (
  <div className="modal-overlay">

    <div className="modal">

      <h3>Logout</h3>
      <p>Are you sure you want to logout?</p>

      <div className="modal-actions">

        <button
          className="cancel-btn"
          onClick={() => setShowLogoutModal(false)}
        >
          No
        </button>

        <button className="confirm-btn">
          Yes
        </button>

      </div>

    </div>

  </div>
)}
      </div>
    </div>
  );
};

export default Settings;