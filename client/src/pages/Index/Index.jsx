import React, { useState, useEffect } from "react";
import StoryThumbnail from "./StoryThumbnail/StoryThumbnail";
import { getIndex } from "../../api/index";
// import { Route } from "react-router-dom";

function Index() {
  const [stories, setStories] = useState([]);

  //getIndex is returning a promise
  const data = async () => {
    const response = await getIndex();
    setStories(response);
  };

  //useEffect display the data when page is opened
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      {stories.map((story) => (
        <StoryThumbnail story={story} />
      ))}
    </>
  );
}
export default Index;
