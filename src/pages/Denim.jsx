import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Denim() {
    const items = [
        { image: 'src/images/denim1.webp', title: 'Contrast Stitch Flare Leg Jeans', rate: '₹5,490' },
        { image: 'src/images/denim2.webp', title: 'Skinny Jeans', rate: '₹3,690' },
        { image: 'src/images/denim3.webp', title: 'Denim Straight Leg Shorts with Rhinestones', rate: '₹6,990' },
        { image: 'src/images/denim4.webp', title: 'Contrast Stitch Flare Jeans', rate: '₹4,990' },
        { image: 'src/images/denim5.webp', title: 'Denim Bodycon Dress with Belt', rate: '₹4,290' },
        { image: 'src/images/denim6.webp', title: 'Denim Blouse with Pocket', rate: '₹4,290' },
        { image: 'src/images/denim7.webp', title: 'Straight Leg Jeans with Rhinestones', rate: '₹5,990' },
        { image: 'src/images/denim8.webp', title: 'Wide Leg Jeans', rate: '₹1,490' },
        { image: 'src/images/denim9.webp', title: 'Wide Leg Jeans', rate: '₹9,490' },
        { image: 'src/images/denim11.webp', title: 'Straight Leg Jeans', rate: '₹4,990' },
        { image: 'src/images/denim10.webp', title: 'Contrast Stitch Wide Leg Jeans', rate: '₹8,990' },
        { image: 'src/images/denim12.webp', title: 'Denim Blouse with Pocket', rate: '₹7,990' },
        { image: 'src/images/denim13.webp', title: 'Shimmer Denim Waistcoat', rate: '₹3,290' },
        { image: 'src/images/denim15.webp', title: 'Short Denim Jacket with Pocket ', rate: '₹5,990' },
        { image: 'src/images/denim14.webp', title: 'Slit Denim Skirt with Contrast Hem', rate: '₹2,690' },
        { image: 'src/images/denim16.webp', title: 'Printed Straight Leg Jeans', rate: '₹5,490' },
      ];
  return (
    <>
     <Container fluid className="p-0">
        <Row className="no-gutters">
          <Col xs={12} className="p-0">
            <Link to={'#'}>
              <Image
                src="src/images/denimpage.webp"
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
  )
}

export default Denim