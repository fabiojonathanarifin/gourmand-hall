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
    // linkedIn: "",
    // facebook: "",
    // instagram: "",
  });

  const handleSubmit = async (e) => {
    const { firstName, lastName, email, username, password, bio, twitter } =
      data;
    const url = "http://localhost:5000";
    e.preventDefault();
    const myData = data;
    console.log(myData);
    const result = await axios({
      url: `${url}/register`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password,
        bio,
        socialMedia: { twitter },
      }),
    });
    console.log(result);
  };
  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  return (
    <Container className="mt-5 mb-5">
      <h1>Register User</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="firstName"
              value={data.firstName}
              type="text"
              placeholder="First Name"
            />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="lastName"
              value={data.lastName}
              type="text"
              placeholder="Last Name"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col lg={6}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="email"
              value={data.email}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col md={6}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="username"
              value={data.username}
              type="text"
              placehodler="username"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col md={6}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="password"
              value={data.password}
              type="password"
              placeholder="Password"
            />
          </Col>
          <Col md={6}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            id="bio"
            value={data.bio}
            as="textarea"
            placeholder="Present yourself"
            style={{ height: "100px" }}
          />
          {/* Max 200 words limitation hasn't been applied */}
          <Form.Text className="text-muted">Maximum 200 words</Form.Text>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <h3 className="mb-3">Social Media</h3>
          <Stack direction="horizontal" gap={2}>
            <Form.Label className="mb-3" column sm="1">
              Twitter
            </Form.Label>
            <Col sm="6">
              <Form.Control
                onChange={(e) => handleChange(e)}
                id="twitter"
                value={data.twitter}
                type="text"
                placeholder="Input link"
              />
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
        <Form.Group className="mb-3">
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
