import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Links from "../components/links";
import Milestones from "../components/milestones";
import Layout from "./_layout";

function User() {
  const profile = useLoaderData();

  return (
    <Layout>
      <Stack direction="column" alignItems="center">
        <Avatar
          alt={profile.name}
          src={profile.avatar}
          sx={{ height: 150, width: 150 }}
        />
        <Box width={{ xs: "100%", sm: "80%" }} m={2}>
          <Typography variant="h6" fontWeight="bold" textAlign="center">
            {profile.name}
          </Typography>
          <Typography textAlign="center">{profile.bio}</Typography>
        </Box>
      </Stack>

      <Links links={profile.links} />

      {profile.milestones && <Milestones milestones={profile.milestones} />}
    </Layout>
  );
}

export default User;
