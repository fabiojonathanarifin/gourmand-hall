import React from "react";
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
} from "react-bootstrap";
import "./App.css";
import sample from "./assets/sample.jpeg";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
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
      <Container fluid="md mt-5 mb-5">
        {/* Login Form */}
        <div className="mt-5">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        {/* Story Post */}
        <div className="mt-5 mb-5">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Gourmand Hall" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your story starts here.."
                className="submissionfield"
              />
            </Form.Group>
          </Form>
        </div>
        {/* Index Story lists */}
        <div className="mt-5">
          <h1>JACKASS</h1>
          <div className="card mb-3">
            <div className="row">
              <div className="col-md-4">
                <img class="img-fluid" src={sample} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The best meat in town</h5>
                  <p className="cardt-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit obcaecati velit sint alias totam esse odio,
                    animi est a maxime natus ad tempora cum excepturi neque?
                    Atque eligendi vitae culpa?
                  </p>
                  <p className="card-text">
                    <small className="text-muted" alt="location">
                      Rawamangun, Jakarta Timur
                    </small>
                    <Button>View Article</Button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Story Post */}
        <div className="mt-5"></div>
        <Card>
          <Card.Body>
            <Card.Title>The Best Meat in Town</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              libero nisi possimus temporibus! Esse officiis nam eius veniam
              magni dolore exercitationem, architecto non iusto impedit
              reprehenderit facilis eveniet quae. Voluptatum. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Aut placeat cupiditate
              nihil, cum ullam consectetur doloribus illum mollitia eveniet
              aliquid eum dignissimos ducimus dicta ex odio quam maiores quis!
              Omnis!
            </Card.Text>
            <Stack direction="horizontal" gap={3}>
              <Button variant="secondary">Tasty</Button>
              <Button variant="info">Crunchy</Button>
              <Button variant="danger">Slimy</Button>
            </Stack>
          </Card.Body>
          <Card.Footer>
            <Form>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Comment on the story.."
                  className="comment"
                />
              </Form.Group>
            </Form>
          </Card.Footer>
        </Card>
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
