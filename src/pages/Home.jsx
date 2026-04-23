import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoctorHero from "../components/DoctorHero";
import Activities from "../components/Activities";
import Qualifications from "../components/Qualification";
import Academic from "../components/Academic";
import Appointment from "../components/AppointmentAndFooter";
import SurgeryVideos from "../components/SurgeryVideo";
import surgeryVid1 from "../assets/surgeryvideo.mp4";
import surgeryVid2 from "../assets/patient.mp4";
import bigImg from "../assets/bigImg.jpeg";
import Box from "@mui/material/Box";
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
    // Small timeout ensures DOM is painted before ScrollTrigger measures
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // ── Clip-path reveal: slides up from bottom as hero scrolls out ──
        gsap.fromTo(
          revealBoxRef.current,
          {
            clipPath: "inset(100% 0 0 0)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0 0 0)",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true, // frame-perfect lock to scroll
            },
          }
        );

        // ── Subtle Ken-Burns scale on the image itself ──
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
        <DoctorHero />
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
          // initial hidden state set by GSAP — no CSS clip needed here
        }}
      >
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