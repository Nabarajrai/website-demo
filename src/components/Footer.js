import React from "react";
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import Section from "../components/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGoggle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import "../styles/footer.css";

const Footers = () => {
  return (
    <div className="footers">
      <div className=" clearfix footer-section">
        <div className="float-left">
          <span className="logo">wikee</span>
          <span className="logo-footer">
            &copy; Wokiee 2020. All Rights Reserved
          </span>
        </div>
        <div className="float-right">
          <span>
            <FontAwesomeIcon color="black" icon={faFacebookF} />
          </span>
          <span>
            <FontAwesomeIcon color="black" icon={faTwitter} />
          </span>
          <span>
            <FontAwesomeIcon color="black" icon={faFacebookF} />
          </span>
          <span>
            <FontAwesomeIcon color="black" icon={faTwitter} />
          </span>
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer-content">
      <div className="content ">
        <Row>
          <Col>
            <h4 className="footer-description">BE IN TOUCH WITH US</h4>
          </Col>
          <Col>
            <InputGroup>
              <Input placeholder="username" />
              <InputGroupAddon addonType="append">
                <InputGroupText>Join Us</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col>
            <div className="icons">
              <span>
                <FontAwesomeIcon color="white" icon={faFacebookF} />
              </span>
              <span>
                <FontAwesomeIcon color="white" icon={faTwitter} />
              </span>
              <span>
                <FontAwesomeIcon color="white" icon={faFacebookF} />
              </span>
              <span>
                <FontAwesomeIcon color="white" icon={faTwitter} />
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <Section>
        <div className="main-content">
          <Row>
            <Col lg={3} md={6} sm={12} className="section1 ">
              <h4>CATEGORIES</h4>
              <ul>
                <li>Women</li>
                <li>Women</li>
                <li>Women</li>
                <li>Women</li>
                <li>Women</li>
                <li>Women</li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12} className="section1 sm-12">
              <h4>MY ACCOUNT</h4>
              <ul>
                <li> Orders</li>
                <li> Compare</li>
                <li> Wishlist</li>
                <li> Log In</li>
                <li> Register</li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12} className="section3">
              <h4>ABOUT</h4>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
                sit amet conse ctetur adipisicing elit, seddo eiusmod tempor
                incididunt ut labore etdolore.
              </p>
            </Col>
            <Col lg={3} md={6} sm={12} className="section3">
              <h4>CONTACTS</h4>
              <p>
                Address: 2548 Broaddus Maple Court Avenue, Madisonville KY 4783,
                United States of America
              </p>
              <p>Phone: +777 2345 7885; +777 2345 7886</p>
              <p>Hours: 7 Days a week from 10 am to 6 pm</p>
              <p>E-mail: info@mydomain.com</p>
            </Col>
          </Row>
        </div>
      </Section>
      <Footers />
    </div>
  );
};

export default Footer;
