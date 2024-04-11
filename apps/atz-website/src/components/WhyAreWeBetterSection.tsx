import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Button } from "gatsby-theme-material-ui";
import React from "react";
import { ChipIcon } from "./ChipIcon";
import { ClipBoardCheck } from "./ClipBoardCheck";
import { FilePieChartIcon } from "./FilePieChartIcon";
import { BookOpenIcon } from "./BookOpenIcon";
import { FileSearchIcon } from "./FileSearchIcon";
import { GitCompareIcon } from "./GitCompareIcon";

export const WhyAreWeBetterSection = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container spacing={4}>
        <Grid xs={12} sm={6}>
          <Typography variant="h3" gutterBottom>
            5 Reasons why we are better
          </Typography>
          <Typography variant="h5" gutterBottom>
            Don’t like reading? Watch the video!
          </Typography>
          <Box
            component={"iframe"}
            width="100%"
            height={{ xs: 154, sm: 315 }}
            src="https://www.youtube.com/embed/20wbhfx8Z8E?si=N4Guo8g1A6mASqVA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></Box>
        </Grid>
        <Grid xs={12} sm={6}>
          {[
            {
              title: "Proven track record",
              body: "All our trades since 2017 can be verified. Every.Single.Trade.",
              icon: (
                <ClipBoardCheck
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
            {
              title: "LIVE trade management",
              body: "After we fire a signal, our best trader is managing it live to ensure maximum profit and eliminate risk ASAP. This is valid for EVERY trade. Usually crypto signal groups just forget about the trade after they give you a signal. We are in a league of our own.",
              icon: (
                <FilePieChartIcon
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
            {
              title: "We NEVER stopped learning. It’s a lifelong process",
              body: "We keep exploring new and better approaches to trading to ensure higher quality signals. Our skill has immensely improved in time. Markets are more competitive so improving is key to consistency.",
              icon: (
                <BookOpenIcon
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
            {
              title: "Hedged trading strategies",
              body: "We incorporate diversified approach to trading. Some strategies perform better in different market conditions, that’s how we ensure lower risk exposure, less drawdowns and consistent performance.",
              icon: (
                <FileSearchIcon
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
            {
              title: "Personal approach",
              body: "Having an individual issue? We are open to discuss personal issues/struggles/obstacles. Our goal is to help EACH and every one of you.",
              icon: (
                <GitCompareIcon
                  sx={{
                    position: "absolute",
                    left: "calc(50% - 16px)",
                    top: "calc(50% - 16px)",
                  }}
                />
              ),
            },
          ].map((i) => (
            <Box sx={{ display: "flex", mb: 3 }}>
              <Box sx={{ position: "relative", width: 48, height: 48 }}>
                <ChipIcon />
                {i.icon}
              </Box>
              <Box sx={{ ml: 2 }}>
                <Typography fontWeight={"bold"} gutterBottom>
                  {i.title}
                </Typography>
                <Typography>{i.body}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>
        <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" size="large" to="https://app.alphatradezone.com/">
            Join Premium
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
