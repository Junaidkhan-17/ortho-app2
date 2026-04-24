// src/pages/patients/PCLInjury.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import tornpcl from "../../assets/tornpcl.jpg";

import { FaHospital, FaPills, FaWalking } from "react-icons/fa";
import {
  MdSportsGymnastics,
  MdDirectionsWalk,
  MdAcUnit,
  MdMedicalServices,
  MdShower,
  MdFlashOn,
} from "react-icons/md";
import { GiKneeCap, GiScalpel, GiMedicines } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";

// ── Data ─────────────────────────────────────────────────────────────────────
const afterOpItems = [
  {
    icon: <MdSportsGymnastics size={26} color="#0ab5c8" />,
    title: "Exercise",
    desc: "A physiotherapist will supervise a strict, phased rehabilitation programme. Quadriceps and hamstring strengthening are critical for restoring knee stability after PCL reconstruction.",
  },
  {
    icon: <MdDirectionsWalk size={26} color="#0ab5c8" />,
    title: "Walking",
    desc: "Walking with crutches and a hinged brace begins from day one. Full unassisted weight-bearing is typically introduced at 4–6 weeks, guided by pain and swelling.",
  },
  {
    icon: <MdAcUnit size={26} color="#0ab5c8" />,
    title: "Ice Compress",
    desc: "Apply a covered ice-pack for 15–20 minutes at least four times daily during the first 2–3 weeks to manage post-operative swelling and discomfort.",
  },
  {
    icon: <MdMedicalServices size={26} color="#0ab5c8" />,
    title: "Stitch Removal",
    desc: "Sutures are removed at 12–14 days post-surgery. The graft harvest site and portal wounds are reviewed for healing at this appointment.",
  },
  {
    icon: <MdShower size={26} color="#0ab5c8" />,
    title: "Shower",
    desc: "The wound must be kept dry for 2 weeks. A waterproof dressing may allow showering earlier — confirm this with your surgeon.",
  },
  {
    icon: <MdFlashOn size={26} color="#0ab5c8" />,
    title: "Return to Sport",
    desc: "PCL reconstruction requires the longest rehabilitation of common knee surgeries. Light jogging begins at 3–4 months; return to full sport at 9–12 months after confirming strength symmetry.",
  },
];

const prepItems = [
  {
    icon: <FaHospital size={28} color="#0ab5c8" />,
    text: "Report to hospital the evening before or the same morning. Bring ALL MRI scans, X-rays, and previous knee investigation reports.",
  },
  {
    icon: <FaPills size={28} color="#0ab5c8" />,
    text: "Bring all regular medications. Blood thinners, aspirin, and NSAIDs may need to be paused before surgery — discuss with your surgeon beforehand.",
  },
  {
    icon: <FaWalking size={28} color="#0ab5c8" />,
    text: "Bring crutches and arrange for a companion to drive you home. A hinged knee brace will be fitted in the theatre and worn for the first 6 weeks.",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
const SectionTitle = ({ text }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
    <Typography
      sx={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700,
        fontSize: "1.4rem",
        color: "#111",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </Typography>
    <Divider sx={{ flex: 1, borderColor: "#ddd" }} />
  </Box>
);

const IconBox = ({ children }) => (
  <Box
    sx={{
      width: 52,
      height: 52,
      borderRadius: "10px",
      background: "#f0fbfc",
      border: "1.5px solid #c8eff4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {children}
  </Box>
);

// ── Component ─────────────────────────────────────────────────────────────────
export default function PCLInjury() {
  return (
    <>
      <Navbar />
      <Box sx={{ textAlign: "left" }}>
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
        <Box sx={{ flex: 1, textAlign: "left" }}>
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
            PCL INJURY
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 2 }}
          >
            The posterior cruciate ligament (PCL) is the strongest ligament in the knee, running from the back of the shin bone to the front of the thigh bone. It prevents the tibia from sliding backwards.
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8 }}
          >
            PCL injuries are less common than ACL injuries but can be equally disabling. They typically result from a direct blow to the front of a bent knee — such as a dashboard injury in a road accident or a fall onto a flexed knee in sport.
          </Typography>
        </Box>
        <Box
              sx={{
                flexShrink: 0,
                width: { xs: "100%", md: 380 },
                height: 260,
                borderRadius: "12px",
                overflow: "hidden",
                border: "2px solid #e0f0f3",
              }}
            >
              <img
                src={tornpcl}
                alt="PCL Injury"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* SYMPTOMS + DIAGNOSIS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}
            >
              <span style={{ color: "#0ab5c8" }}>01.</span> Symptoms
            </Typography>
            {[
              "Pain at the back of the knee, especially when kneeling or squatting.",
              "Swelling developing within hours of the injury.",
              "A feeling of instability — the knee may feel loose or give way going downstairs.",
              "Difficulty bearing weight on the affected leg in severe tears.",
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                <TbActivityHeartbeat size={16} color="#0ab5c8" style={{ marginTop: 4, flexShrink: 0 }} />
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}
            >
              <span style={{ color: "#0ab5c8" }}>02.</span> Grading & Diagnosis
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              PCL tears are graded by the degree of tibial sag on examination:
            </Typography>
            {[
              "Grade I (partial): Ligament stretched but intact. Managed conservatively.",
              "Grade II (partial to complete): More posterior tibial displacement. May need surgery.",
              "Grade III (complete): Significant instability. Reconstruction strongly recommended.",
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                <GiMedicines size={16} color="#0ab5c8" style={{ marginTop: 4, flexShrink: 0 }} />
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* TREATMENT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="Treatment approach" />
        <Box component="ol" sx={{ pl: 3, m: 0 }}>
          {[
            "Isolated Grade I and Grade II PCL injuries often heal well with conservative management: a hinged brace, physiotherapy, and a structured quadriceps strengthening programme over 6–12 weeks.",
            "Surgical reconstruction is recommended for Grade III tears, combined ligament injuries, or athletes who remain symptomatic despite rehabilitation. A graft (taken from the patient's own hamstring or kneecap tendon) is used to reconstruct the torn PCL.",
            "The surgery is arthroscopic — the new ligament is passed and fixed through small puncture holes, avoiding the need for large open incisions. Recovery is guided by a strict phase-based rehabilitation protocol.",
          ].map((item, i) => (
            <Typography
              component="li"
              key={i}
              sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 2 }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* RETURN TO SPORT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="When can I return to sport?" />
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mb: 1 }}>
          Timeline for return to activity depends on:
        </Typography>
        {[
          "the grade of the PCL tear and whether associated ligaments were also injured.",
          "whether conservative treatment or surgical reconstruction was performed.",
          "strength testing results — return to sport requires 90%+ symmetry with the uninjured leg.",
        ].map((item, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <GiMedicines size={16} color="#0ab5c8" />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem" }}>
              {item}
            </Typography>
          </Box>
        ))}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mt: 2, lineHeight: 1.8 }}>
          After reconstruction, most athletes return to full competitive sport between 9 and 12 months. Returning too early risks graft failure — adherence to the rehabilitation programme is essential.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* PREPARATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="Preparation before the operation" />
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, justifyContent: "center" }}>
          {prepItems.map((item, i) => (
            <Box
              key={i}
              sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 2 }}
            >
              <Box
                sx={{
                  width: 76, height: 76, borderRadius: "50%",
                  background: "#f0fbfc", border: "2px solid #0ab5c8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>
              <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.9rem", lineHeight: 1.7 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* AFTER OPERATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="After Operation" />
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
          {afterOpItems.map((item, i) => (
            <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <IconBox>{item.icon}</IconBox>
              <Box>
                <Typography
                  sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0ab5c8", mb: 0.5 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.88rem", lineHeight: 1.7 }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      </Box>
      <Footer />
    </>
  );
}