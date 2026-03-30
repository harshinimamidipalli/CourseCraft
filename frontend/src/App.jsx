<<<<<<< HEAD
import React from 'react';
import Home from './pages/Home';

function App() {
  return <Home />;
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/plan" element={<MyPlan />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
>>>>>>> 02d87cddb7ada18243966cb2790488a15d2a2081
}

export default App;