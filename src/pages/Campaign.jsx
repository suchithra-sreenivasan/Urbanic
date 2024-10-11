import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Campaign() {
  const items = [
    { image: 'src/images/camp1.webp', title: 'Asymmetric Blazer Dress', rate: '₹5,490' },
    { image: 'src/images/camp2.1.webp', title: 'Regular Fit Tube Dress', rate: '₹3,690' },
    { image: 'src/images/camp3.webp', title: 'Double-faced Windbreaker Jacket', rate: '₹6,990' },
    { image: 'src/images/camp4.webp', title: 'Straight Leg Pants with Slit', rate: '₹4,990' },
    { image: 'src/images/camp5.webp', title: 'Straight Leg Pants with Slit', rate: '₹4,290' },
    { image: 'src/images/camp6.webp', title: 'Wide Leg Pants', rate: '₹4,290' },
    { image: 'src/images/camp7.webp', title: 'Colour Block Straight Leg Jeans', rate: '₹5,990' },
    { image: 'src/images/camp8.webp', title: 'Tube Top', rate: '₹1,490' },
    { image: 'src/images/camp9.webp', title: 'Classic Blazer with Patchwork', rate: '₹9,490' },
    { image: 'src/images/camp10.webp', title: 'Denim Straight Leg Shorts with Rhinestones', rate: '₹4,990' },
    { image: 'src/images/camp11.webp', title: 'Denim Short Jacket with Pocket', rate: '₹8,990' },
    { image: 'src/images/camp12.webp', title: 'Drawstring Slip Dress', rate: '₹7,990' },
    { image: 'src/images/camp13.webp', title: 'Pullover Sweatshirt with Drawstrings', rate: '₹3,290' },
    { image: 'src/images/camp14.webp', title: 'Shirt Dress with Drawstrings', rate: '₹5,990' },
    { image: 'src/images/camp15.webp', title: 'Sheer Flare Leg Pants', rate: '₹2,690' },
    { image: 'src/images/camp16.webp', title: 'Ruffle Denim A-line Dress', rate: '₹5,490' },
  ];

  return (
    <>
      <Container fluid className="p-0">
        <Row className="no-gutters">
          <Col xs={12} className="p-0">
            <Link to={'/campaign'}>
              <Image
                src="src/images/camp.jpg"
                fluid
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
                alt="Full Screen"
              />
            </Link>
          </Col>
        </Row>

        <Row className="mt-4 px-4">
          {items.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 p-1">
              <Card className="campaign-card rounded-0">
                <div className="card-image" style={{ textAlign: 'center' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      display: 'block',
                      margin: '0 auto',

                    }}
                  />
                  <div className="heart-overlay">
                  <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
                <Card.Body>
                  <Card.Title className="title" style={{ fontWeight: '400', fontSize: '10px' }}>
                    {item.title}
                  </Card.Title>
                  <Card.Title className="title" style={{ fontWeight: '400', fontSize: '10px' }}>
                    {item.rate}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Campaign;
