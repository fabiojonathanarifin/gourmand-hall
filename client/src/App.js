import React from "react";
import NavigationBar from "./layouts/NavigationBar";
import LoginFrom from "./pages/LoginFrom";
import PostStory from "./pages/PostStory";
import StoryThumbnail from "./pages/StoryThumbnail";
// import Story from "./pages/Story";
import Profile from "./pages/Profile";
import Pricing from "./pages/Pricing";
import Footer from "./layouts/Footer";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container fluid="md mt-5 mb-5">
        {/* Use react-router */}
        <Routes>
          <Route path="/thumbnail" element={<StoryThumbnail />} />
          <Route path="/post" element={<PostStory />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/post" element={<PostStory />} />
          <Route path="/login" element={<LoginFrom />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
