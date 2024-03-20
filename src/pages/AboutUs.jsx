import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <div>
    <NavBarHeader2
        width="100%"
        overrides={{
          Button7873: { as: "button", onClick: () =>  navigate("/about")},
          Button7889: { as: "button", onClick: () =>  navigate("/contact")},
          }}
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