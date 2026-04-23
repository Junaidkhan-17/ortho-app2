// src/pages/patients/ACLInjury.jsx
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

export default function ACLInjury() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box sx={{ padding: { xs: "60px 20px", md: "80px 10%" }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: { xs: "2.5rem", md: "3.5rem" }, color: "#111", letterSpacing: "-1px", lineHeight: 1.1, mb: 3 }}>
            ACL INJURY<br />OF KNEE
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
            The <span style={{ color: "#0ab5c8", fontWeight: 600 }}>Anterior Cruciate Ligament (ACL)</span> is one of the key ligaments that help stabilize the knee joint. It connects the thighbone <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(femur)</span> to the shinbone <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(tibia)</span> and prevents the tibia from sliding forward. ACL injuries are among the most common knee injuries, especially in athletes.
          </Typography>
        </Box>
        <Box sx={{ flexShrink: 0, width: { xs: "100%", md: 380 }, borderRadius: "12px", overflow: "hidden", background: "#e8f7f9", height: 260, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #e0f0f3" }}>
          <Typography sx={{ color: "#0ab5c8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>[ ACL Injury Image ]</Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* HOW DOES IT HAPPEN + SYMPTOMS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>01.</span> How does it happen?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              ACL injuries most often occur during sports that involve sudden stops, jumping, or changes in direction — such as football, basketball, skiing, and tennis. The injury can happen when you land awkwardly from a jump, suddenly slow down and change direction (cutting), pivot with your foot firmly planted, or receive a direct blow to the knee.
              <br /><br />
              A loud "pop" or a "popping" sensation in the knee is often felt at the time of injury.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>02.</span> How do I know?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Signs and symptoms of an ACL injury usually include a loud pop, severe pain and inability to continue activity, rapid swelling, loss of full range of motion, and a feeling of instability or "giving way" when bearing weight.
              <br /><br />
              Diagnosis is confirmed by clinical examination and an MRI scan which clearly shows the torn ligament.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* TREATMENT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *treatment*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Treatment depends on the severity of the injury and the patient's activity level. For minor injuries or older, less active patients, conservative management with physiotherapy and bracing may suffice.
          <br /><br />
          However, for active individuals and athletes, surgical reconstruction is usually recommended. The torn ACL cannot be simply stitched back — it needs to be reconstructed using a graft, typically taken from the patient's own hamstring or patellar tendon (autograft). This is done arthroscopically, meaning through small punctures without a large cut.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* OPERATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *operation*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          ACL reconstruction is performed under general or regional anaesthesia. A graft (replacement tissue) is harvested and then passed through tunnels drilled in the femur and tibia, replicating the original ACL's position. It is fixed firmly using screws or other fixation devices.
          <br /><br />
          The entire procedure is done arthroscopically — through small punctures — resulting in minimal scarring, less pain, and a faster recovery compared to open surgery.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* RECOVERY */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What about *recovery*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Recovery from ACL reconstruction typically takes 6–9 months before returning to competitive sport. A structured physiotherapy programme is essential and begins almost immediately after surgery. Early exercises focus on regaining range of motion and reducing swelling, progressing to strength training and sport-specific drills over time.
          <br /><br />
          Returning to sport too early significantly increases the risk of re-injury, so timelines must be respected.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* NOT OPERATED */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What if I do *not* get operated?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Without surgery, the knee remains unstable and is prone to repeated episodes of "giving way." Each such episode can cause further damage to the cartilage and meniscus, eventually leading to early arthritis. For active individuals, not treating an ACL tear often means giving up sports entirely and accepting a progressively deteriorating knee.
        </Typography>
      </Box>

      <Footer />
    </>
  );
}