import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import DynamicRoutingUserProfile from "./DynamicRoutingUserProfile";
import Users from "./Users";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard">Protected Dashboard</Link>
          </li>
          <li>
            <Link to="/users">All Users</Link>
          </li>
          <li>
            <Link to="/users/12345">User ID Details</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ProfileDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/users/*" element={<Users />} />
        <Route path="/users/:id" element={<DynamicRoutingUserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

const Contact = () => (
  <div>
    <h1>Contact</h1>
  </div>
);

const Profile = () => (
  <div>
    <h1>Profile</h1>
    <nav>
      <ul>
        <li>
          <Link to="overview">Overview</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <Link to="dashboard">Protected Dashboard</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="overview" element={<ProfileOverview />} />
      <Route path="settings" element={<ProfileSettings />} />
      <Route path="posts" element={<ProfilePosts />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <ProfileDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  </div>
);

const ProfileOverview = () => <h1>Profile Overview</h1>;

const ProfileSettings = () => <h1>Profile Settings</h1>;

const ProfilePosts = () => <h1>Profile Posts</h1>;

const ProfileDashboard = () => <h1>Protected Dashboard</h1>;
