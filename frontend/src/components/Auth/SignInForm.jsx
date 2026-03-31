import { useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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


    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );


      console.log("User logged in:", userCredential.user);


      alert("Login successful!");


      navigate("/dashboard"); // 🔥 change later when dashboard exists


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
        gap: "18px",
      }}
    >
      <h2 style={{ fontSize: "26px", fontWeight: "600" }}>
        Welcome Back!
      </h2>


      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
        required
        style={inputStyle}
      />


      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={handleChange}
        required
        style={inputStyle}
      />


      <button type="submit" style={buttonStyle}>
        Sign In
      </button>


      {/* 🔗 LINK TO SIGNUP */}
      <p style={{ textAlign: "center", marginTop: "10px", fontSize: "18px" }}>
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/")}
          style={{ color: "#0B3954", cursor: "pointer", fontWeight: "500",textDecoration:"underline" }}
        >
          Sign up
        </span>
      </p>
    </form>
  );
}


/* 🎨 Styles */


const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none",
  fontSize: "14px",
  width: "100%",
  backgroundColor: "#f9fafb",
  boxSizing: "border-box",
};


const buttonStyle = {
  padding: "14px",
  width: "100%",
  backgroundColor: "#0B3954",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};


export default SigninForm;
