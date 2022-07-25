import NavButton from "../components/Buttons/Button/NavButton";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, Stack, Button, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="navbar" variant="dark" fixed="top">
      <Container fluid="md">
        <div className="navbrand">
          <Navbar.Brand>gourmandhall</Navbar.Brand>
        </div>
        <Nav className="me-auto">
          <Stack direction="horizontal" gap={4}>
            <Nav.Link>Home</Nav.Link>
            {/* LinkContainer added */}
            <LinkContainer to="/story">
              <Nav.Link>Story</Nav.Link>
            </LinkContainer>
            <Nav.Link>Post</Nav.Link>
            <Nav.Link>Registration</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
          </Stack>
        </Nav>
        <Nav>
          <Stack direction="horizontal" gap={3}>
            <div className="justify-content-end p-2">
              <NavButton Value="Login" />
            </div>
            <div className="vr" />
            <NavButton Value="Register" />
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
