import { Box } from "@mui/material";
import * as React from "react";

export const FileSearchIcon = (props) => (
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
      d="M5.333 29.333H24a2.667 2.667 0 0 0 2.666-2.666V10l-7.333-7.333H8a2.667 2.667 0 0 0-2.667 2.666v4"
    />
    <path
      stroke="#12266E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.667 2.667v8h8M6.667 22.667a3.999 3.999 0 0 0 2.828-6.829 4 4 0 1 0-2.828 6.829v0ZM12 24l-2-2"
    />
  </Box>
);
