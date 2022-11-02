import React, { useState } from "react";
import { Stack, Form, Button } from "react-bootstrap";
import { WithContext as ReactTags } from "react-tag-input";
import "./PostStory.css";
import LightGenButton from "../../components/Buttons/Button/LightGenButton";
import GeneralButton from "../../components/Buttons/Button/GeneralButton";
import { submitStory } from "../../api";
//https://github.com/react-tags/react-tags

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
let placeholder = "#beef #american #vegan";

function PostStory() {
  const [tags, setTags] = useState([]);
  const [storyData, setStoryData] = useState({
    title: "",
    story: "",
  });
  //============================input tags================

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
    setTags(newTags);
  };

  //==========================input tags end==========================

  let handleSubmit = async (e) => {
    const tagsIds = tags.map((tag) => tag.id);
    e.preventDefault();
    submitStory(tagsIds, storyData);
  };

  let handleChange = (e) => {
    const newdata = { ...storyData };
    newdata[e.target.id] = e.target.value;
    setStoryData(newdata);
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
            value={storyData.title}
            type="text"
            placeholder="title"
          />
        </Form.Group>
        {/* tag use react-bootstrap-tagsinput npm */}
        <Form.Group className="mb-3">
          <div>
            <h1>Tags</h1>
            <div>
              <ReactTags
                className={{
                  tags: "tagsClass",
                  tagInput: "tagInputClass",
                  tagInputField: "tagInputFieldClass",
                  selected: "selectedClass",
                  tag: "tagClass",
                  remove: "removeClass",
                  suggestions: "suggestionsClass",
                  activeSuggestion: "activeSuggestionClass",
                  editTagInput: "editTagInputClass",
                  editTagInputField: "editTagInputField",
                  clearAll: "clearAllClass",
                }}
                tags={tags}
                delimiters={delimiters}
                placeholder={placeholder}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                handleDrag={handleDrag}
                inputFieldPosition="top"
                autocomplete
              />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            onChange={(e) => handleChange(e)}
            id="story"
            value={storyData.story}
            as="textarea"
            rows={3}
            placeholder="Your story starts here.."
            className="submissionfield"
          />
        </Form.Group>
        <Stack direction="horizontal" className="mb-3" gap={3}>
          <LightGenButton Value="Save Draft" />
          <GeneralButton Value="Post" />
        </Stack>
      </Form>
    </div>
  );
}
export default PostStory;
