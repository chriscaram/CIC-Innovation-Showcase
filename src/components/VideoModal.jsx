import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const VideoModal = ({ open, handleClose, demo }) => {
  return (
    <Dialog
    open={open}
    onClose={handleClose}
    maxWidth={false}
    sx={{ "& .MuiDialog-paper": { width: "75%", maxWidth: "none" } }}
  >
      <DialogTitle
        sx={{
          backgroundColor: "rgba(60, 100, 15, 0.9)",
          color: "white",
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "rgba(60, 100, 15, 0.9)",
        }}
      >
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src={demo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Demo Video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
