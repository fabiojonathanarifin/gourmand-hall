import React from "react"
import {Stack, Button} from "react-bootstrap"
function LikeButtons() {
  return (
    <Stack direction="horizontal" gap={3}>
              <Button variant="secondary">Tasty</Button>
              <Button variant="info">Crunchy</Button>
              <Button variant="danger">Slimy</Button>
              <Button variant="warning">Comment</Button>
              <Button variant="primary ms-auto">Submit</Button>

            </Stack>
  )
}
export default LikeButtons