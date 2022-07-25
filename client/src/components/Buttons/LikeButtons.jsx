import React from "react";
import { Stack } from "react-bootstrap";
import GeneralButton from "./Button/GeneralButton";
import "./Buttons.css";
function LikeButtons() {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <GeneralButton Value="Tasty" />
        <GeneralButton Value="Slimy" />
        <GeneralButton Value="Crunchy" />
        <div className="ms-auto">
          <GeneralButton Value="Submit" />
        </div>
      </Stack>
    </>
  );
}

export default LikeButtons;
