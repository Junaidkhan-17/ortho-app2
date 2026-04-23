// src/pages/patients/FrozenShoulder.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const sectionTitle = (text) => {
  const parts = text.split(/(\*[^*]+\*)/);
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
      <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#111", whiteSpace: "nowrap" }}>
        {parts.map((p, i) =>
          p.startsWith("*") && p.endsWith("*") ? (
            <span key={i} style={{ color: "#0ab5c8", fontStyle: "italic" }}>{p.slice(1, -1)}</span>
          ) : (
            <span key={i}>{p}</span>
          )
        )}
      </Typography>
      <Divider sx={{ flex: 1, borderColor: "#ddd" }} />
    </Box>
  );
};

export default function FrozenShoulder() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box sx={{ padding: { xs: "60px 20px", md: "80px 10%" }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: { xs: "2.5rem", md: "3.5rem" }, color: "#111", letterSpacing: "-1px", lineHeight: 1.1, mb: 3 }}>
            FROZEN<br />SHOULDER
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
            <span style={{ color: "#0ab5c8", fontWeight: 600 }}>Frozen Shoulder</span>, also called <span style={{ color: "#0ab5c8", fontWeight: 600 }}>Adhesive Capsulitis</span>, is a condition characterised by stiffness and pain in the shoulder joint. The tissue around the shoulder joint becomes inflamed and tight, forming scar tissue. Over time, the shoulder becomes very difficult to move — hence the name "frozen."
          </Typography>
        </Box>
        <Box sx={{ flexShrink: 0, width: { xs: "100%", md: 380 }, borderRadius: "12px", overflow: "hidden", background: "#e8f7f9", height: 260, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #e0f0f3" }}>
          <Typography sx={{ color: "#0ab5c8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>[ Frozen Shoulder Image ]</Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* CAUSE + SYMPTOMS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>01.</span> Why does it happen?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              The exact cause is not always clear. It can develop after a shoulder injury, surgery, or prolonged immobilisation. It is more common in people with diabetes, thyroid disorders, or Parkinson's disease. Women between the ages of 40 and 60 are most commonly affected.
              <br /><br />
              The condition progresses in three stages: the painful "freezing" stage, the stiff "frozen" stage, and the gradual "thawing" stage — each lasting several months.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>02.</span> How do I know?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              The main symptoms are a dull or aching pain in the shoulder (often worse at night), progressive stiffness, and a significant reduction in the ability to move the shoulder in any direction — particularly rotating the arm outward or raising it above the head.
              <br /><br />
              Simple daily tasks such as reaching behind the back, combing hair, or wearing a shirt become very difficult and painful.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* TREATMENT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *treatment*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Most cases of frozen shoulder improve over time with conservative treatment. This includes physiotherapy and stretching exercises, anti-inflammatory medications, steroid injections into the joint to reduce pain and inflammation, and heat or ice therapy.
          <br /><br />
          The natural course of the condition can take 1–3 years to fully resolve. However, if symptoms are severe or not improving after adequate conservative treatment, surgical intervention is considered.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* OPERATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *operation*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Surgical release of a frozen shoulder is performed arthroscopically under general anaesthesia. Small punctures are made around the shoulder, and a fine telescope is introduced. The tight, thickened capsule around the shoulder joint is carefully divided and released, restoring the normal joint volume and allowing full movement.
          <br /><br />
          This procedure is called an <span style={{ color: "#0ab5c8", fontWeight: 600 }}>Arthroscopic Capsular Release</span>. It is highly effective and most patients notice a dramatic improvement in movement immediately after surgery. Physiotherapy begins the very next day to maintain and further improve the range of motion.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* NOT OPERATED */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What if I do *not* get operated?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Without treatment, frozen shoulder may eventually resolve on its own — but this can take 2–3 years, and in some cases the shoulder never fully regains its range of motion. Prolonged pain and stiffness can significantly affect quality of life, work, and sleep. Surgery offers a much faster and more reliable route to recovery, especially for patients who have not responded to conservative measures.
        </Typography>
      </Box>

      <Footer />
    </>
  );
}