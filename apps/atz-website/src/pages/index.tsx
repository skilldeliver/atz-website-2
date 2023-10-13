import { Box, Container, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import React from "react";
import { HeroSection } from "../components/HeroSection";
import { KeyBenefitsSection } from "../components/KeyBenefitsSection";
import { Navigation } from "../components/Navigation";
import { PricingSection } from "../components/PricingSection";
import { StatsSection } from "../components/StatsSection";
import { WhatWeOfferSection } from "../components/WhatWeOfferSection";
import { WhyAreWeBetterSection } from "../components/WhyAreWeBetterSection";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AtzLogoHorizontal } from "../components/AtzLogoHorizontal";
import { AtzLogo } from "../components/AtzLogo";

const IndexPage = (props: PageProps) => (
  <Box>
    <Navigation />
    <HeroSection />
    <KeyBenefitsSection />
    <WhyAreWeBetterSection />
    <StatsSection />
    <WhatWeOfferSection />
    <PricingSection />
    <Box sx={{ bgcolor: "#1E212D" }}>
      <Container>
        <Grid container pt={5} pb={5}>
          <Grid xs={12} sm={3}>
            <AtzLogo fill="white" />
          </Grid>
          <Grid xs={12} sm={3}>
            <Typography gutterBottom color="white">
              Navigation
            </Typography>
            <Typography gutterBottom color="white">
              Home
            </Typography>
            <Typography gutterBottom color="white">
              Blog
            </Typography>
            <Typography gutterBottom color="white">
              Join Premium
            </Typography>
            <Typography gutterBottom color="white">
              Contact Us
            </Typography>
            <Typography gutterBottom color="white">
              Partners
            </Typography>
            <Typography gutterBottom color="white">
              Results
            </Typography>
          </Grid>
          <Grid xs={12} sm={3}>
            <Typography gutterBottom color="white">
              Follow Us
            </Typography>
            <Typography gutterBottom color="white">
              Telegram
            </Typography>
            <Typography gutterBottom color="white">
              Discord
            </Typography>
            <Typography gutterBottom color="white">
              Discussion
            </Typography>
            <Typography gutterBottom color="white">
              YouTube
            </Typography>
            <Typography gutterBottom color="white">
              Twitter
            </Typography>
          </Grid>
          <Grid xs={12} sm={3}>
            <Typography gutterBottom color="white">
              Privacy
            </Typography>
            <Typography gutterBottom color="white">
              Privacy Policy
            </Typography>
            <Typography gutterBottom color="white">
              Terms of Service
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box sx={{ bgcolor: "#252937" }}>
      <Container sx={{ pt: 2.5, pb: 2.5 }}>
        <Grid container>
          <Grid xs={12} sm={3}>
            <Typography color="white">© 2023 AlphaTradeZone.</Typography>
            <Typography color="white">All rights reserved.</Typography>
          </Grid>
          <Grid xs={12} sm={9}>
            <Typography color="white">
              Your trading decisions are your responsibility. Investing in
              Cryptocurrenices involves substancial risk of loss and may not be
              suitable for all investors risk profiles. Trading such assets is
              risky and requires previous knowledge in market movements, it may
              results in a loss of a portion or your entire trading portfolio.
              We are not to be held liable of any loss or damage on the account
              which has resulted from you acting or not acting on any of our
              publications.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
);

export default IndexPage;
