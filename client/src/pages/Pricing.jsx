import { CardGroup, Card, Button } from "react-bootstrap";

function Pricing() {
  return (
    <div className="mt-5 mb-5">
      <h1>Pricing</h1>
      <CardGroup>
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Gourmand</Card.Title>
            <Card.Text>You're a Gourmand</Card.Text>
            <Button variant="primary">$ 3.99</Button>
          </Card.Body>
          <Card.Footer className="text-muted">iz nice a cheap boi</Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Gourmet</Card.Title>
            <Card.Text>You're a Gourmet</Card.Text>
            <Button variant="primary">$ 6.99</Button>
          </Card.Body>
          <Card.Footer className="text-muted">iz nice a cheap boi</Card.Footer>
        </Card>
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Gorilla</Card.Title>
            <Card.Text>You're a Gorilla</Card.Text>
            <Button variant="primary">$ 7.99</Button>
          </Card.Body>
          <Card.Footer className="text-muted">iz nice a cheap boi</Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}
export default Pricing;
