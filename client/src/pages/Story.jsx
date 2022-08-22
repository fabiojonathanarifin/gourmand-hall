import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";
import LikeButtons from "../components/Buttons/LikeButtons";
import { showStory } from "../api";
import { useParams } from "react-router-dom";
function Story() {
  const [story, setStory] = useState([]);

  //param store id from the parameter
  const param = useParams();

  //showStory is returning a promise
  //api> index> params as id
  const data = async () => {
    const response = await showStory(param.id);
    setStory(response);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="mt-5">
      <h1></h1>
      <Card>
        <Card.Body>
          <Card.Title>{story.title}</Card.Title>
          <Card.Text>{story.story}</Card.Text>
          <LikeButtons />
        </Card.Body>
        <Card.Footer>
          <Form>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Comment on the story.."
                className="comment"
              />
              <div className="mt-3">
                <LikeButtons />
              </div>
            </Form.Group>
          </Form>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default Story;
