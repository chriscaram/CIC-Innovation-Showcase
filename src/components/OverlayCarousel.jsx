import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DynamicCarousel from "./DynamicCarousel";
import sphere1 from './images/sphere1.gif';
import sphere2 from './images/sphere2.gif';
import sphere3 from './images/sphere3.gif';
import { Typography } from "@mui/material";

const OverlayCarousel = ({ info, onClose }) => {
  const [gifIndex, setGifIndex] = useState(0);

  useEffect(() => {
    // Change the gif index every six seconds
    const interval = setInterval(() => {
      setGifIndex((prevIndex) => (prevIndex + 1) % gifList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const gifList = [sphere1, sphere2, sphere3];

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background gifs */}
      {gifList.map((gifPath, index) => (
        <img
          key={index}
          src={gifPath}
          alt={`Background GIF ${index + 1}`}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "110vh",
            objectFit: "contain",
            opacity: index === gifIndex ? 1 : 0, // Show only the selected gif
            transition: "opacity 1s ease-in-out", // Smooth transition
          }}
        />
      ))}

      {/* Overlay content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2, // Ensure content is above gifs
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>
          <span style={{ fontSize: "3rem", fontWeight: "bold" }}>
            EXPLORE
          </span>{" "}
          <span style={{color: "#3C640F" , fontSize: "3rem", fontWeight: "bold" }}>GEN <br/> AI</span>{" "}
          <span style={{ fontSize: "3rem", fontWeight: "bold" }}>
            PROJECTS
          </span>
        </h2>
        <DynamicCarousel challengesInfo={info} />
      </Box>
    </Box>
  );
};

export default OverlayCarousel;
