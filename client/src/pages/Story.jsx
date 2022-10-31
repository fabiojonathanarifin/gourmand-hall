import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card, Form } from "react-bootstrap";
import LikeButtons from "../components/Buttons/LikeButtons";
import { showStory } from "../api";
import { useParams } from "react-router-dom";
import { getUser } from "../api";
import GeneralButton from "../components/Buttons/Button/GeneralButton";

function Story() {
  const [story, setStory] = useState([]);
  const [commentData, setCommentData] = useState({
    comment: "",
  });

  let isLoggedIn = useRef();
  // let author = useRef();

  const handleData = async () => {
    const response = await getUser();
    isLoggedIn.current = response.success;
    // author.current = response.userData.username;
  };
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

  let handleSubmit = async (e) => {
    const { comment } = commentData;
    const url = "http://localhost:5000";
    e.preventDefault();
    const result = await axios({
      url: `${url}/comment`,
      method: "POST",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({ comment }),
      // data: JSON.stringify({ comment, author: author.current }),
    });
    console.log(result);
    // console.log(result);
  };

  let handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setCommentData(newData);
    // console.log(newData);
  };
  // console.log(isLoggedIn);
  // console.log(author);

  return (
    <div className="mt-5">
      <h1></h1>
      <Card>
        <Card.Body>
          <Card.Title>{story.title}</Card.Title>
          <Card.Text>{story.story}</Card.Text>
          {isLoggedIn.current ? <LikeButtons /> : "Please login to interact"}
        </Card.Body>
        {isLoggedIn.current ? (
          <Card.Footer>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group>
                <Form.Control
                  onChange={(e) => handleChange(e)}
                  id="comment"
                  value={commentData.comment}
                  as="textarea"
                  rows={2}
                  placeholder="Comment on the story.."
                  className="comment"
                />
                <div className="mt-3">
                  <GeneralButton Value="Post" />
                </div>
              </Form.Group>
            </Form>
          </Card.Footer>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
}
export default Story;
