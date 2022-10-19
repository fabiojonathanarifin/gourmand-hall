import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { WithContext as ReactTags } from "react-tag-input";
import "./PostStory.css";

const KeyCodes = {
  comma: 188,
  enter: 13,
};
const delimiters = [KeyCodes.comma, KeyCodes.enter];

function PostStory() {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState({
    title: "",
    story: "",
  });
  //add author; author is the one in the current session
  //=========input tags================
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };
  //=============input tags end=============

  let handleSubmit = async (e) => {
    const tagsIds = tags.map((tag) => tag.id);
    const { title, story } = data;
    const url = "http://localhost:5000";
    e.preventDefault();
    const myData = data;
    console.log(myData);
    const result = await axios({
      url: `${url}/story`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({ title, story, tags: tagsIds }),
    });
    console.log(result);
  };
  let handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  return (
    <div className="mt-5 mb-5">
      <h1>Post</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            id="title"
            value={data.title}
            type="text"
            placeholder="title"
          />
        </Form.Group>
        {/* tag use react-bootstrap-tagsinput npm */}
        <Form.Group className="mb-3">
          <div className="app">
            <h1> React Tags Example </h1>
            <div>
              <ReactTags
                tags={tags}
                delimiters={delimiters}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                inputFieldPosition="top"
                autocomplete
              />
              {/* <h3>{console.log(tagsIds)}</h3> */}
            </div>
          </div>
          {/* <Form.Label>Tags</Form.Label>
          <div className="input-group">
            <InputTags
              values={state}
              onTags={(value) => setState(value.values)}
            />
            <Button
              variant="btn btn-outline-secondary"
              type="button"
              data-testid="button-clearAll"
              onClick={() => {
                setState([]);
              }}
            >
              Delete All
            </Button>
          </div>
          <ol>
            {state.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ol>*/}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            id="story"
            value={data.story}
            as="textarea"
            rows={3}
            placeholder="Your story starts here.."
            className="submissionfield"
          />
        </Form.Group>
        {/* <div className="d-flex justify-content-end"> */}
        <Button className="me-2" variant="info" type="button">
          Save Draft
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/* </div> */}
      </Form>
    </div>
  );
}
export default PostStory;
