import React from "react";
import "./Recommendations.css";
import logo from "../../assets/final.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const recommendedCourses = [
  {
    title: "Advanced Data Structures",
    reason: "Students similar to you completed this",
    duration: "6 weeks"
  },
  {
    title: "Machine Learning Basics",
    reason: "Based on your interest in AI",
    duration: "8 weeks"
  },
  {
    title: "Web Development Bootcamp",
    reason: "Popular among your peers",
    duration: "5 weeks"
  },
  {
    title: "System Design Fundamentals",
    reason: "Recommended for your level",
    duration: "4 weeks"
  }
];

const Recommendations = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="rec-wrapper">

      {/* NAVBAR */}
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="nav-right">
          <button className="nav-btn" onClick={() => navigate("/")}>
            My Courses
          </button>
          <button className="nav-btn active">
            Recommendations
          </button>
          <button
            className="nav-btn"
            onClick={() => navigate("/plan")}
            >
            My Plan
            </button>
        </div>
        <div className="profile">
      <div className="avatar" onClick={() => setOpen(!open)}> U </div>
      {open && (
        <div className="dropdown">
          <p
            onClick={() => {
              navigate("/profile");
              setOpen(false);
            }}
          >
            Profile
          </p>
         <p onClick={() => navigate("/settings")}>Settings</p>
           <p onClick={() => setShowLogoutModal(true)}>Logout</p>
        </div>
      )}
    </div>
      </div>

      {/* HEADER */}
      <div className="rec-header">
        <h1>Recommended for You</h1>
        <p>Based on learners with similar profiles</p>
      </div>

      {/* AI CARD */}
      <div className="ai-banner">
        <h3>AI Insights</h3>
        <p>
          These courses are selected based on your interests, progress, and similar learners.
        </p>
      </div>

      {/* COURSE GRID */}
      <div className="rec-grid">
        {recommendedCourses.map((course, index) => (
          <div key={index} className="rec-card">

            <h3>{course.title}</h3>
            <p className="reason">{course.reason}</p>
            <p className="duration">{course.duration}</p>

            <button className="start-btn">
              Start Course
            </button>

          </div>
        ))}
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
  );
};

export default Recommendations;