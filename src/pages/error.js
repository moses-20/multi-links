import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./_layout";

function ErrorPage({ message }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 3000);
  });

  if (done) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Stack direction="row" justifyContent="center" sx={{ mt: 5 }}>
        <Typography textAlign="center" variant="h3">
          {message ? message : "There was an error"}
        </Typography>
      </Stack>
    </Layout>
  );
}

export default ErrorPage;
