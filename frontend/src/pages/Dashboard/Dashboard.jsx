import React, { useState } from "react";
import "./Dashboard.css";
import logo from "../../assets/final.png";
import { useNavigate } from "react-router-dom";


const courses = [
  { name: "Mathematics", progress: 80 },
  { name: "Statistics", progress: 10 },
  { name: "Economics", progress: 90 },
  { name: "Physics", progress: 60 },
  { name: "Chemistry", progress: 40 },
  { name: "Biology", progress: 75 },
  { name: "Artificial Intelligence", progress: 50 },
  { name: "Data Structures", progress: 65 }
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="dashboard-wrapper">

      {/* NAVBAR */}
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />

        <div className="nav-right">
          <button className="nav-btn active">My Courses</button>
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

          {/* ✅ FIXED PROFILE DROPDOWN */}
          <div className="profile">
            <div
              className="avatar"
              onClick={() => setOpen(!open)}
            >
              U
            </div>

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
      </div>

      {/* HEADER */}
      <div className="header">
        <h1>Hello, User</h1>
        <p>Continue your learning journey</p>
      </div>

      {/* MAIN GRID */}
      <div className="main-grid" style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "30px" }}>
        {/* CENTER GRID */}
       <div
        className="course-grid"
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px"
        }}
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="course-card glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3>{course.name}</h3>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <p>{course.progress}% completed</p>
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="panel glass insights-panel">
          <h3>Insights</h3>
          <div className="insight-card">
            <p>📅 Next test in 2 days</p>
          </div>

          <div className="insight-card">
            <p>⚡ 3 deadlines this week</p>
          </div>
        </div>
          {showLogoutModal && (
  <div className="modal-overlay">

    <div className="modal">

      <h3>Logout</h3>
      <p>Are you sure you want to logout?</p>

     <div className="main-grid">
  ...
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

        <button
  style={{ zIndex: 999999, position: "relative" }}
  onClick={() => {
    console.log("CLICKED");
    alert("CLICKED");
  }}
>
  Test
</button>
      </div>
    </div>
  </div>
)}

      </div>

    </div>

 
)}
      </div>
    </div>
  );
};

export default Dashboard;