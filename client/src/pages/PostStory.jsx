import {Form, Button} from "react-bootstrap"

function PostStory() {
  return (
    <div className="mt-5 mb-5">
          <h1>Post</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Gourmand Hall" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your story starts here.."
                className="submissionfield"
              />
            </Form.Group>
            
              <div className="d-flex justify-content-end">
                <Button className="me-2" variant="info" type="button">
                  Save Draft
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            
          </Form>
        </div>
  )
}
export default PostStory