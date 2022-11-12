import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Stack } from "react-bootstrap";
import "./LoginForm.css";
import GeneralButton from "../../components/Buttons/Button/GeneralButton";
import { loginUser } from "../../api";
import { getNotifications } from "../../api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function LoginForm() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [notificationData, setNotificationData] = useState([]);
  const handleNotification = async () => {
    const response = await getNotifications();
    let obj = response.notifications.find((e) => e.type === "FAIL");
    setNotificationData(obj.message);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(data);
    if (response.data.success === true) {
      window.location.replace("/index");
      toast(notificationData);
    }
    // } else {
    //   toast(notificationData);
    // }
  };
  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  useEffect(() => {
    handleNotification();
  }, []);
  // const notify = () => toast(notificationData);
  return (
    <div className="centerItems mt-5">
      <Stack direction="horizontal" gap={3}>
        <div>
          <h1>GourmandHall</h1>
        </div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="username"
              value={data.username}
              type="username"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              onChange={(e) => handleChange(e)}
              id="password"
              value={data.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <GeneralButton Value="Submit" type="submit" />
        </Form>
      </Stack>
    </div>
  );
}
export default LoginForm;
