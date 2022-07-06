import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Card,
  Footer,
} from "react-bootstrap";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="navStyle" to="/">
              <strong>Photo Flowers</strong>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="navStyle" to="/Cards">
                Cards
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="navStyle" to="/About">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Card.Footer className="footerStyle">© 2022 Photo Flowers</Card.Footer>
    </>
  );
}

export default Header;
