// src/pages/patients/MeniscusInjury.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const sectionTitle = (text) => {
  // Split on the italic keyword (wrapped in *)
  const parts = text.split(/(\*[^*]+\*)/);
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
      <Typography
        sx={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "1.15rem",
          color: "#111",
          whiteSpace: "nowrap",
        }}
      >
        {parts.map((p, i) =>
          p.startsWith("*") && p.endsWith("*") ? (
            <span key={i} style={{ color: "#0ab5c8", fontStyle: "italic" }}>
              {p.slice(1, -1)}
            </span>
          ) : (
            <span key={i}>{p}</span>
          )
        )}
      </Typography>
      <Divider sx={{ flex: 1, borderColor: "#ddd" }} />
    </Box>
  );
};

export default function MeniscusInjury() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box
        sx={{
          padding: { xs: "60px 20px", md: "80px 10%" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#111",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            MENISCUS
            <br />
            INJURY OF KNEE
          </Typography>
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#555",
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            The meniscus is a C-shaped piece of{" "}
            <span style={{ color: "#0ab5c8", fontWeight: 600 }}>cartilage</span> inside the knee
            that provides a cushion between the thighbone{" "}
            <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(femur)</span> and legbone{" "}
            <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(tibia)</span>. There are two
            menisci in each knee joint — one inside{" "}
            <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(medial)</span> and one outside{" "}
            <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(lateral)</span>.
          </Typography>
        </Box>

        {/* Hero image placeholder — swap src when ready */}
        <Box
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: 380 },
            borderRadius: "12px",
            overflow: "hidden",
            background: "#e8f7f9",
            height: 260,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #e0f0f3",
          }}
        >
          <Typography
            sx={{
              color: "#0ab5c8",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
            }}
          >
            [ Meniscus Image ]
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* HOW DAMAGED + HOW DO I KNOW */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#111",
                mb: 1.5,
              }}
            >
              <span style={{ color: "#0ab5c8" }}>01.</span> How does a meniscus get damaged?
            </Typography>
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#555",
                fontSize: "0.95rem",
                lineHeight: 1.8,
              }}
            >
              Any activity that causes the knee to forcefully twist or rotate, such as sudden twists
              and turns, can tear the meniscus. Even awkward stumbles, deep squatting or
              inappropriate lifting can also damage it. The risk is particularly high for athletes —
              more so for those who participate in contact sports such as football, kabaddi,
              wrestling or in sports that involve pivoting, such as cricket, hockey, badminton,
              table-tennis, volleyball and others.
              <br />
              <br />
              In older persons, the meniscus can tear with little or no injury due to the associated
              degenerative changes of the knee.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#111",
                mb: 1.5,
              }}
            >
              <span style={{ color: "#0ab5c8" }}>02.</span> How do I know?
            </Typography>
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#555",
                fontSize: "0.95rem",
                lineHeight: 1.8,
              }}
            >
              Often one can feel a click or popping sensation at the time of injury, followed by
              pain, swelling and limp. The pain, limp, swelling continue and get worse over time.
              <br />
              <br />
              The knee often gets 'locked' — meaning the knee is stuck in a bent position and cannot
              be made completely straight. A locked knee is very painful and movements become very
              difficult.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* WHAT IS THE TREATMENT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *treatment*?")}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#555",
            fontSize: "0.95rem",
            lineHeight: 1.8,
          }}
        >
          It depends on the symptoms and disabilities. In brief, if one is having symptoms of
          repeated locking (inability to fully straighten the knee) and persistent pain or limp and
          is unable to pursue his daily activities or sports, then he needs an operation.
          <br />
          <br />
          However, if the symptoms are minimum or improving over time, then medical treatment can be
          tried.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* WHAT IS THE OPERATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *operation*?")}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#555",
            fontSize: "0.95rem",
            lineHeight: 1.8,
          }}
        >
          The operation is done under general or local anaesthesia. Initially, the inside of the
          knee is examined by a thin telescope, which is introduced through a small puncture
          (arthroscopy). Next the torn meniscus is visualised. If the tear is repairable, it is
          repaired and if the tear is beyond repair, the damaged part is removed.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* WHAT IF I DO NOT GET OPERATED */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What if I do *not* get operated?")}
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#555",
            fontSize: "0.95rem",
            lineHeight: 1.8,
          }}
        >
          The symptoms of locking and pain will persist. An acute locking is very painful and
          restrictive. With repeated movements, the size of tear may increase and can lead to early
          degenerative changes.
        </Typography>
      </Box>

      <Footer />
    </>
  );
}