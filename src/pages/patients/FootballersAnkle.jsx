// src/pages/patients/FootballersAnkle.jsx
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

export default function FootballersAnkle() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box sx={{ padding: { xs: "60px 20px", md: "80px 10%" }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: { xs: "2.5rem", md: "3.5rem" }, color: "#111", letterSpacing: "-1px", lineHeight: 1.1, mb: 3 }}>
            FOOTBALLER'S<br />ANKLE
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
            <span style={{ color: "#0ab5c8", fontWeight: 600 }}>Footballer's Ankle</span> is the common name for anterior ankle impingement — a condition where bony spurs <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(osteophytes)</span> develop at the front of the ankle joint, causing pain and restricting movement. It is commonly seen in footballers and athletes who repeatedly kick or bend the ankle forcefully.
          </Typography>
        </Box>
        <Box sx={{ flexShrink: 0, width: { xs: "100%", md: 380 }, borderRadius: "12px", overflow: "hidden", background: "#e8f7f9", height: 260, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #e0f0f3" }}>
          <Typography sx={{ color: "#0ab5c8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>[ Footballer's Ankle Image ]</Typography>
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
              Repeated kicking or forced bending of the ankle (plantarflexion) causes repeated minor trauma to the front of the ankle joint. Over time, this leads to the formation of bony outgrowths (spurs) on the tibia and/or the talus bone. These spurs pinch the soft tissue and bone at the front of the ankle when the foot is bent upward (dorsiflexion), causing pain.
              <br /><br />
              It is not limited to footballers — it is seen in dancers, gymnasts, and other athletes with high ankle demand.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>02.</span> How do I know?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              The main symptom is pain at the front of the ankle, particularly when bending the foot upward — for example, when squatting, climbing stairs, or kicking a ball. There may also be swelling over the front of the ankle and a reduced range of motion.
              <br /><br />
              An X-ray will typically show the bony spurs clearly. An MRI may be done to assess any soft tissue involvement.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* TREATMENT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *treatment*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          In mild cases, conservative treatment is tried first — this includes rest, anti-inflammatory medications, physiotherapy, and activity modification. Special heel raises inside shoes can help reduce impingement during daily activities.
          <br /><br />
          If symptoms persist despite adequate conservative treatment, surgical removal of the bony spurs is recommended. Today, this is done arthroscopically, with excellent results and a quick return to sport.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* OPERATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *operation*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Ankle arthroscopy is performed under general or regional anaesthesia. Two or three small punctures are made around the ankle. A fine telescope (arthroscope) is inserted to visualise the inside of the joint. The bony spurs are then shaved down and removed using small motorised instruments.
          <br /><br />
          The procedure takes about 30–45 minutes. Patients can usually walk the same day and return to sport within 6–8 weeks.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* NOT OPERATED */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What if I do *not* get operated?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Without treatment, the bony spurs continue to grow and the impingement worsens. Pain becomes more frequent and eventually occurs even during simple walking. The range of motion of the ankle progressively decreases, making it increasingly difficult to participate in sport or even perform daily activities comfortably.
        </Typography>
      </Box>

      <Footer />
    </>
  );
}