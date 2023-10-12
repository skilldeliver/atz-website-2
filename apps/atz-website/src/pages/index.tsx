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

const IndexPage = (props: PageProps) => (
  <Box sx={{ position: "relative" }}>
    <Navigation />
    <HeroSection />
    <KeyBenefitsSection />
    <Container sx={{ mt: 8 }}>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} sm={6}>
          <Typography variant="h3" gutterBottom>
            5 Reasons why we are better
          </Typography>
          <Typography variant="h5" gutterBottom>
            Don’t like reading? Watch the video!
          </Typography>
          <Box
            sx={{ height: 336, backgroundColor: "black", width: "100%" }}
          ></Box>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          {[
            {
              title: "Proven track record",
              body: "All our trades since 2017 can be verified. Every.Single.Trade.",
            },
            {
              title: "LIVE trade management",
              body: "After we fire a signal, our best trader is managing it live to ensure maximum profit and eliminate risk ASAP. This is valid for EVERY trade. Usually crypto signal groups just forget about the trade after they give you a signal. We are in a league of our own.",
            },
            {
              title: "We NEVER stopped learning. It’s a lifelong process",
              body: "We keep exploring new and better approaches to trading to ensure higher quality signals. Our skill has immensely improved in time. Markets are more competitive so improving is key to consistency.",
            },
            {
              title: "Hedged trading strategies",
              body: "We incorporate diversified approach to trading. Some strategies perform better in different market conditions, that’s how we ensure lower risk exposure, less drawdowns and consistent performance.",
            },
            {
              title: "Personal approach",
              body: "Having an individual issue? We are open to discuss personal issues/struggles/obstacles. Our goal is to help EACH and every one of you.",
            },
          ].map((i) => (
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box sx={{ width: 48, height: 48 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g filter="url(#filter0_b_136_62)">
                    <circle
                      cx="24"
                      cy="24"
                      r="24"
                      fill="url(#paint0_linear_136_62)"
                      fill-opacity="0.5"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="23.3004"
                      stroke="url(#paint1_linear_136_62)"
                      stroke-opacity="0.5"
                      stroke-width="1.39925"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_136_62"
                      x="-39.1791"
                      y="-39.1791"
                      width="126.358"
                      height="126.358"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="19.5896"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_136_62"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_136_62"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_136_62"
                      x1="15.6716"
                      y1="-5.38449e-07"
                      x2="40.7635"
                      y2="33.4978"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A0B1EC" />
                      <stop offset="1" stop-color="#DAE0F9" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_136_62"
                      x1="36.5"
                      y1="43.5"
                      x2="3.74502"
                      y2="21.4312"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#C8D1EE" />
                      <stop offset="1" stop-color="#E6EAFA" />
                    </linearGradient>
                  </defs>
                </svg>
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography fontWeight={"bold"} gutterBottom>
                  {i.title}
                </Typography>
                <Typography>{i.body}</Typography>
              </Box>
            </Box>
          ))}
        </Grid2>
        <Grid2 item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained">Join Premium</Button>
        </Grid2>
      </Grid2>
    </Container>

    <Box sx={{ bgcolor: "#1E212D", mt: 15, pt: 5, pb: 5 }}>
      <Container>
        <Grid2 container>
          <Grid2 item xs={12} sm={4}>
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
          </Grid2>
          <Grid2 item xs={12} sm={4}>
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
          </Grid2>
          <Grid2 item xs={12} sm={4}>
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
          </Grid2>
        </Grid2>
      </Container>
    </Box>

    {/* <Container>
          <Grid2 container>
            <Grid2 item xs={12} sm={6}>
              asd
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              asd
            </Grid2>
          </Grid2>
        </Container> */}
  </Box>
);

export default IndexPage;
