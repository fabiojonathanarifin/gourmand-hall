import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { InputTags } from "react-bootstrap-tagsinput";
import "./PostStory.css";

function PostStory() {
  const [state, setState] = useState([]);
  const [data, setData] = useState({
    title: "",
    story: "",
  });

  let handleSubmit = async (e) => {
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
      data: JSON.stringify({ title, story }),
      // data: JSON.stringify({ title: data.title, story: data.story }),
    });
    console.log(result.data);
  };
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
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
          </ol>
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
