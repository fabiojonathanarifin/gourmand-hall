import React from "react";
import { Button } from "react-bootstrap";
import "../Buttons.css";
function GeneralButton(props) {
  return (
    <Button className="generalbtn" variant="primary">
      {props.Value}
    </Button>
  );
}
export default GeneralButton;
