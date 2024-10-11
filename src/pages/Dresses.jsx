import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function Dresses() {
    const items = [
        { image: 'src/images/dress1.webp', title: 'Patchwork A-line Dress', rate: '₹5,490' },
        { image: 'src/images/dress2.webp', title: 'Cut Out Slip Dress', rate: '₹3,690' },
        { image: 'src/images/dress3.webp', title: 'Studded Bodycon Dress', rate: '₹6,990' },
        { image: 'src/images/dress4.webp', title: 'Asymmetric A-line Dress', rate: '₹4,990' },
        { image: 'src/images/dress5.webp', title: 'Belted Wrap Shirt Dress', rate: '₹4,290' },
        { image: 'src/images/dress6.webp', title: 'Printed A-line Dress', rate: '₹4,290' },
        { image: 'src/images/dress7.webp', title: 'Printed A-line Dress', rate: '₹5,990' },
        { image: 'src/images/dress8.webp', title: 'Tube Top', rate: '₹1,490' },
        { image: 'src/images/dress9.webp', title: 'Sheer A-line Dress', rate: '₹9,490' },
        { image: 'src/images/dress10.webp', title: 'Patchwork Slip Dress', rate: '₹4,990' },
        { image: 'src/images/dress11.webp', title: 'Denim Bodycon Dress with Belt', rate: '₹8,990' },
        { image: 'src/images/dress12.webp', title: 'Open Back Short Waistcoat Dress', rate: '₹7,990' },
        { image: 'src/images/dress13.webp', title: 'Lace Up Bodycon Dress with Floral Print', rate: '₹3,290' },
        { image: 'src/images/dress14.webp', title: 'Open Back Mesh Cami Dress ', rate: '₹5,990' },
        { image: 'src/images/dress15.webp', title: 'Open Back Bodycon Dress', rate: '₹2,690' },
        { image: 'src/images/dress16.webp', title: 'Denim Cami Dress with Rhinestones', rate: '₹5,490' },
      ];
  return (
    <>
      <Container fluid className="p-0">
        <Row className="no-gutters">
          <Col xs={12} className="p-0">
            <Link to={'#'}>
              <Image
                src="src/images/dressespage.webp"
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

export default Dresses