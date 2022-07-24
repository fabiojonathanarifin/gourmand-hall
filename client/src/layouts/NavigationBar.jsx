import{
    Navbar, Nav, Stack, Button, Container
} from "react-bootstrap"

function NavigationBar() {
  return (
    <Navbar bg="navbar" variant="dark" fixed="top">
        <Container fluid="md">
          <div className="navbrand">
            <Navbar.Brand>gourmandhall</Navbar.Brand>
          </div>
          <Nav className="me-auto">
            <Stack direction="horizontal" gap={4}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Stack>
          </Nav>
          <Nav>
            <Stack direction="horizontal" gap={3}>
              <Button className="navbtn justify-content-end p-2">Login</Button>
              <div className="vr" />
              <Button className="navbtn">Register</Button>
            </Stack>
          </Nav>
        </Container>
      </Navbar>
  )
}
export default NavigationBar