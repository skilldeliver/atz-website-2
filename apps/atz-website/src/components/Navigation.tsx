import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import { AtzLogo, AtzLogoSmall } from "../components/AtzLogo";
import { GatsbyLink, Link } from "gatsby-theme-material-ui";
import { Menu } from "@mui/icons-material";

export const Navigation = () => (
  <AppBar position="static" sx={{ mt: { xs: 2, sm: 3 } }}>
    <Toolbar>
      <Container sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <GatsbyLink to="/">
            <AtzLogo />
          </GatsbyLink>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <GatsbyLink to="/">
            <AtzLogoSmall />
          </GatsbyLink>
        </Box>
        <Box flex={1} />

        <Link to="/" sx={{ mr: 5, display: { xs: "none", sm: "block" } }}>
          Pricing
        </Link>
        <Link to="/" sx={{ mr: 5, display: { xs: "none", sm: "block" } }}>
          Partners
        </Link>
        <Link to="/" sx={{ mr: 5, display: { xs: "none", sm: "block" } }}>
          Results
        </Link>
        <Link to="/" sx={{ mr: 5, display: { xs: "none", sm: "block" } }}>
          Social
        </Link>
        <Link to="/" sx={{ mr: 5, display: { xs: "none", sm: "block" } }}>
          Blog
        </Link>
        <Link to="/" sx={{ display: { xs: "none", sm: "block" } }}>
          FAQ
        </Link>
        <Box flex={1} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{ mr: 4, display: { xs: "none", sm: "block" } }}
            color="secondary"
          >
            Contact Us
          </Button>
          <Button
            variant="contained"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Join Premium
          </Button>
        </Box>
        <IconButton sx={{ display: { xs: "block", sm: "none" } }}>
          <Menu />
        </IconButton>
      </Container>
    </Toolbar>
  </AppBar>
);
