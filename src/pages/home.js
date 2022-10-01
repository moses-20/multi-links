import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { GrSearch } from "react-icons/gr";
import Layout from "./_layout";
import { useNavigate } from "react-router-dom";
import { HomeContext } from "../context/home.context";

function Home() {
  const { query, result, handleQuery } = useContext(HomeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Layout>
      <Paper
        sx={{
          py: 1,
          px: 2,
          mx: "auto",
          mb: 5,
          display: "flex",
          maxWidth: { md: "70%" },
          flexDirection: "row",
        }}
      >
        <InputBase
          value={query}
          onChange={handleQuery}
          onKeyDown={handleQuery}
          onKeyPress={handleQuery}
          placeholder="Search profiles..."
          sx={{ flex: 1, mr: 2 }}
        />
        {isMobile ? (
          <IconButton onClick={handleQuery}>
            <GrSearch />
          </IconButton>
        ) : (
          <Button onClick={handleQuery}>Search</Button>
        )}
      </Paper>

      <Box px={{ xs: 0, sm: 2, md: 5 }} py={1}>
        {result.length > 0 ? (
          <Grid container spacing={3}>
            {result.map((res, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => navigate(`/${res.item.username}`)}
                  sx={{
                    transition: "all .15s",
                    "&:hover": {
                      cursor: "pointer",
                      transform: "scale(1.05)",
                      backgroundColor: (theme) => theme.palette.action.focus,
                    },
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        alt={res.item.name}
                        src={res.item.avatar}
                        sx={{ height: 70, width: 70 }}
                      />
                    }
                  />
                  <CardContent>
                    <Typography variant="h6">{res.item.name}</Typography>
                    <Typography>{res.item.username}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              my: 10,
            }}
          >
            <Typography variant="h1" textAlign="center">
              Welcome to Multilinks
            </Typography>
          </Box>
        )}
      </Box>
    </Layout>
  );
}

export default Home;
