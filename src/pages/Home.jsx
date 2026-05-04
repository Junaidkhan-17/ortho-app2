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
  { title: "Operation1", src: surgeryVid1, type: "local" },
  { title: "Operation2", src: surgeryVid2, type: "local" },
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

      {/* ── WHATSAPP FLOAT ── */}
      <Box
        component="a"
        href="https://wa.me/9175755946"   
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 148,
          right: 28,
          zIndex: 9999,
          width: 46,
          height: 46,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
          transition: "transform .2s, box-shadow .2s",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 6px 24px rgba(37,211,102,0.55)",
          },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="#fff"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.859L.057 23.514a.75.75 0 0 0 .93.93l5.667-1.48A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 0 1-4.964-1.361l-.355-.212-3.664.957.975-3.555-.232-.368A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
      </Box>


    </>
  );
}