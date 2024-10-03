import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useLocation, useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard'; // Ensure this import path is correct
import ProjectTextCard from '../components/ProjectTextCard';
import backArrow from './images/backArrow.png';

const ProjectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { projectName, projectInfo, projectApproach, projectApproachES, pic, demo } = location.state || {};

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{
      backgroundImage: `url(${pic})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      position: 'relative',
    }}
    p={6}>
      <ProjectCard
        projectName={projectName}
        projectInfo={projectInfo}
        demo={demo}
      />
      <Divider sx={{ visibility: 'hidden', my: 2 }} />
      <ProjectTextCard
        cardTitle="Innovation"
        cardText={projectApproach}
      />
      <Divider sx={{ visibility: 'hidden', my: 2 }} />
      <ProjectTextCard
        cardTitle="Outcomes"
        cardText={projectApproachES}
      />
      <img
        src={backArrow}
        alt="back arrow"
        onClick={handleBackClick} // Handle click event to navigate to home
        style={{
          position: 'absolute',
          bottom: '7%', 
          left: '95%', 
          width: "40px",
          cursor: 'pointer', // Add pointer cursor to indicate it's clickable
        }}
      />
    </Box>
  );
};

export default ProjectPage;
