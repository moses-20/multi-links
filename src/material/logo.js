import { styled, Typography } from "@mui/material";

const Logo = styled(Typography)(({ theme }) => ({
  marginLeft: 5,
  fontSize: "20px",
  fontWeight: "bold",
  color: theme.palette.primary.main,
}));

export default Logo;
