import { Box } from "@mui/material";
import * as React from "react";

export const BookOpenIcon = (props) => (
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
      d="M2.667 4h8A5.333 5.333 0 0 1 16 9.333V28a4 4 0 0 0-4-4H2.667V4ZM29.333 4h-8A5.333 5.333 0 0 0 16 9.333V28a4 4 0 0 1 4-4h9.333V4Z"
    />
  </Box>
);
