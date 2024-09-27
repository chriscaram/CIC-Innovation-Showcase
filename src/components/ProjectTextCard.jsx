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
      
       <Accordion sx={{ mt: 2, backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="card-text-content"
          id="card-text-header"
        >
          <Typography variant="body2" color={"white"}>
            More Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color={"white"}>
            {cardText}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default ProjectTextCard;
