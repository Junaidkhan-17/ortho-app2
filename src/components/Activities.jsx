import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const activities = [
  "Advanced arthroscopic procedures for knee, shoulder, and ankle using minimally invasive techniques",
  "Specialized in sports injury management including ACL, PCL, and rotator cuff repairs",
  "Expertise in joint replacement surgeries for knee, hip, and shoulder with modern implants",
  "Comprehensive care for fractures and trauma with focus on rapid recovery and mobility restoration",
  "Treats athletes and general patients with personalized rehabilitation programs",
];

const stats = [
  { label: "Years of Experience", end: 8, suffix: "+" },
  { label: "Successful Surgeries", end: 1000, suffix: "+" },
];

// Custom hook: counts from 0 to `end` when element enters viewport
function useCountUp(end, duration = 3200) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatCard({ stat }) {
  const { count, ref } = useCountUp(stat.end);
  return (
    <Box ref={ref} sx={{ minWidth: 150, textAlign: { xs: "center", md: "left" } }}>
      <Typography sx={{ fontSize: "0.9rem", color: "#777", fontFamily: "'DM Sans', sans-serif" }}>
        Over
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#0ab5c8",
          fontSize: { xs: "2.5rem", md: "3.2rem" },
          fontWeight: 700,
          fontFamily: "'Playfair Display', serif",
          my: 0.5,
        }}
      >
        {count}{stat.suffix}
      </Typography>
      <Typography sx={{ fontSize: "0.9rem", color: "#777", fontFamily: "'DM Sans', sans-serif" }}>
        {stat.label}
      </Typography>
    </Box>
  );
}

export default function Activities() {
  return (
    <Box
      component="section"
      sx={{
        padding: { xs: "60px 20px", md: "100px 10%" },
        paddingRight: { xs: "20px", md: "42vw" },
        background: "#f8f9fb",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.8rem", sm: "1.8rem", md: "2rem", lg: "2.8rem" },
          fontWeight: 700,
          color: "#111",
          fontFamily: "'Playfair Display', serif",
          mb: 5,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "transparent", WebkitTextStroke: "1.2px #999", fontWeight: 600, marginRight: 10 }}>
          Professional
        </span>
        Activities .
      </Typography>

      {/* List */}
      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mx: { xs: "auto", md: 0 } }}>
        {activities.map((item, i) => (
          <Box
            component="li"
            key={i}
            sx={{
              mb: 2,
              fontSize: "1.1rem",
              lineHeight: 1.6,
              color: "#444",
              fontFamily: "'DM Sans', sans-serif",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 1.5,
              textAlign: "left",
            }}
          >
            <Box component="span" sx={{ color: "#0ab5c8", fontSize: "0.9rem", mt: "4px", flexShrink: 0 }}>
              ✔
            </Box>
            {item}
          </Box>
        ))}
      </Box>

      {/* Stats */}
      <Box
        sx={{
          mt: 8,
          display: "flex",
          gap: { xs: 5, md: 10 },
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} />
        ))}
      </Box>
    </Box>
  );
}