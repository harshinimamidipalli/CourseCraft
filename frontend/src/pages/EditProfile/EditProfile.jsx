import React, { useState } from "react";
import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [form, setForm] = useState({
    name: "Harshini",
    email: "harshini@email.com",
    college: "Your College Name"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <div className="edit-wrapper">

      <div className="edit-container">

        {/* LEFT SIDE */}
        <div className="edit-left">
          <h1>Edit Profile</h1>
          <p>Update your personal details</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="edit-card">

          <div className="avatar large">U</div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>College</label>
            <input
              type="text"
              name="college"
              value={form.college}
              onChange={handleChange}
            />
          </div>

          <div className="actions">
            <button
              className="cancel-btn"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>

            <button
              className="save-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EditProfile; 