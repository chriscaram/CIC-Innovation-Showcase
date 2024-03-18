import React from "react";
import {
  ContactInfo,
  MarketingFooterBrand,
  NavBarHeader2,
  ContactUs,
} from "../ui-components/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <NavBarHeader2 />
        <Container className="full-height-container">
          <Row className="contact-section">
            <Col md="6" xs="12">
              <ContactInfo className="contact-info" />
            </Col>
            <Col md="6" xs="12">
              <ContactUs />
            </Col>
          </Row>
        </Container>
        <MarketingFooterBrand width="100%"/>
      </div>
    </>
  );
};

export default Contact;
