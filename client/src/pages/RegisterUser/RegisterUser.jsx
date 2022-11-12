import { Container, Stack, Form, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import GeneralButton from "../../components/Buttons/Button/GeneralButton";
import "./RegisterUser.css";
import { submitRegistration } from "../../api";

function RegisterUser() {
  const [validated, setValidated] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    bio: "",
    twitter: "",
    linkedIn: "",
    facebook: "",
    instagram: "",
  });

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    const { password, confirmPassword } = registrationData;
    const url = "http://localhost:5000";
    e.preventDefault();
    if (password !== confirmPassword) {
      const message =
        "password and password validator is not the same, please redo password";
      return console.log(message);
    }
    const response = await submitRegistration(registrationData);
    console.log(response);
    if (response.data.success === true) {
      window.location.replace("/index");
    }
  };

  const handleChange = (e) => {
    const newdata = { ...registrationData };
    newdata[e.target.id] = e.target.value;
    setRegistrationData(newdata);
    console.log(newdata);
  };

  return (
    <Container className="mt-5 mb-5">
      <h1>Register User</h1>
      <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group as={Row} className="mb-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              onChange={(e) => handleChange(e)}
              id="firstName"
              value={registrationData.firstName}
              type="text"
              placeholder="First Name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid first name
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="lastName"
              value={registrationData.lastName}
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
              value={registrationData.email}
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
              value={registrationData.username}
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
              value={registrationData.password}
              type="password"
              placeholder="Password"
            />
          </Col>
          <Col md={6}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="confirmPassword"
              value={registrationData.confirmPassword}
              type="password"
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            id="bio"
            value={registrationData.bio}
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
                value={registrationData.twitter}
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
              <Form.Control
                onChange={(e) => handleChange(e)}
                id="linkedIn"
                value={registrationData.linkedIn}
                type="text"
                placeholder="Input link"
              />
            </Col>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Form.Label className="mb-3" column sm="1">
              Facebook
            </Form.Label>
            <Col sm="6">
              <Form.Control
                onChange={(e) => handleChange(e)}
                id="facebook"
                value={registrationData.facebook}
                type="text"
                placeholder="Input link"
              />
            </Col>
          </Stack>
          <Stack direction="horizontal" gap={2}>
            <Form.Label className="mb-3" column sm="1">
              Instagram
            </Form.Label>
            <Col sm="6">
              <Form.Control
                onChange={(e) => handleChange(e)}
                id="instagram"
                value={registrationData.instagram}
                type="text"
                placeholder="Input link"
              />
            </Col>
          </Stack>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Hooman yes?" />
        </Form.Group>
        <GeneralButton Value="Register" type="submit" />
      </Form>
    </Container>
  );
}
export default RegisterUser;
