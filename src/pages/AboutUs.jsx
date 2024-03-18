import React, { useState } from "react";
import {
AboutCIC,
  MarketingFooterBrand,
  NavBarHeader2,
  WhoAreWe,
} from "../ui-components/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './styles.css'; // Import your CSS file


const AboutUs = () => {
  return (
    <div>
    <NavBarHeader2
    width="100%"
    // overrides={{
    //   Button31632483: { onClick: () => setShowCreateModal(true) },
    // }}
  />
  <Container className="about-section" fluid="true">
      <Row className="section-row">
          <h1 className="text-overlay">ABOUT US</h1>
      </Row>
    </Container>
  <WhoAreWe padding={"50px 0"}/>
  <AboutCIC margin={"50px 0"}/>
  <MarketingFooterBrand width="100%"/>
  </div>
  )
}

export default AboutUs