import { Box, Typography } from "@mui/material";
import constants from "../../constants/Labels";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer-container">
      <Typography className="footer-content">{constants.COPYRIGHT}</Typography>
    </Box>
  );
};

export default Footer;
