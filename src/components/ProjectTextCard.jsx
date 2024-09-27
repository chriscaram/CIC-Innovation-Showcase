import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import PlayDemoButton from "./PlayDemoButton";
import VideoModal from "./VideoModal";

const ProjectTextCard = ({cardTitle, cardText}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      boxShadow={3}
      borderRadius={"15px"}
      width={"400px"}
      sx={{ backgroundColor: "rgb(60, 100, 15, 0.9)" }}
      p={3}
    >
      <Typography variant="h4" color={"white"} fontWeight={"bold"}>
       {cardTitle}
      </Typography>
      <Typography variant="body2" color={"white"} mt={2}>
        {cardText}
      </Typography>

    </Box>
  );
};

export default ProjectTextCard;
