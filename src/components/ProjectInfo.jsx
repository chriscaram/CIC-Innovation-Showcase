import React from "react";
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import gem from "../pages/images/gem.gif";
import Highlight from "../pages/images/highlight.png";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const ProjectInfo = ({ style , projectName, projectInfo, projectApproach, projectApproachES, pic, demo }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project`, {
      state: { projectName, projectInfo, pic, projectApproach, projectApproachES, demo }
    });
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      sx={{ ...style, cursor: 'pointer' }}
    >
      <Chip
        label={projectName}
        sx={{
          backgroundColor: "#3C640F",
          color: "white",
          border: "1px solid white",
          fontSize: "0.75rem",
          fontWeight:"bold",
        }}
      />
      <img
        src={gem}
        alt="Sphere"
        style={{
          width: "40px",
          height: "auto",
        }}
      />
      <img
        src={Highlight}
        alt="Highlight"
        style={{
          width: "60px",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </Stack>
  );
};

export default ProjectInfo;
