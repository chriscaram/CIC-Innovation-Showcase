import React from "react";
import { Typography, Card, CardContent , Box} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

const DynamicCarousel = ({ challengesInfo }) => {
  // Filter out only the elements with Highlight set to true
  if (!challengesInfo || challengesInfo.length === 0) {
    return null; // or return a placeholder message or loading indicator
  }

  const highlightedChallenges = challengesInfo.filter(
    (challenge) => challenge.Highlight
  );

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  return (
   <Box width={"300px"} pt={3}>
      <Slider {...settings}>
        {highlightedChallenges.map((challenge) => (
          <Card
            key={challenge.id} 
            sx={{
              border: "1px solid white",
              backgroundImage: "linear-gradient(0deg,  #297976, #9479FF)",
              color: "white",
            }}
          >
            <img
              src={challenge.ProjectPic}
              alt="Card"
              style={{
                width: "100%",
                padding: "16px 16px 0px 16px", 
                borderRadius: "20px", 
              }}
            />
            <CardContent>
              <Typography variant="h6">{challenge.ProjectName}</Typography>
              <Typography variant="body2">{challenge.ShortInfo}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
      </Box>
  );
};

export default DynamicCarousel;
