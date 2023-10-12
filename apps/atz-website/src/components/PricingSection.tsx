import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { PricingTable } from "./PricingTable";

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

export const PricingSection = () => (
  <Container>
    <Typography variant="h3" align="center" sx={{ mb: 5 }}>
      Premium
    </Typography>
    <Box sx={{ position: "relative" }}>
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
      <Box
        sx={{
          position: "absolute",
          top: 120,
          left: 0,
          width: "100%",
          zIndex: -1,
          display: { xs: "none", sm: "block" },
        }}
      >
        {fullOptions.map((i, index) => (
          <Box
            sx={{
              bgcolor: "red",
              height: 44,
              bgcolor: index % 2 === 0 ? "#d6dcfa" : "transparent",
              display: "flex",
              alignItems: "center",
              pl: 2,
            }}
          >
            {i}
          </Box>
        ))}
      </Box>
    </Box>
  </Container>
);
