import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HomePageImage from './images/home-f.jpg';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
// import Logo from './images/LogoCic.png';
import Logo from './images/aws_white.png';
import ProjectInfo from '../components/ProjectInfo';
import aws from './images/awsLogo.png';
import OverlayCarousel from '../components/OverlayCarousel';

const client = generateClient();

const positions = [
  { top: '50%', left: '25%' }, //*Optimizing Sedation
  { top: '60%', left: '55%' }, //*Research Expertise Portal
  { top: '65%', left: '30%' }, //*Combat Climate Change
  { top: '40%', left: '45%' }, //*Noise Tracker
  { top: '20%', left: '65%' }, //*Impact Evaluatior
  { top: '45%', left: '60%' }, //*Autism
];

const DemoSite = () => {
  const [info, setInfo] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false); // Hide modal by default

  useEffect(() => {
    const fetchData = async () => {
      try {
        const challenges = await client.graphql({ query: queries.listChallengesInfos });
        const highlightedChallenges = challenges.data.listChallengesInfos.items.filter(
          challenge => challenge.Highlight === true
        );
        setInfo(highlightedChallenges);
        console.log("Highlighted challenges Info", highlightedChallenges);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const overlayShown = sessionStorage.getItem('overlayShown');
    if (!overlayShown) {
      setShowOverlay(true);
      sessionStorage.setItem('overlayShown', 'true');
    }
  }, []);

  const handleAWSLogoClick = () => {
    setShowOverlay(true); // Show the modal when AWS logo is clicked
    sessionStorage.setItem('overlayShown', 'true');
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${HomePageImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: '#3C640F',
        height: '100vh',
      }}
    >
    {/* Uncomment this if you want to show the overlay */}
      {/* {showOverlay && <OverlayCarousel info={info} onClose={handleCloseOverlay} />} */}

      <img
        src={Logo}
        alt="cic-ai logo"
        style={{
          position: 'absolute',
          top: '50px',
          left: '50px',
          width: "150px",
        }}
      />

      <Typography
        variant="h4"
        align="left"
        style={{
          color: 'rgba(245, 255, 255, 0.95)',
          fontWeight: 'bold',
          fontFamily: '"Helvetica Neue"',
          position: 'absolute',
          top: '170px',
          left: '50px',
          width: '550px',
          textShadow: `
            -1px -1px 0 rgba(255, 255, 255, 0),
            1px -1px 0 rgba(255, 255, 255, 0),
            -1px 1px 0 rgba(255, 255, 255, 0),
            1px 1px 0 rgba(255, 255, 255, 0)
          `,
        }}
      >
        Welcome to <br /> Innovation Nation!
      </Typography>
{/*
      <Typography
          variant="subtitle1"
          align="left"
          color="white"
          style={{
            color: 'rgba(240, 255, 255, 0.9)',
            fontWeight: 'bold',
            fontFamily: '"Helvetica Neue"',
            position: 'absolute',
            top: '240px',
            left: '50px',
            width: '350px',
            textShadow: `
              -1px -1px 0 rgba(60, 100, 15, 0.7),
              1px -1px 0 rgba(60, 100, 15, 0.7),
              -1px 1px 0 rgba(60, 100, 15, 0.7),
              1px 1px 0 rgba(60, 100, 15, 0.7)
            `,
          }}
        >
          <br />
          Explore a selection of technical prototypes, developed by the UBC Cloud Innovation Centre (CIC), that solve real-world, mission-focused challenges, using AWS technical solutions.
        </Typography>
*/}

      {info.map((project, index) => (
        <ProjectInfo
          key={index}
          projectName={project.ProjectName}
          projectInfo={project.ShortInfo}
          projectApproach={project.approach}
          projectApproachES={project.approach_es}
          pic={project.ProjectPic}
          demo={project.Demo}
          style={{
            position: 'absolute',
            top: positions[index].top,
            left: positions[index].left,
          }}
        />
      ))}
      {/* Uncomment this if you want the aws logo at the bottom right */}
      {/* <img
        src={aws}
        alt="aws logo"
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: "10%",
          cursor: 'pointer', // Make the AWS logo clickable
        }}
        onClick={handleAWSLogoClick}
      /> */}
    </Box>
  );
};

export default DemoSite;
