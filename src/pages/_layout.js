import { Box, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Page, Main, Logo } from "../material";
import { MdOutlineArrowBackIos } from "react-icons/md";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Page>
      <Container component="header">
        <Toolbar>
          <Box sx={{ minWidth: 50 }}>
            <IconButton
              disabled={location.pathname === "/"}
              onClick={() => navigate(-1)}
              sx={{
                fontSize: 15,
                borderRadius: 1,
                border:
                  location.pathname === "/"
                    ? "1px solid #00000042"
                    : "1px solid grey",
              }}
            >
              <MdOutlineArrowBackIos />
            </IconButton>
          </Box>
          <Box sx={{ flex: 1, m: 1 }}>
            <Logo> Multilinks </Logo>
          </Box>
        </Toolbar>
      </Container>

      <Main component="main">{children}</Main>
      <Box component="footer" sx={{ py: 5 }}>
        <Typography textAlign="center">&copy; 2022 Multilinks</Typography>
      </Box>
    </Page>
  );
}

export default Layout;
