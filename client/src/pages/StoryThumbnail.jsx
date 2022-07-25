import {
    Card,
    Row,
    Col,
    Button
} from "react-bootstrap"
import sample from "../assets/sample.jpeg"

function StoryThumbnail() {
  return (
    <div className="mt-5">
          <h1>StoryThumbnail</h1>
          <Card className="mb-3">
            <Row>
              <Col className="md-4">
                <img class="img-fluid" src={sample} alt="" />
              </Col>
              <Col className="md-8">
                <Card.Body>
                  <Card.Title>The best meat in town</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit obcaecati velit sint alias totam esse odio,
                    animi est a maxime natus ad tempora cum excepturi neque?
                    Atque eligendi vitae culpa?
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
  )
}
export default StoryThumbnail