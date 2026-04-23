import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import mahaMap from "../assets/mapMah.jpg";
import Footer from "./Footer";
import "./Appointment.css";

const locations = [
  {
    name: "",
    address: "VIJAYA MULTISPECIALITY HOSPITAL 59, Mankapur Ring Rd, Deendayal Nagar440022",
    extra: "Near XYZ Landmark",
    timing: "Monday and Friday – 4 PM to 6 PM",
  }
];

const iconBox = {
  borderRadius: "50%",
  background: "#0ab5c8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export default function Appointment() {
  return (
    <>
      {/* APPOINTMENT SECTION */}
      <Box
        component="section"
        sx={{
          padding: { xs: "60px 20px", md: "60px 4%" },
          paddingRight: { xs: "20px", md: "42vw" },
          background: "#fff",

          // ✅ FIXED RESPONSIVE ALIGNMENT
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8rem", sm: "1.8rem", md: "2rem", lg: "2.8rem" },
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            color: "#111",
            mb: 5,
            whiteSpace: "nowrap",

            // RESPONSIVE TITLE ALIGNMENT
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.2px #999",
              fontWeight: 600,
              marginRight: 8,
            }}
          >
            Appoint
          </span>
          ment .
        </Typography>

        {/* Body */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          {/* Map */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", md: 240 },
              height: { xs: 200, md: 380 },

              backgroundImage: `url(${mahaMap})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#ffffff",

              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Nagpur Dot */}
            <Box
              className="nagpur-dot"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/FG8mHHkC87JxuaF86",
                  "_blank"
                )
              }
              sx={{
                position: "absolute",
                top: { xs: "33%", md: "40%" },   
                left: { xs: "56%", md: "74%" }, 
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            >
              <Box className="dot-core" />
              <Box className="dot-ring ring1" />
              <Box className="dot-ring ring2" />
            </Box>
          </Box>

          {/* Info cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: { xs: 14 },
              gap: 3,
              flex: 1,
              maxWidth: 480,
              alignItems: "flex-start", 
              width: "100%", 
            }}
          >
            {locations.map((loc, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "flex-start",
                  textAlign: "left",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box sx={{ ...iconBox, width: 36, height: 36 }}>
                  <LocationOnIcon sx={{ color: "#fff", fontSize: "1.1rem" }} />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#111",
                      mb: 0.3,
                    }}
                  >
                    {loc.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: "#555",
                      lineHeight: 1.6,
                    }}
                  >
                    {loc.address}
                    <br />
                    {loc.extra}
                    <br />
                    {loc.timing}
                  </Typography>
                </Box>
              </Box>
            ))}

            {/* Call */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                textAlign: "left",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box sx={{ ...iconBox, width: 36, height: 36 }}>
                <PhoneIcon sx={{ color: "#fff", fontSize: "1.1rem" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#111",
                    mb: 0.3,
                  }}
                >
                  Call Us
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#555",
                  }}
                >
                  +91 98366XXXXX
                  <br />
                  (Monday – Saturday, 10 AM – 6 PM)
                </Typography>
              </Box>
            </Box>

            {/* Mail */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                textAlign: "left",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box sx={{ ...iconBox, width: 36, height: 36 }}>
                <EmailIcon sx={{ color: "#fff", fontSize: "1.1rem" }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#111",
                    mb: 0.3,
                  }}
                >
                  Mail Us
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#555",
                  }}
                >
                  doctor@email.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          background: "#1a1a1a",
          color: "#ccc",
          padding: { xs: "40px 20px", md: "40px 4%" },
          paddingRight: { xs: "20px", md: "44vw" },
        }}
      >
        <Footer />
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 4, md: 3 },
            mb: 4,
            textAlign: { xs: "center", lg: "left" },
            alignItems: { xs: "center", lg: "flex-start" }, // 👈 centre columns on mobile
          }}
        >
          {/* Quick Links */}
          {/* <Box sx={{ flex: 1, borderRight: { lg: "1px solid #333" }, pr: { lg: 4 } }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Quick Link
            </Typography>
            {["Home", "Teaching", "Sports Page", "Gallery", "Appointment"].map((item) => (
              <Typography key={item} sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#aaa", mb: 0.8, cursor: "pointer", "&:hover": { color: "#0ab5c8" }, "&::before": { content: '"• "' } }}>
                {item}
              </Typography>
            ))}
          </Box> */}

          {/* Patients Page */}
          {/* <Box sx={{ flex: 1, borderRight: { lg: "1px solid #333" }, px: { lg: 4 } }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Patients' Page
            </Typography>
            {["Arthroscopy", "Meniscus Injury of Knee", "ACL Injury of Knee", "PCL Injury of Knee", "Footballer's Ankle", "Frozen Shoulder"].map((item) => (
              <Typography key={item} sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#aaa", mb: 0.8, cursor: "pointer", "&:hover": { color: "#0ab5c8" }, "&::before": { content: '"• "' } }}>
                {item}
              </Typography>
            ))}
          </Box> */}

          {/* Contact Us */}
          {/* <Box sx={{ flex: 1, pl: { lg: 4 } }}>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: { xs: "center", lg: "flex-start" } }}>
            {[
              { icon: <EmailIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Email", text: "doctor@email.com" },
              { icon: <PhoneIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Phone", text: "+91 98366XXXXX (M)" },
              { icon: <LocationOnIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Clinic Name 1", text: "123 Main Road, Nagpur - 440001" },
              { icon: <LocationOnIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Clinic Name 2", text: "456 Another Road, Nagpur - 440002" },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "center",
                  background: "#252525",
                  borderRadius: "10px",
                  padding: "10px 16px",
                  width: "100%",
                  maxWidth: 280,
                  border: "1px solid #2e2e2e",
                  "&:hover": { borderColor: "#0ab5c8", background: "#1e1e1e" },
                  transition: "all 0.2s ease",
                }}
              >
                <Box sx={{ ...iconBox, width: 32, height: 32, flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <Box sx={{ textAlign: "left" }}>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#0ab5c8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#ccc" }}>
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box> */}
        {/* </Box> */} 

        {/* <Divider sx={{ borderColor: "#333", mb: 3 }} /> */}

        {/* <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#555", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase" }}>
          © 2026 Dr. Kaustubh Kale. All Rights Reserved.
        </Typography> */}
      </Box>
    </>
  );
}