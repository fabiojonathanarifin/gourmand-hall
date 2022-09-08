import React, { useState } from "react";
import axios from "axios";
import { Container, Table, Stack, Form, Card, Row, Col } from "react-bootstrap";
import GeneralButton from "../../../components/Buttons/Button/GeneralButton";

function LocalFavorites() {
  const [data, setData] = useState({
    name: "",
    location: "",
    google: "",
    website: "",
    socialMedia: "",
  });

  const createRestaurant = async (e) => {
    const { name, location, google, website, socialMedia } = data;
    const url = "http://localhost:5000";
    e.preventDefault();
    const restaurant = await axios({
      url: `${url}/register`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        name,
        location,
        google,
        website,
        socialMedia,
      }),
    });
    console.log(restaurant);
  };

  return (
    <Container className="mt-5 mb-5">
      <h1>Local Favorites</h1>
      <Form onSubmit={(e) => createRestaurant(e)}>
        <Card>
          <Card.Body>
            <Card.Title>Add Your Favorite Local Restaurant</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Support your local favortie!
            </Card.Subtitle>
            <Form.Group as={Row} className="mb-3">
              <Card.Subtitle>Your Location</Card.Subtitle>
              <Col>
                <Form.Label>State/Province</Form.Label>
                <Form.Control type="text" placeholder="Oregon" />
              </Col>
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Portland" />
              </Col>
              <div className="mt-3">
                <GeneralButton Value="Lock Location" />
              </div>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Form.Label>Restaurant</Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Nodoguro" />
                </Col>
              </Stack>
              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Form.Label>Google Link</Form.Label>
                <Col>
                  <Form.Control type="text" />
                </Col>
              </Stack>

              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Form.Label>Website(optional)</Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="www.nodoguropdx.com" />
                </Col>
              </Stack>

              <Stack direction="horizontal" className="mb-3" gap={2}>
                <Form.Label>Social Media(optional)</Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="www.twitter.com/nodoguro"
                  />
                </Col>
              </Stack>
            </Form.Group>
            <GeneralButton Value="Submit" type="submit" />
          </Card.Body>
        </Card>
      </Form>
      <div className="mt-5">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Restaurant</th>
              <th>Google Link</th>
              <th>Social Media</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nodoguro</td>
              <td>www.google.com/nodoguro</td>
              <td>@nodoguro</td>
              <td>www.nodoguropdx.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default LocalFavorites;
