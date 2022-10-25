import React, { useState } from "react";
import axios from "axios";
import { Form, Stack } from "react-bootstrap";
import "./LoginForm.css";
import GeneralButton from "../../components/Buttons/Button/GeneralButton";
// import { loginUser, getUser } from "../api";

function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    const { username, password } = data;
    const url = "http://localhost:5000";
    e.preventDefault();
    const myData = data;
    console.log(myData);
    const result = await axios({
      url: `${url}/login`,
      method: "POST",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        username,
        password,
      }),
    });
    if (result.data.success === true) {
      window.location.replace("/index");
    }
    console.log(result);
  };
  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  return (
    <div className="centerItems mt-5">
      {/* <div>
        <h1>Get User</h1>
        <button onClick={(e) => getUser(e.target.value)}>get User info</button>
      </div> */}
      <Stack direction="horizontal" gap={3}>
        <div>
          <h1>GourmandHall</h1>
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            {/* <Form.Label>username</Form.Label> */}
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="username"
              value={data.username}
              type="username"
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="password"
              value={data.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
          <GeneralButton Value="Submit" type="submit" />
          {/* <Button variant="primary">Submit</Button> */}
        </Form>
      </Stack>
    </div>
  );
}
export default LoginForm;
