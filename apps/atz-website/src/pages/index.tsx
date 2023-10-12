import React from "react";
import { Box, Button, Container, Fab, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import { Navigation } from "../components/Navigation";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Phones } from "../components/Phones";
import {
  Check,
  CheckCircle,
  CheckOutlined,
  Facebook,
  PlayArrow,
} from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";
import { HeroSection } from "../components/HeroSection";
import { KeyBenefitsSection } from "../components/KeyBenefitsSection";
import { WhyAreWeBetterSection } from "../components/WhyAreWeBetterSection";
import { StatsSection } from "../components/StatsSection";
import { WhatWeOfferSection } from "../components/WhatWeOfferSection";

const PricingTable = ({ title, subtitle, price, options = [] }) => (
  <Box sx={{ bgcolor: "#E5EBFE", borderRadius: "7px" }}>
    <Box>
      <Box pt={3} mb={2}>
        <Typography variant="h4" align="center">
          {title}
        </Typography>
        <Typography align="center">{subtitle}</Typography>
      </Box>{" "}
      {[...options, ...Array.from({ length: 10 - options.length })].map(
        (i, index) => (
          <Box
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              height: 44,
              bgcolor: index % 2 === 0 ? "#d6dcfa" : "transparent",
              pl: 2,
              pr: 2,
              display: { xs: !i ? "none" : "flex", sm: "flex" },
            }}
          >
            {i && (
              <>
                {i}
                <CheckCircle color="success" />
              </>
            )}
          </Box>
        )
      )}
    </Box>
    <Box sx={{ height: 2, bgcolor: "#BCC4E3" }} />
    <Box p={3.5}>
      <Typography
        variant="h4"
        display={"flex"}
        justifyContent={"center"}
        fontWeight={"bold"}
      >
        <Typography
          component={"span"}
          alignSelf={"start"}
          fontWeight={"bold"}
          mr={1}
        >
          BTC
        </Typography>
        {price}
      </Typography>
      <Button variant="contained" size="large" fullWidth>
        JOIN now
      </Button>
    </Box>
  </Box>
);

const monthlyOptions = [
  "Daily BTC analysis",
  "FX and Commodities TA",
  "Portfolio management",
  "Premium crypto signals",
  "Automated Trading (Cornix)",
  "Price action training course",
];

const fullOptions = [
  ...monthlyOptions,
  "Advanced Mentorship course",
  "1 to 1 coaching&mentoring",
  "LIFETIME access to all ATZ services",
  "Exclusive VIP chat room",
];
const IndexPage = (props: PageProps) => (
  <Box>
    <Navigation />
    <HeroSection />
    <KeyBenefitsSection />
    <WhyAreWeBetterSection />
    <StatsSection />
    <WhatWeOfferSection />
    <Container>
      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        Premium
      </Typography>
      <Grid container sx={{ mb: 5 }} spacing={4}>
        <Grid xs={12} sm={3}></Grid>
        <Grid xs={12} sm={3}>
          <PricingTable
            title="Montly"
            subtitle="Try out our service for a month"
            price="0.0033"
            options={monthlyOptions}
          />
        </Grid>
        <Grid xs={12} sm={3}>
          <PricingTable
            title="3 Month"
            subtitle="Increased duration LOWER PRICE"
            price="0.01"
            options={fullOptions}
          />
        </Grid>
        <Grid xs={12} sm={3}>
          <PricingTable
            title="Lifetime"
            subtitle="ONE TIME PAYMENT"
            price="0.06"
            options={fullOptions}
          />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default IndexPage;
