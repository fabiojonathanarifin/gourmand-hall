import React from "react";
import { Stack } from "react-bootstrap";
import NavButton from "./Button/NavButton";
import "./Buttons.css";
function LikeButtons() {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <NavButton Value="Tasty" />
        <NavButton Value="Slimy" />
        <NavButton Value="Crunchy" />
        <div className="ms-auto">
          <NavButton Value="Submit" />
        </div>
      </Stack>
    </>
  );
}

export default LikeButtons;
