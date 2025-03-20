import { Box, CircularProgress } from "@mui/material";
import { PRELOADER_OVERLAY } from "./_feedback.style";

const Preloader = () => {
  return (
    <Box sx={PRELOADER_OVERLAY}>
      <CircularProgress size={50} disableShrink sx={{ color: "#FFF" }} />
    </Box>
  );
};

export default Preloader;
