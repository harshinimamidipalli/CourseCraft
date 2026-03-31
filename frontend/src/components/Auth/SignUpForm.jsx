import { useState } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    language: "",
    password: "",
    confirmPassword: "",
  });


  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );


      alert("Signup successful!");
      navigate("/signin");


    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "360px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "28px", fontWeight: "600" }}>
        Create Account
      </h2>


      <input name="firstName" placeholder="First Name" onChange={handleChange} required style={inputStyle} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} required style={inputStyle} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required style={inputStyle} />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} required style={inputStyle} />


      <select name="language" onChange={handleChange} required style={inputStyle}>
        <option value="">Language Preference</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>


      <input name="password" type="password" placeholder="Password" onChange={handleChange} required style={inputStyle} />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} required style={inputStyle} />


      <button type="submit" style={buttonStyle}>
        Sign Up
      </button>


      <p style={{ textAlign: "center", fontSize: "14px" }}>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/signin")}
          style={{ color: "#ffffff", cursor: "pointer", fontWeight: "500" ,textDecoration:"underline"}}
        >
          Sign in
        </span>
      </p>
    </form>
  );
}


/* 🎨 WHITE INPUTS ON BLUE BACKGROUND */


const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.5)",
  outline: "none",
  fontSize: "14px",
  width: "100%",
  backgroundColor: "transparent",
  color: "white",
  boxSizing: "border-box",
};


const buttonStyle = {
  padding: "14px",
  width: "100%",
  backgroundColor: "#ffffff",
  color: "#0B3954",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};


export default SignupForm;
