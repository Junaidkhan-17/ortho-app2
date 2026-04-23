import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const activities = [
  "Acclaimed teacher with fellowship & observer programs",
  "Regular invited speaker at national & international conferences",
  "Published papers in national & international journals",
  "Active member of reputed orthopaedic associations",
];

const logos = ["IMA", "IOA", "WBOA", "ISAKOS"];

export default function Academic() {
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
          fontSize: { xs: "1rem", sm: "1.4rem", md: "2rem", lg: "2.8rem" },
          fontWeight: 700,
          color: "#111",
          fontFamily: "'Playfair Display', serif",
          mb: 5,
          lineHeight: 1.2,
        }}
      >
        <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1.2px #999",
            fontWeight: 600,
          }}
        >
          Academic Activities
        </span>
        <br />
        & Affiliations .
      </Typography>

      {/* List */}
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          mx: { xs: "auto", md: 0 },
          mb: 6,
        }}
      >
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
            <Box
              component="span"
              sx={{ color: "#0ab5c8", fontSize: "0.9rem", mt: "4px", flexShrink: 0 }}
            >
              ✔
            </Box>
            {item}
          </Box>
        ))}
      </Box>

      {/* Logos */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {logos.map((logo, i) => (
          <Box
            key={i}
            sx={{
              border: "2px solid #0ab5c8",
              borderRadius: "8px",
              padding: "10px 24px",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#0ab5c8",
              letterSpacing: "1px",
            }}
          >
            {logo}
          </Box>
        ))}
      </Box>
    </Box>
  );
}