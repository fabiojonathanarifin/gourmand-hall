import {
     Navbar,
     Container
} from "react-bootstrap"

function Footer() {
  return (
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
  )
}
export default Footer