import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { PageProps } from "gatsby";

const IndexPage = (props: PageProps) => {
  return (
    <Box>
      <Typography variant="h3">index page</Typography>
      <Button>ATZ</Button>
    </Box>
  );
};

export default IndexPage;
