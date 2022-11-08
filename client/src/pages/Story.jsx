import React, { useState, useEffect, useRef } from "react";
import { Card, Form } from "react-bootstrap";
import LikeButtons from "../components/Buttons/LikeButtons";
import { showStory, submitComment } from "../api";
import { useParams } from "react-router-dom";
import { getUser, getComments } from "../api";
import GeneralButton from "../components/Buttons/Button/GeneralButton";
import StoryComment from "./StoryComment/StoryComment";

function Story() {
  const [story, setStory] = useState([]);
  const [commentData, setCommentData] = useState({
    comment: "",
  });
  const [displayComments, setDisplayComments] = useState([]);

  let isLoggedIn = useRef();

  //Change into fetchUserData
  const handleData = async () => {
    const response = await getUser();
    isLoggedIn.current = response.success;
  };
  //param store id from the parameter
  const param = useParams();
  const storyId = param.id;
  //showStory is returning a promise
  //api> index> params as id
  const data = async () => {
    const response = await showStory(storyId);
    setStory(response);
    // console.log(storyId);
  };

  const handleComments = async () => {
    const response = await getComments(storyId);
    let commentDisplayData = [];
    let index = 0;
    while (response[index]) {
      let commentAuthorArray = [response[index].author.firstName];
      commentAuthorArray.push(response[index].author.lastName);
      let commentAuthorName = commentAuthorArray.join(" ");
      let commentText = response[index].comment;
      commentDisplayData.push({
        author: commentAuthorName,
        comment: commentText,
      });
      index++;
    }
    console.log(commentDisplayData);
    setDisplayComments(commentDisplayData);
    // console.log(response);
    // const commentAuthorArray = [
    //   response[0].author.firstName,
    //   response[0].author.lastName,
    // ];
    // const commentAuthor = commentAuthorArray.join(" ");
    // const comment = response[0].comment;
    // console.log(comment);
  };

  useEffect(() => {
    data();
    handleData();
    handleComments();
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const response = await submitComment(commentData, storyId);
    //repsonse included message to client and the actual comment
    // console.log(response.data);
  };

  let handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setCommentData(newData);
  };

  return (
    <div className="mt-5">
      <h1></h1>
      <Card>
        <Card.Body>
          <Card.Title>{story.title}</Card.Title>
          <Card.Text>{story.story}</Card.Text>
          {isLoggedIn.current ? <LikeButtons /> : "Please login to interact"}
        </Card.Body>
        {/* <Card>
          <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
          <Card.Body>Comment</Card.Body>
        </Card> */}
        {displayComments.map((comment) => (
          <StoryComment key={comment._id} comment={comment} />
        ))}
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
