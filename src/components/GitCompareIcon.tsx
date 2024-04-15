import { Box } from "@mui/material";
import * as React from "react";

export const GitCompareIcon = (props) => (
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
      d="M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17.333 8h4A2.667 2.667 0 0 1 24 10.667V20M14.667 24h-4A2.667 2.667 0 0 1 8 21.333V12"
    />
  </Box>
);
