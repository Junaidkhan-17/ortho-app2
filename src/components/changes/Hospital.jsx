import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import Img from "../../assets/OT.png";
import Navbar from "../Navbar";

// ── Keyframes ────────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const slideRight = keyframes`
  from { opacity: 0; transform: translateX(48px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const pulseSlow = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50%       { transform: scale(1.07); opacity: 1; }
`;

export default function HospitalHero() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          width: "100%",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            minHeight: { md: "520px" },
          }}
        >

          {/* ══════════════════════════════
              LEFT: Text + Shapes
          ══════════════════════════════ */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
              px: { xs: "24px", md: "6%" },
              py: { xs: "48px", md: "60px" },
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            {/* ── Decorative shapes on white panel ── */}

            {/* Dotted grid — top left corner */}
            <Box sx={{
              position: "absolute",
              top: "4%", left: "3%",
              width: { xs: 64, md: 88 },
              height: { xs: 64, md: 88 },
              backgroundImage: "radial-gradient(circle, #0ab5c8 1.5px, transparent 1.5px)",
              backgroundSize: "12px 12px",
              opacity: 0.25,
              zIndex: 0,
              animation: `${fadeIn} 0.8s ease both`,
              animationDelay: "0.6s",
            }} />

            {/* Solid teal square — top right of left panel */}
            <Box sx={{
              position: "absolute",
              top: "6%", right: "4%",
              width: { xs: 32, md: 48 },
              height: { xs: 32, md: 48 },
              bgcolor: "#0ab5c8",
              zIndex: 0,
              animation: `${fadeIn} 0.6s ease both, ${pulseSlow} 4s ease-in-out infinite`,
              animationDelay: "0.5s, 1.5s",
            }} />

            {/* Cyan quarter circle — bottom left */}
            <Box sx={{
              position: "absolute",
              bottom: "4%", left: "2%",
              width: { xs: 52, md: 72 },
              height: { xs: 52, md: 72 },
              bgcolor: "#0ab5c8",
              borderRadius: "0 72px 0 0",
              opacity: 0.6,
              zIndex: 0,
              animation: `${fadeIn} 0.7s ease both, ${pulseSlow} 5s ease-in-out infinite`,
              animationDelay: "0.7s, 2s",
            }} />

            {/* Small square — bottom right */}
            <Box sx={{
              position: "absolute",
              bottom: "8%", right: "4%",
              width: { xs: 24, md: 36 },
              height: { xs: 24, md: 36 },
              bgcolor: "#089aab",
              opacity: 0.5,
              zIndex: 0,
              animation: `${fadeIn} 0.7s ease both, ${pulseSlow} 6s ease-in-out infinite`,
              animationDelay: "0.8s, 2.5s",
            }} />

            {/* Vertical bar — right edge of left panel */}
            <Box sx={{
              position: "absolute",
              top: "20%", right: "2%",
              width: 6,
              height: { xs: 60, md: 90 },
              bgcolor: "#0ab5c8",
              opacity: 0.4,
              zIndex: 0,
              animation: `${fadeIn} 0.8s ease both`,
              animationDelay: "0.9s",
            }} />

            {/* ── Text content — sits above shapes ── */}
            <Box sx={{ position: "relative", zIndex: 1 }}>

              {/* Eyebrow */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  mb: 2,
                  animation: `${fadeUp} 0.6s ease both`,
                  animationDelay: "0.1s",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0ab5c8",
                    textTransform: "uppercase",
                    letterSpacing: "2.5px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Hospital Center
                </Typography>
                <Box sx={{ width: 36, height: 3, bgcolor: "#0ab5c8", borderRadius: 2 }} />
              </Box>

              {/* Heading */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
                  lineHeight: 1.15,
                  color: "#0d1b2a",
                  mb: 2.5,
                  animation: `${fadeUp} 0.7s ease both`,
                  animationDelay: "0.2s",
                }}
              >
                Healthcare for<br />Family's Health
              </Typography>

              {/* Body */}
              <Typography
                sx={{
                  fontSize: { xs: "14px", md: "15px" },
                  color: "#6b7280",
                  lineHeight: 1.8,
                  maxWidth: 420,
                  mb: 4,
                  fontFamily: "'DM Sans', sans-serif",
                  animation: `${fadeUp} 0.7s ease both`,
                  animationDelay: "0.35s",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris
                nulla tincidunt fermentum. Sagittis pellentesque.
              </Typography>

              {/* CTA */}
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#0ab5c8",
                  color: "#fff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "14px", md: "15px" },
                  textTransform: "none",
                  px: { xs: 3, md: 4 },
                  py: 1.6,
                  borderRadius: "4px",
                  animation: `${fadeUp} 0.7s ease both`,
                  animationDelay: "0.5s",
                  "&:hover": {
                    bgcolor: "#089aab",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(10,181,200,0.35)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Book an Appointment
              </Button>
            </Box>
          </Box>

          {/* ══════════════════════════════
              RIGHT: Image only (no shapes)
          ══════════════════════════════ */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              height: { xs: "70vw", sm: "50vw", md: "auto" },
              minHeight: { xs: "280px", md: "520px" },
              animation: `${slideRight} 0.8s ease both`,
              animationDelay: "0.3s",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={Img}
              alt="Doctor"
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                zIndex: 1,
                display: "block",
              }}
            />
          </Box>

        </Box>
      </Box>
    </>
  );
}