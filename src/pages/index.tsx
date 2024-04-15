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
          <Grid xs={6} sm={3}>
            <Typography
              color="#D6DFFA"
              textTransform="uppercase"
              fontWeight={700}
              fontSize={14}
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              Navigation
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Home
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Blog
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Join Premium
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Contact Us
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Partners
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Results
            </Typography>
          </Grid>
          <Grid xs={6} sm={3}>
            <Typography
              color="#D6DFFA"
              textTransform="uppercase"
              fontWeight={700}
              fontSize={14}
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              Follow Us
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Telegram
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Discord
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Discussion
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              YouTube
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Twitter
            </Typography>
          </Grid>
          <Grid xs={6} sm={3}>
            <Typography
              color="#D6DFFA"
              textTransform="uppercase"
              fontWeight={700}
              fontSize={14}
              sx={{ mb: { xs: 2, sm: 3 } }}
            >
              Privacy
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
              Privacy Policy
            </Typography>
            <Typography sx={{ mb: { xs: 2, sm: 3 } }} color="#D6DFFA">
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
            <Typography fontSize={12} color="#999999" sx={{ mb: 2 }}>
              © 2023 AlphaTradeZone. All rights reserved.
            </Typography>
          </Grid>
          <Grid xs={12} sm={9}>
            <Typography fontSize={12} color="#D6DFFA">
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
