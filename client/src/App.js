import React from "react";
import NavigationBar from "./layouts/NavigationBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginFrom from "./components/LoginFrom";
import PostStory from "./components/PostStory";
import StoryThumbnail from "./components/StoryThumbnail";
import Story from "./components/Story";
import Prices from "./components/Prices";
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
