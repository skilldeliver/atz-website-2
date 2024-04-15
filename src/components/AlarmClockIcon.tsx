import { Box } from "@mui/material";
import * as React from "react";

export const AlarmClockIcon = (props) => (
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
      d="M28 5.322v5.334h-5.333"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 15.99a12 12 0 0 1 20-8.934l4 3.6M4 26.656v-5.334h5.333"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 16a12 12 0 0 1-20 8.933l-4-3.6"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 10.656v5.333l2.667 2.667"
    />
  </Box>
);
