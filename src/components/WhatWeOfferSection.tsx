import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { WalletIcon } from "./WalletIcon";
import { GraduatonCapIcon } from "./GraduationCapIcon";
import { ClipboardSignatureIcon } from "./ClipboardSignatureIcon";

export const WhatWeOfferSection = () => {
  return (
    <Container sx={{ mt: 15, mb: 15 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        What we offer
      </Typography>
      <Box
        sx={{
          borderRadius: "16px",
          border: "1px solid #A0B1EC",
          background:
            "linear-gradient(143deg, rgba(188, 198, 234, 0.50) 13.98%, rgba(230, 234, 250, 0.50) 76.27%)",

          backdropFilter: "blur(19px)",
        }}
      >
        <Grid container p={4}>
          <Grid xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WalletIcon />
            </Box>
            <Typography
              align="center"
              fontWeight={"bold"}
              variant="h5"
              gutterBottom
            >
              Profitable trades
            </Typography>
            <Typography>
              Longterm profitability of our signals is ensured through:
              <ul>
                <li>Backtested proven trading strategies</li>
                <li>Strict risk management of every call</li>
                <li>Cherrypicking ONLY the best trading opportunities</li>
              </ul>
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GraduatonCapIcon />
            </Box>
            <Typography
              align="center"
              fontWeight={"bold"}
              variant="h5"
              gutterBottom
            >
              Education
            </Typography>
            <Typography gutterBottom>
              For beginners – get started guides
            </Typography>
            <Typography gutterBottom>
              For intermediate traders
              <ul>
                <li>Technical analysis</li>
              </ul>
            </Typography>
            <Typography>
              For advanced traders:{" "}
              <ul>
                <li>
                  Risk management tools Best ATZ trading strategies, Price
                  action concepts, indicators, TRICKS you won’t find anywhere
                  else
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ClipboardSignatureIcon />
            </Box>
            <Typography
              align="center"
              fontWeight={"bold"}
              variant="h5"
              gutterBottom
            >
              Guidance
            </Typography>
            <Typography gutterBottom>
              We are open to questions 24/7 in the chat.
            </Typography>
            <Typography gutterBottom>
              Seek help about your position, ASK!
            </Typography>
            <Typography>
              Need portfolio advise
              <ul>
                <li>
                  we will help! Anything trading related we are at your service!
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
