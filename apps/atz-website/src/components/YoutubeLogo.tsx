import { Box } from "@mui/material";
import * as React from "react";

export const YoutubeLogo = (props) => (
  <Box
    component={"svg"}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#EA3323"
      d="M22.057 6.945a2.625 2.625 0 0 0-1.852-1.853C18.57 4.65 12 4.65 12 4.65s-6.57 0-8.205.442a2.625 2.625 0 0 0-1.853 1.853A27.098 27.098 0 0 0 1.5 12c-.011 1.695.137 3.387.442 5.055a2.625 2.625 0 0 0 1.853 1.852C5.43 19.35 12 19.35 12 19.35s6.57 0 8.205-.443a2.625 2.625 0 0 0 1.852-1.852A27.1 27.1 0 0 0 22.5 12a27.1 27.1 0 0 0-.443-5.055ZM9.9 15.15v-6.3L15.352 12 9.9 15.15Z"
    />
  </Box>
);
