import React from 'react';
import Container from 'react-bootstrap/Container';
import {Row ,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        
        <>
          <Container fluid className="align-items-center py-4">
              <Row className="justify-content-between">
                  
                  <Col sm={6} lg={3} className="mb-4">
                      <span>Welcome to Urbanic</span>
                      <div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Social Responsibility</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Sustainability</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Our Factory</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>About Us</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Newsroom</a></div>
                      </div>
                  </Col>
  
                  
                  <Col sm={6} lg={3} className="mb-4">
                      <span>Contact Us</span>
                      <div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Support: support@urbanic.com</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Legal: legal.india@urbanic.com</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Press: press.india@urbanic.com</a></div>
                      </div>
                  </Col>
  
                  
                  <Col sm={6} lg={3} className="mb-4">
                      <span>Help</span>
                      <div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Payment Methods</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Shipping & Delivery</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Return Policy</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Cookies Settings</a></div>
                      </div>
                  </Col>
  
                  
                  <Col sm={6} lg={3} className="mb-4">
                      <span>Policies</span>
                      <div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Terms & Conditions</a></div>
                          <div><a href="#" className="text-center" style={{ textDecoration: 'none', color:'black', fontWeight:'300', fontSize:'10px'}}>Privacy Policy</a></div>
                      </div>
                  </Col>
              </Row>
              <Row  >
                <Col sm={12} className='text-center'>
                <a href='https://www.instagram.com/urbanic_in/?hl=en' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faSquareInstagram} size='2xl' className="px-3" style={{color:'black'}} /></a>
                <a href='https://x.com/urbanic_india'style={{textDecoration:'none'}}><FontAwesomeIcon icon={faSquareTwitter} size='2xl' className="px-3" style={{color:'black'}}/></a>
                <a href='https://www.facebook.com/urbanicofficial/' style={{textDecoration:'none'}}><FontAwesomeIcon icon={faSquareFacebook} size='2xl' className="px-3" style={{color:'black'}}/></a>
                </Col>
              </Row>
          </Container>
          <Container>
            <Row>
              <Col sm={12} className='text-center'>
              <a href='https://play.google.com/store/apps/details?id=com.urbanic&hl=en_IN&pli=1'><img src="src/images/googleplay.png" alt="" height={'50px'} /></a>
              <a href='https://apps.apple.com/in/app/urbanic-fashion-from-london/id1466063983'><img src='src/images/applestore.png' alt='' height={'50px'}/></a>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col  sm={12} className='text-center'>
              <img src="src/images/urbanic.png" alt="" height={'20px'} width={'70px'}/>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="text-center">
              <span  style={{ color:'black', fontWeight:'300', fontSize:'10px'}}>Urbanic London, 119 Marylebone Road, London, United Kingdom. Copyright © URBANIC (LONDON) All rights reserved</span>
              </Col>
            </Row>
          </Container>
          <Container className='pb-5'>
            <Row>
              <Col  sm={12} className='text-center'>
              <img src="src/images/footer-img.png" alt="" height={'25px'} width={'350px'}/>
              </Col>
            </Row>
          </Container>
          
        </>
    );
}

export default Footer;
