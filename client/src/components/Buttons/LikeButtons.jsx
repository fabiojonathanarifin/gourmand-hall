import React from "react";
import { Stack } from "react-bootstrap";
import GeneralButton from "./Button/GeneralButton";
import "./Buttons.css";
function LikeButtons() {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <GeneralButton Value="Delicious" />
        <div className="ms-auto">
          <GeneralButton Value="Post" />
        </div>
      </Stack>
    </>
  );
}

export default LikeButtons;
