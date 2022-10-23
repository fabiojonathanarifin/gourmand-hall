import React from "react";
import { Button } from "react-bootstrap";
import "../Buttons.css";

function NavButton(props) {
  return <Button className="navigationbtn">{props.Value}</Button>;
}
export default NavButton;
