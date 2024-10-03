import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      width={"600px"}
      sx={{ backgroundColor: "rgb(60, 100, 15, 0.9)" }}
      p={1}
    >
     
      
       <Accordion sx={{ mt: 0, backgroundColor: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="card-text-content"
          id="card-text-header"
        >
          <Typography variant="h5" color={"white"} fontWeight={"bold"}>
             {cardTitle}
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
