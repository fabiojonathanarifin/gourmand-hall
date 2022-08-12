import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import "./RegisterUser.css";
function RegisterUser() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    bio: "",
    twitter: "",
    linkedIn: "",
    facebook: "",
    instagram: "",
  });
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  return (
    <Container className="mt-5 mb-5">
      <h1>BlackJack</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Row>
            <Col lg={6}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="forUsername">
          <Row>
            <Col md={6}>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placehodler="username" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Row>
            <Col md={6}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col md={6}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="socialMedia">
          <h3>Social Media</h3>
          <Form.Label className="mb-3" column sm="1">
            Twitter
          </Form.Label>
          <Col sm="11">
            <Form.Control type="text" placeholder="Input link" />
          </Col>
          <Form.Label className="mb-3" column sm="1">
            LinkedIn
          </Form.Label>
          <Col sm="11">
            <Form.Control type="text" placeholder="Input link" />
          </Col>
          <Form.Label className="mb-3" column sm="1">
            Facebook
          </Form.Label>
          <Col sm="11">
            <Form.Control type="text" placeholder="Input link" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Hooman yes?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default RegisterUser;
