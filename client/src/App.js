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
  const [users, setUsers] = useState([]);

  //use useEffect to display storyThumbnail
  //specifically use useEffect to fetch the data (fetch in api>index, and import it here)
  // & set up the render in StoryThumbnail.jsx to display the fetched data.
  //the fetched data is the first(index 0) of the story
  const btnOnClick = async () => {
    let result = await getIndex();
    console.log(result);
    setUsers(result);
  };

  return (
    <div className="App">
      <NavigationBar />
      <Container className="contentmargin" fluid="md mb-5">
        {/* Use react-router */}
        <Button onClick={btnOnClick}>Get Quote</Button>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.title}</li>;
          })}
        </ul>
        {/* <ul>{users.title}</ul> */}
        <Routes>
          <Route path="/thumbnail" element={<StoryThumbnail />} />
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
