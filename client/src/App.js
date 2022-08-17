import React, { useEffect, useState } from "react";
import NavigationBar from "./layouts/NavigationBar";
import LoginFrom from "./pages/LoginFrom";
import PostStory from "./pages/PostStory/PostStory";
import StoryThumbnail from "./pages/StoryThumbnail/StoryThumbnail";
// import Story from "./pages/Story";
import Profile from "./pages/Profile/Profile";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import Pricing from "./pages/Pricing";
import Footer from "./layouts/Footer";
import { Routes, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import axios from "axios";
import { getQuote, getIndex } from "./api/index";

function App() {
  // const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);

  //getIndex is returning a promise
  const data = async () => {
    const response = await getIndex();
    console.log(response);
    setStories(response);
  };

  //useEffect displaying the data right away
  useEffect(() => {
    data();
  }, []);
  return (
    <div className="App">
      <NavigationBar />
      <Container className="contentmargin" fluid="md mb-5">
        {/* Use react-router */}
        <Button>Get Quote</Button>
        <Routes>
          {/* data placed properly by using props on StoryThumbnail.jsx */}
          <Route
            path="/thumbnail"
            element={stories.map((story) => (
              <StoryThumbnail story={story} />
            ))}
          />
          <Route path="/post" element={<PostStory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/post" element={<PostStory />} />
          <Route path="/login" element={<LoginFrom />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
