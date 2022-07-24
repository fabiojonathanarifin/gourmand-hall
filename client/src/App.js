import React from "react";
import NavigationBar from "./layouts/NavigationBar";
import RegistrationForm from "./components/RegistrationForm";
import LoginFrom from "./components/LoginFrom";
import PostStory from "./components/PostStory";
import StoryThumbnail from "./components/StoryThumbnail";
import Story from "./components/Story";
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
        {/* Pricing */}

        <div className="mt-5 mb-5">
          <h1>Pricing</h1>
          <CardGroup>
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Gourmand</Card.Title>
                <Card.Text>You're a Gourmand</Card.Text>
                <Button variant="primary">$ 3.99</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                iz nice a cheap boi
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Gourmet</Card.Title>
                <Card.Text>You're a Gourmet</Card.Text>
                <Button variant="primary">$ 6.99</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                iz nice a cheap boi
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Gorilla</Card.Title>
                <Card.Text>You're a Gorilla</Card.Text>
                <Button variant="primary">$ 7.99</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                iz nice a cheap boi
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </Container>

      {/* footer */}
      <Navbar bg="navbar" variant="dark" fixed="bottom">
        <Container>
          <div className="navbrand">
            <Navbar.Brand>gourmandhall</Navbar.Brand>
          </div>
          {/* <Nav className="text-center">
            <h1>gourmandhall by gudboi</h1>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
