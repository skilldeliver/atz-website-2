import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { ChipIcon } from "./ChipIcon";
import { AlarmClockIcon } from "./AlarmClockIcon";
import { ShieldIcon } from "./ShieldIcon";
import { LineFileIcon } from "./LineFileIcon";
import { Button } from "gatsby-theme-material-ui"

export const KeyBenefitsSection = () => {
  return (
    <Container sx={{ mt: { xs: 6, sm: 12 } }}>
      <Grid container>
        <Grid xs={12} sm={5}>
          <Typography sx={{ color: "primary.main" }}>
            AlphaTradeZone®
          </Typography>
          <Typography variant="h3">Key benefints</Typography>
        </Grid>
        <Grid xs={12} sm={7}>
          <Typography mb={3}>
            We created AlphaTradeZone® in 2017. Our mission is to SAVE TIME and
            EFFORT to novice and advanced crypto traders and help boosting
            PROFITS and CONSISTENCY of results.
          </Typography>
          <Typography variant="h4" mb={2.5}>
            How do we achieve results?
          </Typography>
          {[
            {
              title: "Razor fast updates on market shifting news",
              icon: (
                <AlarmClockIcon
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
            {
              title: "Battle tested Technical Analysis edge",
              icon: (
                <ShieldIcon
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
            {
              title: "Disciplined risk management",
              icon: (
                <LineFileIcon
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
          ].map((i) => (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
              <Box sx={{ position: "relative", width: 48, height: 48 }}>
                <ChipIcon />
                {i.icon}
              </Box>
              <Typography sx={{ ml: 1.5 }}>{i.title}</Typography>
            </Box>
          ))}
          <Button
            variant="contained"
            sx={{ mt: { xs: 0, sm: 3 }, width: { xs: "100%", sm: "initial" } }}
            size="large"
            to="https://app.alphatradezone.com/"
          >
            Join Premium
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
