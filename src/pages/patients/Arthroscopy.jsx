// src/pages/patients/Arthroscopy.jsx
import Navbar from "../../components/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Footer from "../../components/Footer";



const afterOpItems = [
  { title: "Exercise", desc: "A qualified physiotherapist will take you through a detailed exercise schedule. Just follow it." },
  { title: "Walking", desc: "You can stand up on the same afternoon after operation and start walking. You may need the help of a walking-stick for the first few days." },
  { title: "Ice-compress", desc: "Use an ice-bag or a commercially available ice-pack. Cover it with a dry towel and place it on the knee for 15–30 minutes. Do it at least four times daily. This minimizes the pain and the swelling." },
  { title: "Stitch Removal", desc: "Stitches (if any) are removed 12–14 days after operation. But more often, there are no stitches on the skin to remove." },
  { title: "Shower", desc: "Allowed only after 2 weeks, when stitches are removed." },
  { title: "Toilet", desc: "You can walk to the toilet the day after the operation and sit on a commode. You should not squat or sit on floor." },
  { title: "Activities", desc: "It depends on the degree of injury, the muscle-strength, and how well the exercises have been done. Generally, if there is good muscle strength then — After 2–3 weeks one can join light office duties. After 3–4 weeks one can join swimming, ride a bicycle or take a walk. After a month or so light jogging, skipping, gym etc. are allowed." },
];

const prepItems = [
  "Report to the hospital the night before or the same morning. Please bring ALL your MRIs, X-rays and other reports.",
  "If you are taking any medications regularly – you must bring them with you.",
  "Bring a walking stick; you may need this for the first few days.",
];

const sectionTitle = (text) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
    <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#111", whiteSpace: "nowrap" }}>
      {text}
    </Typography>
    <Divider sx={{ flex: 1, borderColor: "#ddd" }} />
  </Box>
);

export default function Arthroscopy() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box sx={{ padding: { xs: "60px 20px", md: "80px 10%" }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#111",
              letterSpacing: "-1px",
              mb: 3,
            }}
          >
            ARTHROSCOPY
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 2 }}>
            It is the microsurgery of joints where a fine telescope (thinner than a pencil) is put inside the joint; the inside of the joint is seen and operation done through it.
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8 }}>
            This can be done on almost all joints, especially the knee or shoulder.
          </Typography>
        </Box>
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
          <Typography sx={{ color: "#0ab5c8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>
            [ Arthroscopy Image ]
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* WHAT CAN BE DONE + WHY BETTER */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>01.</span> What can be done?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Most operations can be done. For example, in the knee, a piece of torn cartilage (following sports injury) can be removed, an arthritic joint can be cleansed and washed, a loose piece of bone inside joint (loose body) can be removed or recurrent instability of the patella (knee-cap) can be fixed.
              <br /><br />
              In shoulder too, most operations can be done by arthroscopy today. For example, recurrent dislocations of the shoulder can be fixed, a tear of the rotator cuff tendon can be repaired or the stiff frozen shoulder can be released by arthroscopy.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>02.</span> Why is it better?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem" }}>
              There is no cut, only punctures. So:
            </Typography>
            {["minimum pain and quicker healing.", "no ugly scar, no trouble of wound healing.", "early return to function, can walk on the same day.", "minimal hospital stay (only one day), so cheaper."].map((item, i) => (
              <Typography key={i} sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 2 }}>
                • {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* WHAT ACTUALLY HAPPENS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What actually happens?")}
        <Box component="ol" sx={{ pl: 3, m: 0 }}>
          {[
            "Arthroscopy is done under general or regional anesthesia.",
            "Firstly, puncture holes are made into the joint. Then, the fine telescope & instruments are introduced. And finally, the problem inside the joint is seen and managed appropriately.",
            "Movements and exercises are started quickly and can go home soon.",
          ].map((item, i) => (
            <Typography component="li" key={i} sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 2 }}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* WHEN CAN I RETURN TO WORK */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("When can I return to work?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mb: 1 }}>
          It depends on:
        </Typography>
        {["your job.", "the damage inside the joint.", "the procedure is done."].map((item, i) => (
          <Typography key={i} sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 2 }}>
            • {item}
          </Typography>
        ))}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mt: 2, lineHeight: 1.8 }}>
          Usually, if you are in sedentary occupation (e.g. a teacher or clerk in an office) you can be back to work by 3–4 weeks (provided you have a safe and comfortable transport).
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* PREPARATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("Preparation before the operation")}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, justifyContent: "center" }}>
          {prepItems.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "#f0fbfc",
                  border: "2px solid #0ab5c8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                }}
              >
                {i === 0 ? "🏥" : i === 1 ? "💊" : "🦯"}
              </Box>
              <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* AFTER OPERATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("After Operation")}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
          {afterOpItems.map((item, i) => (
            <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: "8px",
                  background: "#f0fbfc",
                  border: "1px solid #c8eff4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.3rem",
                }}
              >
                {["🏃", "🚶", "🧊", "🩹", "🚿", "🚽", "⚡"][i]}
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0ab5c8", mb: 0.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}