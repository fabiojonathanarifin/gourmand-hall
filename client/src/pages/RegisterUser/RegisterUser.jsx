import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import React, { useState } from "react";
import "./RegisterUser.css";
function RegisterUser() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    bio: "",
  });

  return (
    <Container className="mt-5 mb-5">
      <h1>BlackJack</h1>
      <Form>
        <Form.Group className="row mb-3" controlId="formName">
          <div className="col">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </div>
          <div className="col">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </div>
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="socialMedia">
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
