import React from "react";
import NavigationBar from "./layouts/NavigationBar";
import LoginFrom from "./pages/LoginFrom";
import PostStory from "./pages/PostStory/PostStory";
import Index from "./pages/Index/Index";
import Profile from "./pages/Profile/Profile";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import Pricing from "./pages/Pricing";
import Footer from "./layouts/Footer";
import { Routes, Route } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container className="contentmargin" fluid="md mb-5">
        <Button>Get Quote</Button>
        <Routes>
          <Route path="/index" element={<Index />} />
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
