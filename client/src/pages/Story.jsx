import { Card, Form } from "react-bootstrap";
import LikeButtons from "../components/Buttons/LikeButtons";
// import { getStory } from "../api";
import { getIndex } from "../api";
import { useEffect } from "react";

function Story() {
  const [stories, setStories] = useState([]);

  // const displayStories = async () => {
  //   let result = await getStory();
  //   console.log(result);
  //   return result;
  // };

  const displayPost = async () => {
    const result = await getIndex();
    setStories(result);
  };

  return (
    <div className="mt-5">
      <h1>Story</h1>
      <Card>
        <Card.Body>
          <Card.Title>The Best Meat in Town</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero
            nisi possimus temporibus! Esse officiis nam eius veniam magni dolore
            exercitationem, architecto non iusto impedit reprehenderit facilis
            eveniet quae. Voluptatum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut placeat cupiditate nihil, cum ullam
            consectetur doloribus illum mollitia eveniet aliquid eum dignissimos
            ducimus dicta ex odio quam maiores quis! Omnis!
          </Card.Text>
          <LikeButtons />
        </Card.Body>
        <Card.Footer>
          <Form>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Comment on the story.."
                className="comment"
              />
              <div className="mt-3">
                <LikeButtons />
              </div>
            </Form.Group>
          </Form>
        </Card.Footer>
      </Card>
    </div>
  );
}
export default Story;
