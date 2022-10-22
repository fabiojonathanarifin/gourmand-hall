import React, { useState } from "react";
import axios from "axios";
import { Card, Container, Form, Row, Col, Stack } from "react-bootstrap";
import GeneralButton from "../../../components/Buttons/Button/GeneralButton";
import { useEffect } from "react";

function AdditionalData() {
  const [data, setData] = useState({
    state: "",
    city: "",
    favCuisine: "",
    favFood: "",
  });

  const handleSubmit = async (e) => {
    const { state, city, favCuisine, favFood } = data;
    const url = "http://localhost:5000";
    e.preventDefault();
    const result = await axios({
      url: `${url}/addinfo`,
      method: "POST",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        state,
        city,
        favCuisine,
        favFood,
      }),
    });
    console.log(result);
    if (result.data.success === false) {
      window.location.replace(result.data.redirectDestination);
    }
  };
  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  return (
    <Container className="mt-5 mb-5">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Card>
          <Card.Body>
            <Card.Title>Additional Data</Card.Title>
            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Label>State/Province</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  id="state"
                  value={data.state}
                  type="text"
                  placeholder="Oregon"
                />
              </Col>
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  id="city"
                  value={data.city}
                  type="text"
                  placeholder="Portland"
                />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Col>
                  <Form.Label>Favorite Cuisine</Form.Label>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    id="favCuisine"
                    value={data.favCuisine}
                    type="text"
                    placeholder="Japanese, Kaiseki, Modern American"
                  />
                </Col>
              </Stack>
              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Col>
                  <Form.Label>Favorite Food</Form.Label>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    id="favFood"
                    value={data.favFood}
                    type="text"
                    placeholder="Breakfast Bagel"
                  />
                </Col>
              </Stack>
            </Form.Group>
          </Card.Body>
          <GeneralButton Value="Submit" />
        </Card>
      </Form>
    </Container>
  );
}

export default AdditionalData;
