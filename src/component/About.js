import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Row, Col, Card } from "react-bootstrap";

function About() {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (comment !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [comment]);

  return (
    <div>
      <Container className="Container">
        <Row className="justify-content-center">
          <Col xs lg="3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <h2> Share your opinion in Photo Flowers</h2>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  placeholder="Enter your comment..."
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {show ? (
          <Card border="warning" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{comment}</Card.Title>
            </Card.Body>
          </Card>
        ) : (
          ""
        )}
      </Container>

      <Card className="cardAbout m-5">
        <Card.Header>
          <h2>About Photo Flowers</h2>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Photo Flowers is a site that displays the most beautiful and best
              pictures of flowers taken by professional photographers. <br />Hope you
              have fun with Photo Flowers
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
