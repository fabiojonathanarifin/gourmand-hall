import React from "react";
import { Card } from "react-bootstrap";

function StoryComment({ comment }) {
  return (
    <div className="mt-3">
      <Card className="mb-3">
        <Card.Subtitle className="mb-2 text-muted">
          {comment.author}
        </Card.Subtitle>
        <Card.Body>{comment.comment}</Card.Body>
      </Card>
    </div>
  );
}

export default StoryComment;
