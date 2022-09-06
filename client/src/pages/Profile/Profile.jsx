import React, { useEffect, useState } from "react";
import { Card, Row, Col, Stack, Container } from "react-bootstrap";
import "./Profile.css";
import sample from "../../assets/sample.jpeg";
import GeneralButton from "../../components/Buttons/Button/GeneralButton";
import Index from "../Index/Index";
import axios from "axios";
import { getUser } from "../../api/index";
function Profile() {
  const [data, setData] = useState({});
  const handleData = async () => {
    const response = await getUser();
    if ((response.success = false)) {
      window.location.replace(response.redirectDestination);
    }
    setData(response.userData);
  };

  useEffect(() => {
    handleData();
  }, []);
  console.log(data);
  return (
    <div className="profilecard">
      <Stack gap={5}>
        <Card>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Card.Img
                  className="imagsize"
                  variant="top"
                  src={sample}
                  alt="profile photo"
                />
                <div className="mt-4">
                  <Card.Text>Followers: 4,590</Card.Text>
                  <Card.Text>Stories: 120</Card.Text>
                </div>
              </Col>
              <Col md={8}>
                <Card.Title>
                  {data.firstName} {data.lastName}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.location}
                </Card.Subtitle>
                <Card.Text>Email: {data.email}</Card.Text>
                <Card.Text>Website: www.gourmandhall.com</Card.Text>
                <Card.Text>Birthday: September 20, 1996</Card.Text>
                <Card>
                  <Card.Body>
                    <Card.Subtitle className="mb-3">About me</Card.Subtitle>
                    <Card.Text>{data.bio}</Card.Text>
                  </Card.Body>
                </Card>
                <Stack className="mt-3" direction="horizontal" gap={3}>
                  <GeneralButton Value="Follow" />
                  <GeneralButton Value="Poke" />
                </Stack>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Container>
          <Index />
        </Container>
      </Stack>
    </div>
  );
}
export default Profile;
