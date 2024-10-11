import { faBagShopping, faGlobe, faMagnifyingGlass, faQuestion, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ outline: 'none', boxShadow: 'none' }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="src/images/urbanic.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" style={{ outline: 'none', border: 'none' }} />
          <Navbar.Collapse id="navbarScroll" style={{ outline: 'none', border: 'none' }}>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: '100px',
                fontWeight: '700',
                fontSize: '12px',
                color: 'black',
                outline: 'none',
                border: 'none',
              }}
              navbarScroll
            >
              <Nav.Link href="/newsin" style={{ color: 'black', outline: 'none', border: 'none' }}>NEW IN</Nav.Link>
              <Nav.Link href="#action2" style={{ color: 'black', outline: 'none', border: 'none' }}>READY-TO-WEAR</Nav.Link>
              <Nav.Link href="#action3" style={{ color: 'black', outline: 'none', border: 'none' }}>LOOKBOOK</Nav.Link>
              <Nav.Link href="#action4" style={{ color: 'black', outline: 'none', border: 'none' }}>MEMBERSHIP</Nav.Link>
              <Nav.Link href="#action5" style={{ color: 'black', outline: 'none', border: 'none' }}>SOCIAL RESPONSIBILITY</Nav.Link>
              <Nav.Link href="#action6" style={{ color: 'black', outline: 'none', border: 'none' }}>ABOUT US</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="" style={{ outline: 'none', border: 'none' }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
              </Nav.Link>
              <Nav.Link href="" style={{ outline: 'none', border: 'none' }}>
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Nav.Link>
              <Nav.Link href="" style={{ outline: 'none', border: 'none' }}>
                <FontAwesomeIcon icon={faBagShopping} size="lg" />
              </Nav.Link>
              <Nav.Link href="" style={{ outline: 'none', border: 'none' }}>
                <FontAwesomeIcon icon={faQuestion} size="lg" />
              </Nav.Link>
              <Nav.Link href="" style={{ outline: 'none', border: 'none' }}>
                <FontAwesomeIcon icon={faGlobe} size="lg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
