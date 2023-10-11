import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import { Navigation } from "../components/Navigation";

const IndexPage = (props: PageProps) => {
  return (
    <Box>
      <Navigation />
      <Container>
        <Typography variant="h3">index page</Typography>
        <Button>ATZ</Button>
      </Container>
    </Box>
  );
};

export default IndexPage;
