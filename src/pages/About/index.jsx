import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
// import "./App.css";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Asosiy from "../../components/Asosiy";

import AboutC from "../../components/AboutC";

const drawerWidth = 320;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider sx={{ marginTop: "-65px" }} />
      <List sx={{ backgroundColor: "#00CCCC", height: "180vh" }}>
        <div className="flex justify-center pt-[100px]">
          <div className="w-[70px] h-[70px] bg-white flex justify-center items-center rounded-full">
            <FaTimes size={"30px"} color="#00CCCC" />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-white text-[40px] mt-2">Xtra Blog</p>
        </div>
        <nav className="tm-nav  mt-[120px]" id="tm-nav">
          <div className="px-[20px]">
            <div className=" hover:w-[313px] w-[313px] hover:border hover:border-white h-[77px] pt-[10px]">
              <Link to={"/"} className="tm-nav-item pt-[-20px] ">
                <a href="index.html" className="tm-nav-link">
                  <i class="fas fa-home"></i>
                  Blog Home
                </a>
              </Link>
              ы
            </div>
            <div className="h-[30px]"></div>
            <div className=" hover:w-[313px] w-[313px] hover:border hover:border-white h-[77px] pt-[10px]">
              <Link to={"/singlepost"} className="tm-nav-item pt-[-20px] ">
                <a href="index.html" className="tm-nav-link">
                  <i class="fas fa-pen"></i>
                  Single Post
                </a>
              </Link>
            </div>
            <div className="h-[30px]"></div>
            <div className="hover:border hover:border-white hover:w-[313px] w-[313px] border border-white h-[77px] pt-[10px]">
              <NavLink to={"/about"} className="tm-nav-item pt-[-20px] ">
                <a href="index.html" className="tm-nav-link">
                  <i class="fas fa-users"></i>
                  About Xtra
                </a>
              </NavLink>
            </div>
            <div className="h-[30px]"></div>
            <div className=" hover:w-[313px] w-[313px] hover:border hover:border-white h-[77px] pt-[10px]">
              <Link to={"/contact"} className="tm-nav-item pt-[-20px] ">
                <a href="index.html" className="tm-nav-link">
                  <i class="far fa-comments"></i>
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
        <div className="tm-social-links xl:grid xl:gap-1 lg:grid lg:grid-cols-4 md:grid md:grid-cols-4 grid grid-cols-4 px-[40px] xl:grid-cols-4 gap-3">
          <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center bg-white text-[#00CCCC]">
            <BsFacebook />
          </div>
          <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center  bg-white text-[#00CCCC]">
            <AiOutlineTwitter />
          </div>
          <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center  bg-white text-[#00CCCC]">
            <AiFillYoutube />
          </div>
          <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center  bg-white text-[#00CCCC]">
            <AiOutlineInstagram />
          </div>
        </div>
        <p className="text-[21px] text-white px-[33px] mt-28">
          Xtra Blog is a multi-purpose HTML template from TemplateMo website.
          Left side is a sticky menu bar. Right side content will scroll up and
          down.
        </p>
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="Scroll"
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar sx={{ boxShadow: false }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: "none" },
              color: "white ",
              backgroundColor: "#00CCCC",
              borderRadius: "1px",
              marginLeft: "-25px",
              width: "50px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <AboutC />
        </Typography>
        <Typography sx={{ width: "100%" }} paragraph></Typography>
      </Box>
    </Box>
  );
}
