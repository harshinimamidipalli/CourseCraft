import React from "react";
import "./Profile.css";
import logo from "../../assets/final.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleSavePreferences = () => {
    // later → API call here
    console.log("Saved:", { languages, videoTypes });

    setSaved(true);

    // hide message after 2 sec
    setTimeout(() => setSaved(false), 2000);
};
    const [saved, setSaved] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [languages, setLanguages] = useState([]);
    const [videoTypes, setVideoTypes] = useState([]);
     const toggleSelection = (value, state, setState) => {
    if (state.includes(value)) {
        setState(state.filter(item => item !== value));
    } else {
        setState([...state, value]);
    }
    };
    <p className="selected-count">
    {languages.length} selected
    </p>
  return (
    <div className="profile-wrapper">

      {/* NAVBAR */}
      <button className="nav-btn" onClick={() => navigate("/")}>
        My Courses
        </button>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="nav-right">
          <button
            className="nav-btn"
            onClick={() => navigate("/")}
            >
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
          <button className="nav-btn active">Profile</button>

         <div className="profile">
            <div
              className="avatar"
              onClick={() => setOpen(!open)}
            >
              U
            </div>

            {open && (
              <div className="dropdown">
                <p onClick={() => navigate("/settings")}>Settings</p>
                 <p onClick={() => setShowLogoutModal(true)}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account and preferences</p>
      </div>

      {/* MAIN */}
      <div className="profile-grid">

        {/* LEFT CARD */}
        <div className="profile-card glass">

          <div className="avatar large">U</div>

          <h2>Harshini</h2>
          <p className="email">harshini@email.com</p>

          <button
            className="edit-btn"
            onClick={() => navigate("/edit-profile")}
            >
            Edit Profile
            </button>

        </div>

        {/* RIGHT SECTION */}
        <div className="details-section">

  {/* PERSONAL INFO */}
  <div className="details-card glass">
    <h3>Personal Information</h3>

    <div className="info-row">
      <span>Name</span>
      <span>Harshini</span>
    </div>

    <div className="info-row">
      <span>Email</span>
      <span>harshini@email.com</span>
    </div>

    <div className="info-row">
      <span>College</span>
      <span>Your College Name</span>
    </div>
  </div>

  {/* LEARNING STATS */}
  <div className="details-card glass">
    <h3>Learning Stats</h3>

    <div className="info-row">
      <span>Courses Completed</span>
      <span>5</span>
    </div>

    <div className="info-row">
      <span>In Progress</span>
      <span>3</span>
    </div>

    <div className="info-row">
      <span>Total Hours</span>
      <span>120 hrs</span>
    </div>
  </div>

  {/* ✅ PREFERENCES (SEPARATE CARD) */}
  <div className="details-card glass">
    <h3>Preferences</h3>

    {/* LANGUAGE */}
    <div className="pref-section">
      <p>Language</p>
      <div className="options">
        {["English", "Hindi"].map((lang) => (
          <div
            key={lang}
            className={`option ${languages.includes(lang) ? "active" : ""}`}
            onClick={() => toggleSelection(lang, languages, setLanguages)}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>

    {/* VIDEO TYPE */}
    <div className="pref-section">
      <p>Video Type</p>
      <div className="options">
        {["Whiteboard", "Animated", "Digital Screen"].map((type) => (
          <div
            key={type}
            className={`option ${videoTypes.includes(type) ? "active" : ""}`}
            onClick={() => toggleSelection(type, videoTypes, setVideoTypes)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
    <div className="save-section">

  <button className="save-btn" onClick={handleSavePreferences}>
    Save Changes
  </button>

  {saved && <p className="save-msg">Preferences saved ✅</p>}

</div>

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

export default Profile;