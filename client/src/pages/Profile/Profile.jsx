import React, { useEffect, useState } from "react";
import { Card, Row, Col, Stack, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Profile.css";
import sample from "../../assets/sample.jpeg";
import GeneralButton from "../../components/Buttons/Button/GeneralButton";
import Index from "../Index/Index";
import { getUser } from "../../api/index";

function Profile() {
  const [data, setData] = useState({});
  const handleData = async () => {
    const response = await getUser();
    if (response.success === false) {
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
                <div className="mt-2">
                  <Stack direction="horizontal" gap={3}>
                    <Link to="/addinfo">
                      <GeneralButton Value="Edit Profile" />
                    </Link>
                    {/* <GeneralButton Value="Edit Profile" /> */}
                  </Stack>
                </div>
                <div className="mt-4">
                  <Card.Text>
                    Followers: {data.followers ? `${data.followers}` : 0}
                  </Card.Text>
                  <Card.Text>
                    Stories: {data.postsAmt ? `${data.postsAmt}` : 0}
                  </Card.Text>
                </div>
              </Col>
              <Col md={8}>
                <Card.Title>
                  {data.firstName} {data.lastName}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {data.location ? `${data.location}` : 0}
                </Card.Subtitle>
                <Card.Text>Email: {data.email ? `${data.email}` : 0}</Card.Text>
                <Card.Text>
                  Website: {data.website ? `${data.website}` : 0}
                </Card.Text>
                <Card.Text>
                  Birthday: {data.birthday ? `${data.birthday}` : 0}
                </Card.Text>
                <Card.Text>
                  Favorite Cuisine: {data.favCuisine ? `${data.favCuisine}` : 0}
                </Card.Text>

                <Card.Text>
                  Favorite Food: {data.favFood ? `${data.favFood}` : 0}
                </Card.Text>

                <Card.Text>
                  Location:{" "}
                  {data.city && data.state ? `${data.city}, ${data.state}` : 0}
                </Card.Text>

                <Card>
                  <Card.Body>
                    <Card.Subtitle className="mb-3">About me</Card.Subtitle>
                    <Card.Text>{data.bio ? `${data.bio}` : 0}</Card.Text>
                  </Card.Body>
                  <Card.Text>
                    Twitter:{" "}
                    {data.socialMedia ? `${data.socialMedia.twitter}` : 0}
                  </Card.Text>
                  <Card.Text>
                    LinkedIn:
                    {data.socialMedia ? `${data.socialMedia.linkedIn}` : 0}
                  </Card.Text>
                  <Card.Text>
                    Facebook:
                    {data.socialMedia ? `${data.socialMedia.facebook}` : 0}
                  </Card.Text>
                  <Card.Text>
                    Instagram:
                    {data.socialMedia ? `${data.socialMedia.instagram}` : 0}
                  </Card.Text>
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
