import React from "react";
import NavigationBar from "./layouts/NavigationBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginFrom from "./components/LoginFrom";
import PostStory from "./components/PostStory";
import StoryThumbnail from "./components/StoryThumbnail";
import Story from "./components/Story";
import Prices from "./components/Prices";
import Footer from "./layouts/Footer";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Form,
  Stack,
  Card,
  CardGroup,
} from "react-bootstrap";
import "./App.css";
import sample from "./assets/sample.jpeg";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <NavigationBar />
      <Container fluid="md mt-5 mb-5">
        {/* Registration */}
        <RegistrationForm />
        {/* Login Form */}
        <LoginFrom />
        {/* Post */}
        <PostStory />
        {/* Index Story lists */}
        <StoryThumbnail />
        {/* Story */}
        <Story />
        {/* Prices */}
        <Prices />
      </Container>
      {/* footer */}
    </div>
  );
}

export default App;
