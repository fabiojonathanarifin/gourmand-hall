import React from "react";
import { Button } from "react-bootstrap";
import "../Buttons.css";

function LightGenButton(props, type = "button") {
  return (
    <Button type={type} className="lightgenbtn" variant="primary">
      {props.Value}
    </Button>
  );
}

export default LightGenButton;
