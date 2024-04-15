import { Box } from "@mui/material";
import * as React from "react";

export const ClipboardSignatureIcon = (props) => (
  <Box
    component={"svg"}
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
      d="M30 4H18a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
    />
    <path
      stroke="#101115"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16 8h-4a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-1M32 8h4a4 4 0 0 1 3.46 2"
    />
    <path
      stroke="#101115"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M36.84 19.22a4.198 4.198 0 0 1 6.85 1.363 4.2 4.2 0 0 1-.91 4.577L33.9 34 26 36l1.98-7.9 8.86-8.88ZM16 36h2"
    />
  </Box>
);
