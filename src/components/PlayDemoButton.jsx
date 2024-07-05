import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { styled } from '@mui/system';

const AnimatedButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  padding: theme.spacing(1, 2),
  backgroundColor: 'white',
  color: '#6B4E79',
  borderRadius: '35px', // Increase the corner radius
  '& .icon': {
    fontSize: '2.5rem', // Increase icon size
    marginRight: theme.spacing(1),
    transition: 'all 0.3s ease-in-out',
  },
  '& .text': {
    opacity: 0,
    transform: 'translateX(-20px)',
    transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  },
  '&:hover': {
    backgroundColor: 'white',
  },
  '&:hover .text': {
    opacity: 1,
    transform: 'translateX(0)',
  },
}));

const PlayDemoButton = ({ onClick }) => {
  return (
    <AnimatedButton variant="contained" sx={{marginTop:"50px"}} onClick={onClick}>
      <PlayArrowIcon className="icon" />
      <span className="text">Play Video</span>
    </AnimatedButton>
  );
};

export default PlayDemoButton;
