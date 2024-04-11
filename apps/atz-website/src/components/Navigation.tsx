import React from "react";
import {
  AppBar,
  Backdrop,
  Box,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import { AtzLogo, AtzLogoSmall } from "../components/AtzLogo";
import { GatsbyLink, Link, ListItemButton, Button } from "gatsby-theme-material-ui";
import {
  Close,
  ExpandLess,
  ExpandMore,
  Iso,
  Menu,
  StarBorder,
} from "@mui/icons-material";

export const Navigation = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
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
                to="https://app.alphatradezone.com/"
              >
                Join Premium
              </Button>
            </Box>
            <IconButton
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer open={isOpen} anchor="top">
        <AppBar position="static" sx={{ mt: { xs: 2, sm: 3 } }}>
          <Toolbar>
            <GatsbyLink to="/">
              <AtzLogoSmall />
            </GatsbyLink>
            <Box flex={1} />
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
        >
          <ListItemButton>
            <ListItemText primary="Pricing" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Partners" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Social" sx={{ flex: "initial" }} />
            {isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Telegram" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Discord" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Twitter" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Youtube" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemText primary="Blog" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="FAQ" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
