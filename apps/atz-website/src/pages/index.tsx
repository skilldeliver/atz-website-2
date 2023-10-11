import React from "react";
import { Box, Button, Container, Fab, Typography } from "@mui/material";
import { PageProps } from "gatsby";
import { Navigation } from "../components/Navigation";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Phones } from "../components/Phones";
import { Facebook, PlayArrow } from "@mui/icons-material";
import { StaticImage } from "gatsby-plugin-image";
import { HeroSection } from "../components/HeroSection";

const IndexPage = (props: PageProps) => (
  <Box sx={{ position: "relative" }}>
    <Navigation />
    <HeroSection />
    {/* <Container sx={{ mt: 8 }}>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12}>
          <svg
            style={{ marginRight: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22.0571 6.94499C21.9376 6.50102 21.7036 6.09623 21.3785 5.77112C21.0534 5.44601 20.6486 5.212 20.2046 5.09249C18.5696 4.64999 11.9996 4.64999 11.9996 4.64999C11.9996 4.64999 5.42959 4.64999 3.79459 5.09249C3.35062 5.212 2.94582 5.44601 2.62071 5.77112C2.29561 6.09623 2.06159 6.50102 1.94209 6.94499C1.6368 8.61244 1.48865 10.3049 1.49959 12C1.48865 13.6951 1.6368 15.3875 1.94209 17.055C2.06159 17.499 2.29561 17.9038 2.62071 18.2289C2.94582 18.554 3.35062 18.788 3.79459 18.9075C5.42959 19.35 11.9996 19.35 11.9996 19.35C11.9996 19.35 18.5696 19.35 20.2046 18.9075C20.6486 18.788 21.0534 18.554 21.3785 18.2289C21.7036 17.9038 21.9376 17.499 22.0571 17.055C22.3624 15.3875 22.5105 13.6951 22.4996 12C22.5105 10.3049 22.3624 8.61244 22.0571 6.94499ZM9.89959 15.15V8.84999L15.3521 12L9.89959 15.15Z"
              fill="#EA3323"
            />
          </svg>
          <svg
            style={{ marginRight: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
              fill="url(#paint0_linear_61_24)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_61_24"
                x1="12"
                y1="2"
                x2="12"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6ABCF5" />
                <stop offset="1" stop-color="#3E8BCA" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            style={{ marginRight: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.2701 5.32998C17.9401 4.70998 16.5001 4.25998 15.0001 3.99998C14.987 3.99956 14.9739 4.00203 14.9618 4.00722C14.9497 4.0124 14.9389 4.02017 14.9301 4.02999C14.7501 4.35999 14.5401 4.78998 14.4001 5.11998C12.8091 4.87998 11.1911 4.87998 9.60012 5.11998C9.46012 4.77998 9.25012 4.35999 9.06012 4.02999C9.05012 4.00999 9.02012 3.99998 8.99012 3.99998C7.49012 4.25998 6.06012 4.70998 4.72012 5.32998C4.71012 5.32998 4.70012 5.33998 4.69012 5.34998C1.97012 9.41998 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.83998 19.3101 5.34998C19.3001 5.33998 19.2901 5.32998 19.2701 5.32998ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z"
              fill="#747BEF"
            />
          </svg>
          <svg
            style={{ marginRight: 20 }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
              fill="#3975EB"
            />
          </svg>
        </Grid2>
        <Grid2 item xs={12}>
          <Box
            sx={{
              width: "100%",
              height: 2,
              background:
                "linear-gradient(270deg, #EFF3FF 0%, #D7DDF4 22.92%, rgba(215, 221, 244, 0.39) 71.4%, rgba(239, 243, 255, 0.00) 100%)",
            }}
          />
        </Grid2>
        <Grid2 item xs={12} sm={5}>
          <Typography sx={{ color: "primary.main" }}>
            AlphaTradeZone®
          </Typography>
          <Typography variant="h3">Key benefints</Typography>
        </Grid2>
        <Grid2 item xs={12} sm={7}>
          <Typography gutterBottom>
            We created AlphaTradeZone® in 2017. Our mission is to SAVE TIME and
            EFFORT to novice and advanced crypto traders and help boosting
            PROFITS and CONSISTENCY of results.
          </Typography>
          <Typography variant="h4" gutterBottom>
            How do we achieve results?
          </Typography>
          {[
            "Razor fast updates on market shifting news",
            "Battle tested Technical Analysis edge",
            "Disciplined risk management",
          ].map((i) => (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
              <Typography sx={{ ml: 2 }}>{i}</Typography>
            </Box>
          ))}
          <Button variant="contained">Join Premium</Button>
        </Grid2>
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
    </Container> */}

    {/* <Box sx={{ bgcolor: "#1E212D", mt: 15, pt: 5, pb: 5 }}>
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
    </Box> */}

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
