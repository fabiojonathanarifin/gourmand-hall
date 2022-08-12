import { Container, Stack, Form, Button, Row, Col } from "react-bootstrap";
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

  const handleSubmit = async (e) => {
    const resultData = { firstName };
    const url = "http://localhost:5000";
    e.preventDefault();
    const myData = data;
    console.log(myData);
    const result = await axios({
      url: `${url}/user`,
      method: "POST",
      headers: {
        Accept: "applicaiton/json",
        "Conetnt-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({}),
    });
  };
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
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Col lg={6}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="forUsername">
          <Col md={6}>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placehodler="username" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Col md={6}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Col>
          <Col md={6}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Present yourself"
            controlId="Bio"
            style={{ height: "100px" }}
          />
          {/* Max 200 words limitation hasn't been applied */}
          <Form.Text className="text-muted">Maximum 200 words</Form.Text>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="socialMedia">
          <h3 className="mb-3">Social Media</h3>
          <Stack direction="horizontal" gap={2}>
            <Form.Label className="mb-3" column sm="1">
              Twitter
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="Input link" />
            </Col>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Form.Label className="mb-3" column sm="1">
              LinkedIn
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="Input link" />
            </Col>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Form.Label className="mb-3" column sm="1">
              Facebook
            </Form.Label>
            <Col sm="6">
              <Form.Control type="text" placeholder="Input link" />
            </Col>
          </Stack>
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
