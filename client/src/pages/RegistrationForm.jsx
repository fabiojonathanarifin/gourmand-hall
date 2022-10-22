import { Form, Button } from "react-bootstrap";
import GeneralButton from "../components/Buttons/Button/GeneralButton";

function RegistrationForm() {
  return (
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
        <GeneralButton Value="Register" type="submit" />
        {/* <Button variant="primary" type="submit">
          Register
        </Button> */}
      </Form>
    </div>
  );
}
export default RegistrationForm;
