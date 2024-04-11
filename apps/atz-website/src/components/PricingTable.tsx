import { CheckCircle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "gatsby-theme-material-ui"

export const PricingTable = ({ title, subtitle, price, options = [] }) => (
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
              justifyContent: { xs: "space-between", sm: "center" },
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
                <Box sx={{ display: { xs: "block", sm: "none" } }}>{i}</Box>
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
      <Button variant="contained" size="large" fullWidth to="https://app.alphatradezone.com/">
        JOIN now
      </Button>
    </Box>
  </Box>
);
