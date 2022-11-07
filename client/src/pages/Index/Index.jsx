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
    console.log(response);
  };

  //useEffect display the data when page is opened
  //slice&reverse to reverse the order of index, received from database
  useEffect(() => {
    data();
  }, []);
  return (
    <>
      <h1>Stories</h1>
      {stories
        .slice(0)
        .reverse()
        .map((story) => (
          <StoryThumbnail key={story._id} story={story} />
        ))}
    </>
  );
}
export default Index;
