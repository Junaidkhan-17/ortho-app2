import doctorImg from "../assets/OT.png";
import qualImg from "../assets/OT Group.png";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const qualifications = [
  { degree: "MBBS", institute: "MGIMS, Sewagram" },
  { degree: "MS Orthopaedics", institute: "B.J. Government Medical College, Pune" },
  { degree: "DNB Orthopaedics", institute: "Diplomate of National Board in Orthopedics (New Delhi)" },
  { degree: "MNAMS", institute: "Member of National Academy of Medical Sciences" },
  { degree: "Fellowship in Arthroscopy", institute: "Advanced Orthopaedic Centre, Pune" },
  { degree: "FRCS", institute: "Edinburgh" },
];

export default function Qualifications() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <section
      style={{
        padding: isMobile ? "40px 20px" : "80px 10%",
        background: "#fff",
        width: "100%",
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          mb: 4,
          fontSize: isMobile ? "2rem" : "2.8rem",
          color: "#111",
        }}
      >
        <span style={{ color: "transparent", WebkitTextStroke: "1.5px #bbb", marginRight: 2 }}>Quali</span>fications.
      </Typography>

      {/* Body */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 2 : 6,
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        {/* LEFT — Timeline */}
        <Box sx={{ flex: 1, width: "100%" }}>
          <Timeline
            position="right"
            sx={{
              p: 0,
              m: 0,
              // remove default left padding MUI adds
              "& .MuiTimelineItem-root::before": {
                display: "none",
              },
            }}
          >
            {qualifications.map((q, i) => (
              <TimelineItem key={i}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "transparent",
                      border: "2px solid #0ab5c8",
                      color: "#0ab5c8",
                      width: isMobile ? 40 : 36,
                      height: isMobile ? 40 : 36,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      boxShadow: "none",
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </TimelineDot>
                  {i < qualifications.length - 1 && (
                    <TimelineConnector sx={{ background: "#e0f7fa" }} />
                  )}
                </TimelineSeparator>

                <TimelineContent sx={{ pb: isMobile ? 2 : 3, pr: 0 }}>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: isMobile ? "1rem" : "1rem",
                      color: "#111",
                    }}
                  >
                    {q.degree}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: "#777",
                      mt: 0.3,
                    }}
                  >
                    {q.institute}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* RIGHT — images (hidden on mobile, stacked on desktop) */}
        {!isMobile ? (
          <Box sx={{ width: 280, flexShrink: 0, display: "flex", flexDirection: "column", gap: 2 }}>
            {/* <Box sx={{ borderRadius: "12px", overflow: "hidden" }}>
              <img src={doctorImg} alt="Doctor" style={{ width: "100%", objectFit: "cover" }} />
            </Box> */}
            {/* <Box sx={{ borderRadius: "12px", overflow: "hidden" }}>
              <img src={qualImg} alt="Qualification" style={{ width: "100%", objectFit: "cover" }} />
            </Box> */}
          </Box>
        ) : (
          // Mobile — two overlapping images like reference
          <Box sx={{ position: "relative", width: "100%", height: 260, mt: 2 }}>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "48%",
                borderRadius: "10px",
                overflow: "hidden",
                zIndex: 2,
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              <img src={doctorImg} alt="Doctor" style={{ width: "100%", objectFit: "cover" }} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "58%",
                borderRadius: "10px",
                overflow: "hidden",
                zIndex: 1,
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              }}
            >
              <img src={qualImg} alt="Qualification" style={{ width: "100%", objectFit: "cover" }} />
            </Box>

            
          </Box>
        )}
      </Box>
    </section>
  );
}