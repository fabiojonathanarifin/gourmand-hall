import React from "react";
import NavButton from "../components/Buttons/Button/NavButton";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav, Stack, Container, Button } from "react-bootstrap";
import { logoutUser } from "../api/index";

function NavigationBar() {
  let handleClick = async (e) => {
    const response = await logoutUser();
    if (response.success === true) {
      window.location.replace("/login");
    }
    console.log(response);
  };

  return (
    <Navbar bg="navbar" variant="dark" fixed="top">
      <Container fluid="md">
        <div className="navbrand">
          <LinkContainer to="/index">
            <Navbar.Brand>gourmandhall</Navbar.Brand>
          </LinkContainer>
        </div>
        <Nav className="me-auto">
          <Stack direction="horizontal" gap={4}>
            <LinkContainer to="/index">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/post">
              <Nav.Link>Post</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Stack>
        </Nav>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <div className="justify-content-end p-2">
              <Link to="/login">
                <NavButton Value="Login" />
              </Link>
              <div onClick={(e) => handleClick(e)}>
                <NavButton Value="Logout" />
              </div>
              {/* <Button
                onClick={(e) => handleClick(e)}
                variant="primary"
                type="button"
              >
                Logout
              </Button> */}
            </div>
            <div className="vr" />
            <Link to="/pricing">
              <NavButton Value="Join Us" />
            </Link>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
