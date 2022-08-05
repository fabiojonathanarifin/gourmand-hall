import React, { useEffect, useState } from "react";
import NavigationBar from "./layouts/NavigationBar";
import LoginFrom from "./pages/LoginFrom";
import PostStory from "./pages/PostStory/PostStory";
import StoryThumbnail from "./pages/StoryThumbnail/StoryThumbnail";
// import Story from "./pages/Story";
import Profile from "./pages/Profile/Profile";
import Pricing from "./pages/Pricing";
import Footer from "./layouts/Footer";
import { Routes, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import axios from "axios";
import { getQuote } from "./api/index";

function App() {
  const [users, setUsers] = useState([]);

  const btnOnClick = async () => {
    let result = await getQuote();
    console.log(result);
    setUsers(result);
  };
  // const getQuote = async () => {
  //   const response = await axios.get("http://localhost:5000/userlist");
  //   console.log(response.data);
  //   setUsers(response.data);
  // };

  return (
    <div className="App">
      <NavigationBar />
      <Container className="contentmargin" fluid="md mb-5">
        {/* Use react-router */}
        <Button onClick={btnOnClick}>Get Quote</Button>
        <ul>
          <li>{users.usersList}</li>
        </ul>
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
