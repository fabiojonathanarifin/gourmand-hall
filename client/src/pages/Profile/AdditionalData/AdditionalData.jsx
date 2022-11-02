import React, { useState } from "react";
import { Card, Container, Form, Row, Col, Stack } from "react-bootstrap";
import GeneralButton from "../../../components/Buttons/Button/GeneralButton";
import { submitAdditionalData } from "../../../api/index";

function AdditionalData() {
  const [additionalData, setAdditionalData] = useState({
    state: "",
    city: "",
    favCuisine: "",
    favFood: "",
    birthday: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitAdditionalData(additionalData);
  };

  const handleChange = (e) => {
    const newdata = { ...additionalData };
    newdata[e.target.id] = e.target.value;
    setAdditionalData(newdata);
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
                  value={additionalData.state}
                  type="text"
                  placeholder="Oregon"
                />
              </Col>
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  id="city"
                  value={additionalData.city}
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
                    value={additionalData.favCuisine}
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
                    value={additionalData.favFood}
                    type="text"
                    placeholder="Breakfast Bagel"
                  />
                </Col>
                <Col>
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    onChange={(e) => handleChange(e)}
                    id="birthday"
                    value={additionalData.birthday}
                    type="text"
                    placeholder="xx/xx/xx"
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
