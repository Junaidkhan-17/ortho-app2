// src/pages/patients/FootballersAnkle.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import football from "../../assets/football.jpg";

import { FaHospital, FaPills, FaWalking } from "react-icons/fa";
import {
  MdSportsGymnastics,
  MdDirectionsWalk,
  MdAcUnit,
  MdMedicalServices,
  MdShower,
  MdFlashOn,
} from "react-icons/md";
import { GiFootprint, GiScalpel, GiMedicines } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";

// ── Data ─────────────────────────────────────────────────────────────────────
const afterOpItems = [
  {
    icon: <MdSportsGymnastics size={26} color="#0ab5c8" />,
    title: "Exercise",
    desc: "A physiotherapist will guide you through a tailored exercise programme to restore ankle mobility and strength. Follow it consistently for best results.",
  },
  {
    icon: <MdDirectionsWalk size={26} color="#0ab5c8" />,
    title: "Walking",
    desc: "You may begin partial weight-bearing with crutches on the day of surgery. Full walking is typically allowed within a week as swelling reduces.",
  },
  {
    icon: <MdAcUnit size={26} color="#0ab5c8" />,
    title: "Ice Compress",
    desc: "Apply an ice-pack wrapped in a dry towel to the ankle for 15–20 minutes at least four times daily to control swelling and pain.",
  },
  {
    icon: <MdMedicalServices size={26} color="#0ab5c8" />,
    title: "Stitch Removal",
    desc: "Portal stitches (if any) are removed 10–12 days after the procedure. Arthroscopic wounds are typically very small and heal quickly.",
  },
  {
    icon: <MdShower size={26} color="#0ab5c8" />,
    title: "Shower",
    desc: "Avoid wetting the ankle wound for the first 2 weeks. A shower is permitted only after the wound is confirmed to be fully healed.",
  },
  {
    icon: <MdFlashOn size={26} color="#0ab5c8" />,
    title: "Return to Sport",
    desc: "Light activities resume after 4–6 weeks. Running and sports training typically restart at 8–12 weeks depending on healing and muscle strength.",
  },
];

const prepItems = [
  {
    icon: <FaHospital size={28} color="#0ab5c8" />,
    text: "Report to the hospital the night before or the same morning. Bring ALL your X-rays, MRI scans, and related reports.",
  },
  {
    icon: <FaPills size={28} color="#0ab5c8" />,
    text: "If you are on any regular medications, bring them along and inform the surgical team before the procedure.",
  },
  {
    icon: <FaWalking size={28} color="#0ab5c8" />,
    text: "Bring crutches or a walking stick — you may require support for the first few days after surgery.",
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
export default function FootballersAnkle() {
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
            FOOTBALLER'S ANKLE
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 2 }}
          >
            Footballer's ankle refers to the formation of bone spurs (osteophytes) at the front of the ankle joint, caused by repeated kicking, jumping, and impact over years of play.
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8 }}
          >
            These spurs impinge on soft tissues and the joint capsule, causing pain, stiffness, and restricted movement — particularly when bending the foot upward.
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
              src={football}
              alt="Footballers Ankle"
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
              "Pain at the front of the ankle, especially during or after activity.",
              "Stiffness and reduced range of motion — difficulty bending the ankle upward.",
              "Swelling around the ankle joint.",
              "A clicking or catching sensation during movement.",
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
              <span style={{ color: "#0ab5c8" }}>02.</span> Diagnosis
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Diagnosis is confirmed through a combination of clinical examination and imaging:
            </Typography>
            {[
              "X-ray: Clearly shows bone spurs at the front of the ankle joint.",
              "MRI: Evaluates associated soft tissue damage, cartilage wear, and inflammation.",
              "CT Scan: Provides detailed 3D imaging of spur size and location if surgery is planned.",
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

      {/* WHAT ACTUALLY HAPPENS / TREATMENT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="Treatment approach" />
        <Box component="ol" sx={{ pl: 3, m: 0 }}>
          {[
            "Conservative management is tried first: rest, anti-inflammatory medications, physiotherapy, and activity modification. An ankle brace may help reduce stress on the joint.",
            "Steroid injections may be considered to reduce acute inflammation and relieve pain when conservative measures are insufficient.",
            "If symptoms persist despite non-surgical treatment, arthroscopic removal of the bone spurs is recommended. The procedure is minimally invasive — the spurs are shaved away through small puncture holes using a fine telescope and instruments.",
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
          Timeline depends on:
        </Typography>
        {["the severity of bone spur and associated damage.", "how well the exercises and rehabilitation are done.", "the type of sport and level of activity required."].map((item, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <GiMedicines size={16} color="#0ab5c8" />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem" }}>
              {item}
            </Typography>
          </Box>
        ))}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mt: 2, lineHeight: 1.8 }}>
          Most athletes can return to full training between 6 and 12 weeks after arthroscopic surgery, provided rehabilitation targets have been met and the ankle is pain-free under load.
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