import React from "react";
import NavigationBar from "./layouts/NavigationBar";
import LoginForm from "./pages/LoginForm/LoginForm";
import PostStory from "./pages/PostStory/PostStory";
import Index from "./pages/Index/Index";
import Profile from "./pages/Profile/Profile";
import AdditionalData from "./pages/Profile/AdditionalData/AdditionalData";
import RegisterUser from "./pages/RegisterUser/RegisterUser";
import Pricing from "./pages/Pricing";
import Story from "./pages/Story";
import LocalFavorites from "./pages/Index/LocalFavorites/LocalFavorites";
import Footer from "./layouts/Footer";
import Notification from "./pages/Notification/Notification";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container className="contentmargin" fluid="md mb-5">
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/localfavorites" element={<LocalFavorites />} />
          <Route path="/post" element={<PostStory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addinfo" element={<AdditionalData />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/post" element={<PostStory />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route exact path="/story/:id" element={<Story />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        <ToastContainer />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
