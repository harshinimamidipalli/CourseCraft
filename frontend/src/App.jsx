import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Onboarding
import WelcomePage from "./pages/Home/WelcomePage";
// import Signup from "./pages/Auth/Signup";
// import Signin from "./pages/Auth/Signin";

// Main App
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import Recommendations from "./pages/Recommendations/Recommendations";
import MyPlan from "./pages/MyPlan/MyPlan";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Flow */}
        <Route path="/" element={<WelcomePage />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} /> */}

        {/* App Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/plan" element={<MyPlan />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;