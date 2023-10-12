import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

export const StatsSection = () => {
  return (
    <Box sx={{ bgcolor: "#1E212D", mt: 15, pt: 5, pb: 5 }}>
      <Container>
        <Grid container>
          <Grid xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  d="M8 7.5V52.5H53"
                  stroke="#BCC4E3"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48 22.5L35.5 35L25.5 25L18 32.5"
                  stroke="#BCC4E3"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Typography
                align="center"
                variant="h3"
                sx={{ ml: 1, color: "white" }}
              >
                122,300+
              </Typography>
            </Box>
            <Typography align="center" sx={{ color: "#D1D7EA" }}>
              Telegram followers using our analysis daily
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <path
                  d="M37.25 5H16C14.6739 5 13.4021 5.52678 12.4645 6.46447C11.5268 7.40215 11 8.67392 11 10V50C11 51.3261 11.5268 52.5979 12.4645 53.5355C13.4021 54.4732 14.6739 55 16 55H46C47.3261 55 48.5979 54.4732 49.5355 53.5355C50.4732 52.5979 51 51.3261 51 50V18.75L37.25 5Z"
                  stroke="#BCC4E3"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.5 5V20H50.5"
                  stroke="#BCC4E3"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M40.5 32.5L31.75 41.25L26.75 36.25L20.5 42.5"
                  stroke="#BCC4E3"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Typography
                align="center"
                variant="h3"
                sx={{ ml: 1, color: "white" }}
              >
                3,800+
              </Typography>
            </Box>
            <Typography align="center" sx={{ color: "#D1D7EA" }}>
              Discord members using our trading tools!
            </Typography>
          </Grid>
          <Grid xs={12} sm={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M12.5 50H47.5M5 10L12.5 40H47.5L55 10L40 27.5L30 10L20 27.5L5 10Z"
                  stroke="#BCC4E3"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Typography
                align="center"
                variant="h3"
                sx={{ ml: 1, color: "white" }}
              >
                1,520+
              </Typography>
            </Box>
            <Typography align="center" sx={{ color: "#D1D7EA" }}>
              Profitable signals sent to our VIP Group
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
