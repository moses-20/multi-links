import { Box, Grid, ListItemButton, Paper, Typography } from "@mui/material";
import LinkIcon from "./link-icon";
import iconColors from "../constants/icon-colors.json";

function Links({ links }) {
  return (
    <Grid container spacing={{ xs: 1, sm: 2 }}>
      {links.map((link) => (
        <Grid key={link.name} item xs={12}>
          <Paper
            variant="outlined"
            sx={{ width: { md: "80%" }, mx: "auto", borderRadius: 10 }}
          >
            <ListItemButton
              href={link.url}
              LinkComponent="a"
              sx={{
                borderRadius: 10,
                "&:hover": {
                  color: "white",
                  backgroundColor: iconColors[link.icon],
                },
              }}
            >
              <Box pt={0.3}>
                <LinkIcon name={link.icon} />
              </Box>
              <Typography variant="body2" noWrap={true} sx={{ ml: 1, pb: 0.3 }}>
                {link.name}
              </Typography>
            </ListItemButton>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Links;
