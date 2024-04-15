import { PlayArrow } from "@mui/icons-material";
import { Box, Container, Fab, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { YoutubeLogo } from "./YoutubeLogo";
import { TelegramLogo } from "./TelegramLogo";
import { DiscordLogo } from "./DiscordLogo";
import { FacebookLogo } from "./FacebookLogo";
import { Button } from "gatsby-theme-material-ui"

export const HeroSection = () => (
  <Container sx={{ mt: { xs: 2, sm: 10 } }}>
    <Grid container>
      <Grid
        xs={12}
        sm={6}
        sx={{
          justifyContent: "center",
          display: { xs: "flex", sm: "none" },
          mb: 1.5,
        }}
      >
        <StaticImage src="../phones.svg" width={184} alt="phones" />
      </Grid>
      <Grid
        xs={12}
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
        <Typography sx={{ mb: 3 }}>
          AlphaTradeZone will help you grow in the trading world! Take our hand
          and let’s get started!
        </Typography>
        <Box
          display={"flex"}
          sx={{
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Button
            variant="contained"
            sx={{ width: { xs: "100%", sm: "initial" } }}
            size="large"
            to="https://app.alphatradezone.com/"
          >
            Join Premium
          </Button>
          <Button
            variant="outlined"
            startIcon={<PlayArrow />}
            size="large"
            sx={{
              ml: { xs: 0, sm: 4 },
              mt: { xs: 1, sm: 0 },
              width: { xs: "100%", sm: "initial" },
            }}
          >
            How it works
          </Button>
        </Box>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        sx={{
          justifyContent: "center",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <StaticImage src="../phones.svg" alt="phones" />
      </Grid>
      <Grid xs={12} sx={{ display: { xs: "none", sm: "block" } }} mt={8}>
        <YoutubeLogo mr={2} />
        <TelegramLogo mr={2} />
        <DiscordLogo mr={2} />
        <FacebookLogo />
      </Grid>
      <Box
        mt={{ xs: 2, sm: 5 }}
        sx={{
          width: "100%",
          height: 2,
          background:
            "linear-gradient(270deg, #EFF3FF 0%, #D7DDF4 22.92%, rgba(215, 221, 244, 0.39) 71.4%, rgba(239, 243, 255, 0.00) 100%)",
        }}
      />
    </Grid>
  </Container>
);
