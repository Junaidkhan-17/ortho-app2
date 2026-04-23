// src/pages/patients/PCLInjury.jsx
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

export default function PCLInjury() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Box sx={{ padding: { xs: "60px 20px", md: "80px 10%" }, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h1" sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: { xs: "2.5rem", md: "3.5rem" }, color: "#111", letterSpacing: "-1px", lineHeight: 1.1, mb: 3 }}>
            PCL INJURY<br />OF KNEE
          </Typography>
          <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
            The <span style={{ color: "#0ab5c8", fontWeight: 600 }}>Posterior Cruciate Ligament (PCL)</span> is the strongest ligament in the knee. It connects the thighbone <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(femur)</span> to the shinbone <span style={{ color: "#0ab5c8", fontWeight: 600 }}>(tibia)</span> and prevents the tibia from sliding backward. Although less commonly injured than the ACL, PCL injuries can be equally disabling.
          </Typography>
        </Box>
        <Box sx={{ flexShrink: 0, width: { xs: "100%", md: 380 }, borderRadius: "12px", overflow: "hidden", background: "#e8f7f9", height: 260, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #e0f0f3" }}>
          <Typography sx={{ color: "#0ab5c8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>[ PCL Injury Image ]</Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* HOW + SYMPTOMS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>01.</span> How does it happen?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              PCL injuries most commonly occur from a direct blow to the front of the knee while the knee is bent — for example, hitting the knee on a dashboard during a car accident or falling on a bent knee. It can also happen during sports when a player falls forward onto a bent knee.
              <br /><br />
              It is frequently seen in contact sports such as football, rugby, and in road traffic accidents.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}>
              <span style={{ color: "#0ab5c8" }}>02.</span> How do I know?
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Symptoms include pain at the back of the knee, swelling that develops within hours, stiffness and difficulty walking, and a feeling of instability. Unlike ACL injuries, PCL injuries may sometimes feel milder initially and go unrecognised.
              <br /><br />
              An MRI scan is the most reliable way to confirm the diagnosis and assess the extent of the injury.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* TREATMENT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *treatment*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Isolated, low-grade PCL injuries (Grade I and II) can often be managed conservatively with rest, ice, physiotherapy, and bracing. Many patients regain good function without surgery.
          <br /><br />
          However, complete tears (Grade III), combined ligament injuries, or cases with persistent instability usually require surgical reconstruction. The choice of treatment depends on the severity of the tear, presence of other ligament injuries, and the patient's lifestyle and activity demands.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* OPERATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What is the *operation*?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          PCL reconstruction is performed arthroscopically under general or regional anaesthesia. Similar to ACL reconstruction, a graft (usually from the hamstring or patellar tendon) is used to replace the torn ligament. The graft is anchored securely into tunnels drilled in the femur and tibia.
          <br /><br />
          PCL reconstruction is technically more demanding than ACL surgery due to the ligament's position at the back of the knee, and is best performed by an experienced knee surgeon.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* NOT OPERATED */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        {sectionTitle("What if I do *not* get operated?")}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
          Neglected PCL injuries can lead to chronic knee instability, difficulty with activities such as climbing stairs or walking downhill, and progressive cartilage damage. Over time, this can result in early-onset arthritis. Athletes who do not address a significant PCL tear are unlikely to return to their pre-injury level of performance.
        </Typography>
      </Box>

      <Footer />
    </>
  );
}