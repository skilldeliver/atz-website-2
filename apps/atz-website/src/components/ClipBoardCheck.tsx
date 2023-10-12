import * as React from "react";
import { Box } from "@mui/material";

export const ClipBoardCheck = (props) => (
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
      d="M20 2.667h-8c-.736 0-1.333.597-1.333 1.333v2.667C10.667 7.403 11.264 8 12 8h8c.737 0 1.334-.597 1.334-1.333V4c0-.736-.597-1.333-1.334-1.333Z"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.333 5.333H24A2.667 2.667 0 0 1 26.666 8v18.667A2.667 2.667 0 0 1 24 29.333H8a2.667 2.667 0 0 1-2.667-2.666V8A2.667 2.667 0 0 1 8 5.333h2.666"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 18.667 2.667 2.666L20 16"
    />
  </Box>
);
