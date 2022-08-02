import NavButton from "../components/Buttons/Button/NavButton";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav, Stack, Button, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="navbar" variant="dark" fixed="top">
      <Container fluid="md">
        <div className="navbrand">
          <LinkContainer to="/thumbnail">
            <Navbar.Brand>gourmandhall</Navbar.Brand>
          </LinkContainer>
        </div>
        <Nav className="me-auto">
          <Stack direction="horizontal" gap={4}>
            <LinkContainer to="/thumbnail">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/post">
              <Nav.Link>Post</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Stack>
        </Nav>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <div className="justify-content-end p-2">
              <Link to="/login">
                <NavButton Value="Login" />
              </Link>
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
