import React from "react";
import { Button } from "react-bootstrap";
import "../Buttons.css";
function NavButton(props) {
  return (
    <Button className="likebuttons" variant="primary">
      {props.Value}
    </Button>
  );
}
export default NavButton;
