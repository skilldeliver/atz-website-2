import React from "react";
import { Box, Button, Container, Fab, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import { Navigation } from "../components/Navigation";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Phones } from "../components/Phones";
import { PlayArrow } from "@mui/icons-material";

const IndexPage = (props: PageProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navigation />
      <Container sx={{ mt: 8 }}>
        <Grid2 container spacing={4}>
          <Grid2
            item
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h2" gutterBottom>
              Steady Profit & Trading Guidance
            </Typography>
            <Typography gutterBottom>
              AlphaTradeZone will help you grow in the trading world! Take our
              hand and let’s get started!
            </Typography>
            <Box display={"flex"} sx={{ alignItems: "center" }}>
              <Button variant="contained">Join Premium</Button>
              <Fab
                size="small"
                elevation={0}
                sx={{ ml: 4, mr: 1, boxShadow: "none" }}
                color="secondary"
              >
                <PlayArrow sx={{ color: "white" }} />
              </Fab>
              <Typography>How it works {">"}</Typography>
            </Box>
          </Grid2>
          <Grid2 item sm={6}>
            <Phones />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default IndexPage;
