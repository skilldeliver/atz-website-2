import { Box } from "@mui/material";
import * as React from "react";

export const GraduatonCapIcon = (props) => (
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
      d="M44 20v12M4 20l20-10 20 10-20 10L4 20Z"
    />
    <path
      stroke="#101115"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12 24v10c6 6 18 6 24 0V24"
    />
  </Box>
);
