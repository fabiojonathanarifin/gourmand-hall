import React, { useState, useEffect, useRef } from "react";
import { Card, Form } from "react-bootstrap";
import LikeButtons from "../components/Buttons/LikeButtons";
import { showStory } from "../api";
import { useParams } from "react-router-dom";
import { getUser } from "../api";

function Story() {
  const [story, setStory] = useState([]);
  let isLoggedIn = useRef();

  const handleData = async () => {
    const response = await getUser();
    isLoggedIn.current = response.success;
  };
  console.log(isLoggedIn);
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
    handleData();
  }, []);
  console.log(isLoggedIn);
  return (
    <div className="mt-5">
      <h1></h1>
      <Card>
        <Card.Body>
          <Card.Title>{story.title ? story.title : "Bacon"}</Card.Title>
          <Card.Text>
            {story.story ? story.story : "BAboonfoewnowafniowehoifwe"}
          </Card.Text>
          {isLoggedIn.current ? <LikeButtons /> : "Please login to interact"}
          {/* <LikeButtons /> */}
        </Card.Body>
        {/* <Card.Footer>
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
        </Card.Footer> */}
      </Card>
    </div>
  );
}
export default Story;
