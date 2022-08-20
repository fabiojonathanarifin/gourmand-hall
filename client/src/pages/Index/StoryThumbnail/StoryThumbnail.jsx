import { Card, Row, Col, Image } from "react-bootstrap";
import sample from "../../../assets/sample.jpeg";
import "./StoryThumbnail.css";
import GeneralButton from "../../../components/Buttons/Button/GeneralButton";
import { Link } from "react-router-dom";

const StoryThumbnail = ({ story }) => {
  return (
    <div className="mt-5">
      <Card className="mb-3">
        <Row>
          <Col md={2}>
            <Image className="imgsize m-5" src={sample} roundedCircle />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title>{story.title}</Card.Title>
              <Card.Text> {story.story}</Card.Text>
              <Card.Text>
                <small className="text-muted" alt="location">
                  {story.author}
                </small>
              </Card.Text>
              <Link to={`/story/${story._id}`}>
                <GeneralButton Value="View More" />
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default StoryThumbnail;
