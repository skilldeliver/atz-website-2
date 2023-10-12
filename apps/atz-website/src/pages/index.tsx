import React from "react";
import { Box, Button, Container, Fab, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import { Navigation } from "../components/Navigation";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Phones } from "../components/Phones";
import { Facebook, PlayArrow } from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";
import { HeroSection } from "../components/HeroSection";
import { KeyBenefitsSection } from "../components/KeyBenefitsSection";
import { WhyAreWeBetterSection } from "../components/WhyAreWeBetterSection";
import { StatsSection } from "../components/StatsSection";
import { WhatWeOfferSection } from "../components/WhatWeOfferSection";

const IndexPage = (props: PageProps) => (
  <Box>
    <Navigation />
    <HeroSection />
    <KeyBenefitsSection />
    <WhyAreWeBetterSection />
    <StatsSection />
    <WhatWeOfferSection />
  </Box>
);

export default IndexPage;
