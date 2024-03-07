import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../images/res-logo.png'
import footer from '../../../styles/footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer className="footer"> 
        <Container>
          <Row>
            <Col lg='3' md='4' sm='6'>
              <div className=" footer_logo text-start" >
                <img src={logo} alt="logo" />
                <h5>Tasty Treat</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptatum accusantium ullam fugiat.</p>
              </div>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h5 className='footer_title'>Delivery Time</h5>
              <ListGroup className='delivery_time-list' >
                <ListGroupItem className='delivery_time-item border-0 ps-0' >
                  <span>Sunday - Thursday</span>
                  <p>10:00am - 11:00pm</p>
                </ListGroupItem>
                <ListGroupItem className='delivery_time-item  border-0 ps-0'>
                  <span>Friday - Saturday</span>
                  <p>Off Day</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h5 className='footer_title'>Contact</h5>
              <ListGroup className='delivery_time-list' >
                <ListGroupItem className='delivery_time-item border-0 ps-0' >
                  <p>Location:India,Amalapuram,Gudala</p>

                </ListGroupItem>
                <ListGroupItem className='delivery_time-item border-0 ps-0' >
                  <span>Phone:7007840099</span>

                </ListGroupItem>
                <ListGroupItem className='delivery_time-item  border-0 ps-0'>
                  <span>Email:example@gmail.com</span>

                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg='3' md='4' sm='6'>
              <h5 className='footer_title'>NewsLetters</h5>
              <p>Subscribe our newsletters</p>
              <div className="newsletter">
                <input type="email" placeholder='Enter your email' />
                <span> <i class="ri-send-plane-line"></i></span>
              </div>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col lg='6' md='6'>
              <p className='copyright_text'>CopyRight -2022,website made by srinivas.All rights reserved</p>
            </Col>
            <Col lg='6' md='6'>
              <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                <p className='m-0'>Follow:</p>
                <span><Link to='https://www.facebook.com'><i class="ri-facebook-line"></i></Link></span>
                <span><Link to='https://www.github.com'><i class="ri-github-line"></i></Link></span>
                <span><Link to='https://www.youtube.com'><i class="ri-youtube-line"></i></Link></span>
                <span><Link to='https://www.linkdin.com'><i class="ri-linkedin-line"></i></Link></span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
