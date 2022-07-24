import React from "react";
import LikeButtons from "./components/LikeButtons";
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
        {/* Registration */}

        <div className="mt-5">
          <h1>Registration Form</h1>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="location" placeholder="Seattle, Washington" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
        {/* Login Form */}
        <div className="mt-5">
          <h1>Login Form</h1>
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
        {/* Post */}
        <div className="mt-5 mb-5">
          <h1>Post</h1>
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
            <Row>
              <div className="d-flex justify-content-end">
                <Button className="me-2" variant="info" type="button">
                  Save Draft
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Row>
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
        {/* Story */}
        <div className="mt-5"></div>
        <h1>Story</h1>
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
            <LikeButtons />
          </Card.Body>
          <Card.Footer>
            <Form>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Comment on the story.."
                  className="comment"
                />
                <div className="mt-3">
                  <LikeButtons />
                </div>
              </Form.Group>
            </Form>
          </Card.Footer>
        </Card>
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
