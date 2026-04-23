import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate, useLocation } from "react-router-dom";

const iconBox = {
  borderRadius: "50%",
  background: "#0ab5c8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/gallery" },
  { label: "Appointment", path: "appointment" },
];

const patientLinks = [
  { label: "Arthroscopy", path: "/patients/arthroscopy" },
  { label: "Meniscus Injury of Knee", path: "/patients/meniscus-injury" },
  { label: "ACL Injury of Knee", path: "/patients/acl-injury" },
  { label: "PCL Injury of Knee", path: "/patients/pcl-injury" },
  { label: "Footballer's Ankle", path: "/patients/footballers-ankle" },
  { label: "Frozen Shoulder", path: "/patients/frozen-shoulder" },
];

const contactItems = [
  { icon: <EmailIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Email", text: "doctor@email.com", href: "mailto:doctor@email.com" },
  { icon: <PhoneIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Phone", text: "+91 98366XXXXX (M)", href: "tel:+9198366XXXXX" },
  { icon: <LocationOnIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Clinic Name 1", text: "123 Main Road, Nagpur - 440001", href: "https://maps.app.goo.gl/FG8mHHkC87JxuaF86" },
  { icon: <LocationOnIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Clinic Name 2", text: "456 Another Road, Nagpur - 440002", href: "https://maps.app.goo.gl/FG8mHHkC87JxuaF86" },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAppointmentClick = () => {
    if (location.pathname === "/") {
      document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("appointment-section")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const handleLinkClick = (path) => {
    if (path === "appointment") {
      handleAppointmentClick();
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        background: "#1a1a1a",
        color: "#ccc",
        padding: { xs: "40px 20px", md: "40px 8%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 3 },
          mb: 4,
          textAlign: { xs: "center", md: "left" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        {/* Quick Links */}
        <Box sx={{ flex: 1, borderRight: { md: "1px solid #333" }, pr: { md: 4 } }}>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Quick Link
          </Typography>
          {quickLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleLinkClick(item.path)}
              style={{ background: "none", border: "none", padding: 0, margin: "0 0 6px 0", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#aaa", textAlign: "inherit", display: "block", width: "100%" }}
              onMouseEnter={(e) => (e.target.style.color = "#0ab5c8")}
              onMouseLeave={(e) => (e.target.style.color = "#aaa")}
            >
              • {item.label}
            </button>
          ))}
        </Box>

        {/* Patients Page */}
        <Box sx={{ flex: 1, borderRight: { md: "1px solid #333" }, px: { md: 4 } }}>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Patients' Page
          </Typography>
          {patientLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleLinkClick(item.path)}
              style={{ background: "none", border: "none", padding: 0, margin: "0 0 6px 0", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#aaa", textAlign: "inherit", display: "block", width: "100%" }}
              onMouseEnter={(e) => (e.target.style.color = "#0ab5c8")}
              onMouseLeave={(e) => (e.target.style.color = "#aaa")}
            >
              • {item.label}
            </button>
          ))}
        </Box>

        {/* Contact Us */}
        <Box sx={{ flex: 1, pl: { md: 4 } }}>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: { xs: "center", md: "flex-start" } }}>
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none", width: "100%", maxWidth: 280 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                    padding: "6px 12px",
                    width: "100%",
                    borderRadius: "8px",
                    "&:hover": { background: "#252525" },
                    transition: "background 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ ...iconBox, width: 32, height: 32 }}>
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
              </a>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#333", mb: 3 }} />

      <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#555", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase" }}>
        © 2026 Dr. Kaustubh Kale. All Rights Reserved.
      </Typography>
    </Box>
  );
}




























// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";

// const iconBox = {
//   borderRadius: "50%",
//   background: "#0ab5c8",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexShrink: 0,
// };

// export default function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         background: "#1a1a1a",
//         color: "#ccc",
//         padding: { xs: "40px 20px", md: "40px 8%" },
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" }, // 👈 lg → md
//           gap: { xs: 4, md: 3 },
//           mb: 4,
//           textAlign: { xs: "center", md: "left" },    // 👈 lg → md
//           alignItems: { xs: "center", md: "flex-start" }, // 👈 lg → md
//         }}
//       >
//         {/* Quick Links */}
//         <Box sx={{ flex: 1, borderRight: { md: "1px solid #333" }, pr: { md: 4 } }}>
//           <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
//             Quick Link
//           </Typography>
//           {["Home", "Teaching", "Sports Page", "Gallery", "Appointment"].map((item) => (
//             <Typography key={item} sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#aaa", mb: 0.8, cursor: "pointer", "&:hover": { color: "#0ab5c8" }, "&::before": { content: '"• "' } }}>
//               {item}
//             </Typography>
//           ))}
//         </Box>

//         {/* Patients Page */}
//         <Box sx={{ flex: 1, borderRight: { md: "1px solid #333" }, px: { md: 4 } }}>
//           <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
//             Patients' Page
//           </Typography>
//           {["Arthroscopy", "Meniscus Injury of Knee", "ACL Injury of Knee", "PCL Injury of Knee", "Footballer's Ankle", "Frozen Shoulder"].map((item) => (
//             <Typography key={item} sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#aaa", mb: 0.8, cursor: "pointer", "&:hover": { color: "#0ab5c8" }, "&::before": { content: '"• "' } }}>
//               {item}
//             </Typography>
//           ))}
//         </Box>

//         {/* Contact Us */}
//         <Box sx={{ flex: 1, pl: { md: 4 } }}>
//           <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, color: "#fff", mb: 2, fontSize: "0.85rem", letterSpacing: "1.5px", textTransform: "uppercase" }}>
//             Contact Us
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: { xs: "center", md: "flex-start" } }}>
//             {[
//               { icon: <EmailIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Email", text: "doctor@email.com" },
//               { icon: <PhoneIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Phone", text: "+91 98366XXXXX (M)" },
//               { icon: <LocationOnIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Clinic Name 1", text: "123 Main Road, Nagpur - 440001" },
//               { icon: <LocationOnIcon sx={{ color: "#fff", fontSize: "0.9rem" }} />, label: "Clinic Name 2", text: "456 Another Road, Nagpur - 440002" },
//             ].map((item, i) => (
//               <Box key={i} sx={{ display: "flex", gap: 1.5, alignItems: "center", padding: "6px 12px", width: "100%", maxWidth: 280 }}>
//                 <Box sx={{ ...iconBox, width: 32, height: 32 }}>
//                   {item.icon}
//                 </Box>
//                 <Box sx={{ textAlign: "left" }}>
//                   <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#0ab5c8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" }}>
//                     {item.label}
//                   </Typography>
//                   <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#ccc" }}>
//                     {item.text}
//                   </Typography>
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <Divider sx={{ borderColor: "#333", mb: 3 }} />

//       <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#555", textAlign: "center", letterSpacing: "1px", textTransform: "uppercase" }}>
//         © 2026 Dr. Kaustubh Kale. All Rights Reserved.
//       </Typography>
//     </Box>
//   );
// }