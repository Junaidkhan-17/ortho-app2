import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HospitalHero from "../components/changes/Hospital";
import Activities from "../components/Activities";
import Qualifications from "../components/Qualification";
import Academic from "../components/Academic";
import Appointment from "../components/AppointmentAndFooter";
import SurgeryVideos from "../components/SurgeryVideo";
import surgeryVid1 from "../assets/surgeryvideo.mp4";
import surgeryVid2 from "../assets/patient.mp4";
import bigImg from "../assets/bigImg.jpeg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  { title: "placeholder", src: surgeryVid1, type: "local" },
  { title: "placeholder", src: surgeryVid2, type: "local" },
];

export default function Home() {
  const heroRef = useRef(null);
  const revealBoxRef = useRef(null);
  const innerImgRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          revealBoxRef.current,
          { clipPath: "inset(100% 0 0 0)", opacity: 0 },
          {
            clipPath: "inset(0% 0 0 0)",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          innerImgRef.current,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
      return () => ctx.revert();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <div ref={heroRef}>
        <HospitalHero />
      </div>

      {/* ── SCROLL-REVEAL FIXED IMAGE (desktop only) ── */}
      <Box
        ref={revealBoxRef}
        sx={{
          display: { xs: "none", md: "block" },
          position: "fixed",
          top: 0,
          right: 0,
          width: "40vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        {/* Image with Ken-Burns */}
        <Box
          ref={innerImgRef}
          component="img"
          src={bigImg}
          alt="Doctor"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transformOrigin: "center center",
          }}
        />

        {/* ── TEXT OVERLAY ── */}
        <Box
          sx={{
            position: "absolute",
            bottom: 36,
            right: 32,
            textAlign: "right",
          }}
        >
          {/* Teal accent line */}
          <Box
            sx={{
              width: 56,
              height: 3,
              background: "#1ccadd",
              ml: "auto",
              mb: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              fontWeight: 800,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            Consultant in
          </Typography>
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0.01em",
              lineHeight: 1.4,
            }}
          >
            Arthroscopic Surgery
            <br />& Sports Medicine
          </Typography>
        </Box>
      </Box>

      {/* ── MAIN CONTENT ── */}
      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Activities />
        <Qualifications />
        <Academic />
      </Box>

      {/* ── SURGERY VIDEOS ── */}
      <Divider sx={{ borderColor: "#f0f0f0" }} />
      <Divider sx={{ borderColor: "#f0f0f0" }} />
      <Box sx={{ width: { xs: "100%", md: "60%" } }}>
        <SurgeryVideos videos={videos} />
      </Box>

      {/* ── APPOINTMENT ── */}
      <div id="appointment-section">
        <Appointment />
      </div>
    </>
  );
}