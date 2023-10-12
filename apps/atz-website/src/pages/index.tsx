import { Box } from "@mui/material";
import { PageProps } from "gatsby";
import React from "react";
import { HeroSection } from "../components/HeroSection";
import { KeyBenefitsSection } from "../components/KeyBenefitsSection";
import { Navigation } from "../components/Navigation";
import { PricingSection } from "../components/PricingSection";
import { StatsSection } from "../components/StatsSection";
import { WhatWeOfferSection } from "../components/WhatWeOfferSection";
import { WhyAreWeBetterSection } from "../components/WhyAreWeBetterSection";

const IndexPage = (props: PageProps) => (
  <Box>
    <Navigation />
    <HeroSection />
    <KeyBenefitsSection />
    <WhyAreWeBetterSection />
    <StatsSection />
    <WhatWeOfferSection />
    <PricingSection />
  </Box>
);

export default IndexPage;
