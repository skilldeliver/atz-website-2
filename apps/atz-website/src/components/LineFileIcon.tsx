import { Box } from "@mui/material";
import * as React from "react";

export const LineFileIcon = (props) => (
  <Box
    component={"svg"}
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
      d="M19.333 2.667H8a2.667 2.667 0 0 0-2.667 2.666v21.334A2.667 2.667 0 0 0 8 29.333h16a2.667 2.667 0 0 0 2.666-2.666V10l-7.333-7.333Z"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.667 2.667v8h8M21.334 17.333 16.667 22 14 19.333l-3.333 3.334"
    />
  </Box>
);
