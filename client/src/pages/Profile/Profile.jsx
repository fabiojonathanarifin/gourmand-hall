import { Card, Row, Col, Button, Stack, Container } from "react-bootstrap";
import "./Profile.css";
import sample from "../../assets/sample.jpeg";
import GeneralButton from "../../components/Buttons/Button/GeneralButton";
import StoryThumbnail from "../StoryThumbnail/StoryThumbnail";
function Profile() {
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
                <Card.Title>Fabio Jonathan Arifin</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Jakarta, Indonesia
                </Card.Subtitle>
                <Card.Text>Email: fabiojonathanarifin@gmail.com</Card.Text>
                <Card.Text>Website: www.gourmandhall.com</Card.Text>
                <Card.Text>Birthday: September 20, 1996</Card.Text>
                <Card>
                  <Card.Body>
                    <Card.Subtitle className="mb-3">About me</Card.Subtitle>
                    <Card.Text>I'm gourmet, yet an engineer.</Card.Text>
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
          <h1>Stories</h1>
          <StoryThumbnail />
        </Container>
      </Stack>
    </div>
  );
}
export default Profile;
