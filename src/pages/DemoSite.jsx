import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import HomePageImage from './images/HomePageImage.jpg';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import Logo from './images/LogoCic.png';
import ProjectInfo from '../components/ProjectInfo'; 
import aws from './images/awsLogo.png'; 

const client = generateClient();

const positions = [
  { top: '28%', left: '23%' },   
  { top: '23%', left: '59%' },  
  { top: '32%', left: '65%' },   
  { top: '42%', left: '57%' },   
  { top: '52%', left: '73%' },  
  { top: '35%', left: '15%' },   
  { top: '43%', left: '30%' }, 
];

const DemoSite = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
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
    fetchUsers();
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${HomePageImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="cic-ai logo"
        style={{
          position: 'absolute',
          top: '20px', 
          left: '20px', 
          width: "25%",
        }}
      />

      {/* Render ProjectInfo components dynamically */}
      {info.map((project, index) => (
        <ProjectInfo
          key={index}
          projectName={project.ProjectName}
          projectInfo={project.approach}
          pic={project.ProjectPic}
          demo={project.Demo}
          style={{
            position: 'absolute',
            top: positions[index].top, 
            left: positions[index].left, 
          }}
        />
      ))}

      {/* AWS Logo */}
      <img
        src={aws}
        alt="aws logo"
        style={{
          position: 'absolute',
          bottom: '20px', 
          right: '20px', 
          width: "10%",
        }}
      />
    </Box>
  );
};

export default DemoSite;
