import { Card, Row, Col, Button, Image } from "react-bootstrap";
import sample from "../../assets/sample.jpeg";
import "./StoryThumbnail.css";
import { getIndex } from "../../api";

function StoryThumbnail() {
  //use useEffect to display storyThumbnail
  return (
    <div className="mt-5">
      <h1>STORY Thumbnail</h1>
      <Card className="mb-3">
        <Row>
          <Col md={2}>
            <Image className="imgsize m-5" src={sample} roundedCircle />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title>The Best Meat in Town</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat perferendis sit culpa vel eum dolor sed impedit
                molestias, quibusdam consectetur tenetur voluptate natus,
                voluptatem eos unde ducimus atque aspernatur excepturi?
              </Card.Text>
              <Card.Text>
                <small className="text-muted" alt="location">
                  Rawamangun, Jakarta Timur
                </small>
              </Card.Text>
              <Button>View Article</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
export default StoryThumbnail;
