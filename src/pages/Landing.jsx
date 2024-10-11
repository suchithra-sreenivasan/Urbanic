import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Landing() {
    return (
        <>
            <Container fluid className="p-0">
                <Row className="no-gutters">
                    <Col xs={12} className="p-0">
                        <Link to={'/campaign'}>
                            <Image
                                src="src/images/urbanic-1.webp"
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
            </Container>

            <Container fluid className="p-0 py-5 mb-5 mt-5">
                <Row>
                    <Col className='text-center' style={{ fontSize: '40px', fontWeight: '300' }}>WARDROBE STAPLES</Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={3} className='p-0'><Link to={'/dresses'}><Image src="src/images/dresses.jpg" fluid width={'100%'} /></Link></Col>
                    <Col xs={12} md={6} lg={3} className='p-0'><Link to={'/denim'}><Image src="src/images/denim.jpg" fluid width={'100%'}/></Link></Col>
                    <Col xs={12} md={6} lg={3} className='p-0'><Link to={'/tops'}><Image src="src/images/tops.jpg" fluid width={'100%'}/></Link></Col>
                    <Col xs={12} md={6} lg={3} className='p-0'><Link to={'/pants'}><Image src="src/images/pants.jpg" fluid width={'100%'}/></Link></Col>
                </Row>
            </Container>

            <Container fluid className="p-0 py-5 mb-5 mt-5">
                <Row>
                    <Col className='text-center' style={{ fontSize: '40px', fontWeight: '300' }}>FRESH FIND</Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={12} className="p-0">
                        <Link to={'/fresh-find'}>
                            <Image
                                src="src/images/shop.jpg"
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
                </Container>
                <Container fluid>
                <Row>
                    <Col className='text-center' style={{ fontSize: '40px', fontWeight: '300' }}>EVERYONE HAS IT</Col>
                </Row>
                <Row className="no-gutters">
                    <Col xs={12} className="p-0">
                        <Link to={'/everyone-has'}>
                            <Image
                                src="src/images/everyonehas.jpg"
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
                <Row className="justify-content-center pb-5" style={{backgroundColor:'rgba(230, 236, 238, 0.486)'}}>
                    <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center text-center">
                        <Link to={'/everyone-has'} className="text-center" style={{ textDecoration: 'none', color:'black' }}>
                            <Image src="src/images/offshoulder.png" fluid />
                            <span style={{fontWeight:'400'}}>OFF SHOULDER SHEER TOP</span>
                        </Link>
                    </Col>
                    <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center text-center">
                        <Link to={'/everyone-has'} className="text-center" style={{ textDecoration: 'none', color:'black' }}>
                            <Image src="src/images/slim-fit.png" fluid />
                            <span style={{fontWeight:'400'}}>SLIM FIT A-LINE SKIRT</span>
                        </Link>
                    </Col>
                    <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center text-center">
                        <Link to={'/everyone-has'} className="text-center" style={{ textDecoration: 'none', color:'black' }}>
                            <Image src="src/images/bodycon.png" fluid />
                            <span style={{fontWeight:'400'}}>OPEN BACK BODYCON <br /> DRESS</span>
                        </Link>
                    </Col>
                    <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center text-center">
                        <Link to={'/everyone-has'} className="text-center" style={{ textDecoration: 'none', color:'black' }}>
                            <Image src="src/images/ruffletop.png" fluid />
                            <span style={{fontWeight:'400'}}>ASYMMETRIC TOP <br /> WITH RUFFLES</span>
                        </Link>
                    </Col>
                    <Col xs={6} md={4} lg={2} className="d-flex flex-column align-items-center text-center">
                        <Link to={'/everyone-has'} className="text-center" style={{ textDecoration: 'none', color:'black' }}>
                            <Image src="src/images/skrit.png" fluid />
                            <span style={{fontWeight:'400'}}>MINI STRAIGHT SKIRT <br /> WITH POCKETS</span>
                        </Link>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="p-0 py-5 mb-5 mt-5">
                <Row>
                    <Col sm={12} style={{fontSize: '40px', fontWeight: '300',textAlign:'center'}}  >DENIM COMPANION</Col>
                    <Link to={'/Denimcomp'}>
                            <Image
                                src="src/images/denimcompanion.jpg"
                                fluid
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    
                                }}
                                alt="Full Screen"
                            />
                        </Link>
                </Row>
            </Container>

            <Container fluid className="p-0">
                <Row>
                    <Col sm={12} style={{fontSize: '40px', fontWeight: '300',textAlign:'center'}} >UR MOMENT</Col>
                </Row>
                <Row>
                    <Col xs={12} className="p-0">
                        <video
                            width="100%"
                            height="auto"
                            
                            autoPlay
                            loop
                            muted
                        >
                            <source src="src/images/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>
            </Container>

            
        </>
    );
}

export default Landing;
