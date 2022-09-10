import React from "react";
import { Card, Container, Form, Row, Col, Stack } from "react-bootstrap";

function AdditionalData() {
  return (
    <Container className="mt-5 mb-5">
      <Form>
        <Card>
          <Card.Body>
            <Card.Title>Additional Data</Card.Title>
            <Form.Group as={Row} className="mb-3">
              <Col>
                <Form.Label>State/Province</Form.Label>
                <Form.Control type="text" placeholder="Oregon" />
              </Col>
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Portland" />
              </Col>
            </Form.Group>
            <Form.Group className="mb-3">
              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Col>
                  <Form.Label>Favorite Cuisine</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Japanese, Kaiseki, Modern American"
                  />
                </Col>
              </Stack>
              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Col>
                  <Form.Label>Favorite Food</Form.Label>
                  <Form.Control type="text" placeholder="Breakfast Bagle" />
                </Col>
              </Stack>
            </Form.Group>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
}

export default AdditionalData;
