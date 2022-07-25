import React from "react";
import NavigationBar from "./layouts/NavigationBar";
import RegistrationForm from "./pages/RegistrationForm";
import LoginFrom from "./pages/LoginFrom";
import PostStory from "./pages/PostStory";
import StoryThumbnail from "./pages/StoryThumbnail";
import Story from "./pages/Story";
import Prices from "./pages/Prices";
import Footer from "./layouts/Footer";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container fluid="md mt-5 mb-5">
        <RegistrationForm />
        <LoginFrom />
        <PostStory />
        <StoryThumbnail />
        <Story />
        <Prices />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
