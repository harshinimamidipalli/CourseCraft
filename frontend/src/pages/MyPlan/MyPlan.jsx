import React, { useState } from "react";
import "./MyPlan.css";
import logo from "../../assets/final.png";
import { useNavigate } from "react-router-dom";

const MyPlan = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="plan-wrapper">

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

          <button className="nav-btn active">
            My Plan
          </button>

          {/* PROFILE */}
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
                <p onClick={() => navigate("/settings")}>Settings</p>
                 <p onClick={() => setShowLogoutModal(true)}>Logout</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="plan-header">
        <h1>Choose Your Plan</h1>
        <p>Upgrade to unlock full AI-powered learning</p>
      </div>

      {/* PLANS */}
      <div className="plan-container">

        {/* FREE PLAN */}
        <div className="plan-card">
          <h2>Free Tier</h2>
          <ul>
            <li>✔ Video Curator</li>
            <li className="disabled">✖ AI Recommendations</li>
            <li className="disabled">✖ Quiz Generator</li>
            <li className="disabled">✖ Notes summarizer</li>
            <li className="disabled">✖ Smart Planner</li>
            <li className="disabled">✖ Progress Analytics</li>
          </ul>

          <button className="current-btn">Current Plan</button>
        </div>

        {/* PAID PLAN */}
        <div className="plan-card premium">

          <div className="badge">Most Popular</div>

          <h2>Pro Plan</h2>

          <p className="price">₹299 / month</p>

          <ul>
            <li>✔ Video Curator</li>
            <li>✔ Quiz Generator</li>
            <li>✔ Notes summarizer</li>
            <li>✔ Video Curator</li>
            <li>✔ AI Recommendations</li>
            <li>✔ Smart Study Planner</li>
          </ul>

          <button className="purchase-btn">
            Upgrade Now
          </button>
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

export default MyPlan;