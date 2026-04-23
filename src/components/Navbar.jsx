import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import useMediaQuery from "@mui/material/useMediaQuery";

const PHONE_NUMBER = "919800000000"; // E.164 format without '+' for WhatsApp
const EMAIL = "doctor@email.com";

const patientLinks = [
  "Arthroscopy",
  "Meniscus Injury of Knee",
  "ACL Injury of Knee",
  "PCL Injury of Knee",
  "Footballer's Ankle",
  "Frozen Shoulder",
];

const patientRoutes = [
  "/patients/arthroscopy",
  "/patients/meniscus-injury",
  "/patients/acl-injury",
  "/patients/pcl-injury",
  "/patients/footballers-ankle",
  "/patients/frozen-shoulder",
];

const navBtnStyle = {
  fontFamily: "'DM Sans', sans-serif",
  color: "#333",
  fontWeight: 500,
  fontSize: "0.95rem",
  textTransform: "none",
  "&:hover": { color: "#25D366", background: "transparent" },
};

const contactStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.82rem",
  color: "#555",
  fontFamily: "'DM Sans', sans-serif",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.2s",
};

const listItemStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 500,
  color: "#333",
};

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobilePatientOpen, setMobilePatientOpen] = useState(false);

  const dropdownOpen = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const location = useLocation();

  const handlePatientClick = (route) => {
    setAnchorEl(null);
    setDrawerOpen(false);
    navigate(route);
  };

  const handleAppointmentClick = () => {
    if (location.pathname === "/") {
      document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Shared contact info block
  const ContactInfo = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>

    {/* WhatsApp */}
    <a
      href={`https://wa.me/${PHONE_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      style={contactStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
    >
      <FaWhatsapp style={{ color: "#25D366", marginRight: 6, fontSize: "1rem" }} />
      +91 98XXXXXXXX
    </a>

    {/* Email */}
    <a
      href={`mailto:${EMAIL}`}
      style={contactStyle}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
    >
      <FiMail style={{ color: "#25D366", marginRight: 6 }} />
      {EMAIL}
    </a>

  </div>
);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "white",
          borderBottom: "1px solid #f0f0f0",
          px: { xs: 2, md: 4 },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>

          
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{
              fontFamily: "'Playfair Display', serif",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              background: "#11dbe2",
              padding: "8px 16px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              letterSpacing: "0.3px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
           
            Dr. Kaustubh Kale
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <Button onClick={() => navigate("/")} sx={navBtnStyle}>Home</Button>

                <Button
                  sx={navBtnStyle}
                  endIcon={dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  For Patients
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={dropdownOpen}
                  onClose={() => setAnchorEl(null)}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      borderRadius: "10px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      minWidth: "220px",
                    },
                  }}
                >
                  {patientLinks.map((item, i) => (
                    <MenuItem
                      key={i}
                      onClick={() => handlePatientClick(patientRoutes[i])}
                      sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        color: "#444",
                        "&:hover": { color: "#25D366", background: "#f0fdf4" },
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Menu>

                <Button onClick={() => navigate("/gallery")} sx={navBtnStyle}>Gallery</Button>
                <Button onClick={handleAppointmentClick} sx={navBtnStyle}>Appointment</Button>
              </div>

              <ContactInfo />
            </>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: "#111" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, pt: 2 } }}
      >
        <List>
          <ListItem button onClick={() => { navigate("/"); setDrawerOpen(false); }}>
            <ListItemText primary="Home" primaryTypographyProps={{ sx: listItemStyle }} />
          </ListItem>

          <ListItem button onClick={() => setMobilePatientOpen((v) => !v)}>
            <ListItemText primary="For Patients" primaryTypographyProps={{ sx: listItemStyle }} />
            {mobilePatientOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={mobilePatientOpen} timeout="auto" unmountOnExit>
            <List disablePadding>
              {patientLinks.map((item, i) => (
                <ListItem key={i} button onClick={() => handlePatientClick(patientRoutes[i])} sx={{ pl: 4 }}>
                  <ListItemText primary={item} primaryTypographyProps={{ sx: { fontSize: "0.85rem", color: "#666" } }} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          <ListItem button onClick={() => { navigate("/gallery"); setDrawerOpen(false); }}>
            <ListItemText primary="Gallery" primaryTypographyProps={{ sx: listItemStyle }} />
          </ListItem>
          <ListItem button onClick={() => { handleAppointmentClick(); setDrawerOpen(false); }}>
            <ListItemText primary="Appointment" primaryTypographyProps={{ sx: listItemStyle }} />
          </ListItem>

          {/* Clickable contact in drawer */}
          <ListItem sx={{ mt: 2, flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
            <ContactInfo />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}