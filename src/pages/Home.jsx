import React, { useState, useEffect, useRef } from "react";
import {
  Leftframe,
  MarketingFooterBrand,
  NavBarHeader2,
} from "../ui-components/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Grid } from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import {DynamicCarousel, Cards, Categories} from '../components/index.js'
import './styles.css'; // Import your CSS file

const client = generateClient();


const Home = () => {
  const [info, setInfo] = useState()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const challenges = await client.graphql({ query: queries.listChallengesInfos});
        setInfo(challenges.data.listChallengesInfos.items)
        console.log(challenges.data.listChallengesInfos.items[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUsers();
  }, []);

  function ShowProjects(){
    const element = document.getElementById("categories");
    element.scrollIntoView({ block: "start" });
  }

  return (
    <div>
      <NavBarHeader2
        width="100%"
      />
      <Container className="top-section">
        <Row className="justify-content-md-center">
          <Row>
            <Col xs={12} md={6}>
              <Leftframe />
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
              {/* <ShowcaseCollection margin={"20px"} /> */}
              <DynamicCarousel challengesInfo={info}/>
            </Col>
          </Row>
          {/* This is the arrows icon */}
          <svg
            onClick={ShowProjects}
            id="scrollToCategories"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            class="bi bi-chevron-double-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
            <path
              fill-rule="evenodd"
              d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </Row>
      </Container>
      <div id="categories">
      <Categories challengesInfo={info}/>
      </div>
      <MarketingFooterBrand width="100%"/>
    </div>
  );
};

export default Home;
