import * as React from "react";
import { Box } from "@mui/material";

export const WalletIcon = (props) => (
  <Box
    component="svg"
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      stroke="#101115"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M40 24v-8H12a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4h24v8"
    />
    <path
      stroke="#101115"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M8 12v24c0 2.2 1.8 4 4 4h28v-8"
    />
    <path
      stroke="#101115"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M36 24a4 4 0 0 0-4 4c0 2.2 1.8 4 4 4h8v-8h-8Z"
    />
  </Box>
);
