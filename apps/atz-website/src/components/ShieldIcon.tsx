import { Box } from "@mui/material";
import * as React from "react";

export const ShieldIcon = (props) => (
  <Box
    component="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 29.333S26.666 24 26.666 16V6.667L16 2.667l-10.667 4V16C5.333 24 16 29.333 16 29.333Z"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.334 13.333 16.667 18 14 15.333l-3.333 3.334"
    />
  </Box>
);
