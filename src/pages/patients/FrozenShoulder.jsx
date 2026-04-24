// src/pages/patients/FrozenShoulder.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FS from "../../assets/FS.jpg";
import { FaHospital, FaPills, FaWalking } from "react-icons/fa";
import {
  MdSportsGymnastics,
  MdDirectionsWalk,
  MdAcUnit,
  MdMedicalServices,
  MdShower,
  MdFlashOn,
} from "react-icons/md";
import { GiShoulderArmor, GiScalpel, GiMedicines } from "react-icons/gi";
import { TbActivityHeartbeat } from "react-icons/tb";

// ── Data ─────────────────────────────────────────────────────────────────────
const afterOpItems = [
  {
    icon: <MdSportsGymnastics size={26} color="#0ab5c8" />,
    title: "Physiotherapy",
    desc: "A physiotherapist will guide you through a structured programme of shoulder mobility and strengthening exercises. Consistency is crucial for regaining full range of motion.",
  },
  {
    icon: <MdDirectionsWalk size={26} color="#0ab5c8" />,
    title: "Pendulum Exercises",
    desc: "Gentle pendulum swings of the arm are started as early as the day after surgery to prevent re-stiffening and promote joint fluid circulation.",
  },
  {
    icon: <MdAcUnit size={26} color="#0ab5c8" />,
    title: "Ice Compress",
    desc: "Apply an ice-pack wrapped in a dry towel over the shoulder for 15–20 minutes, at least four times a day, to manage post-operative pain and swelling.",
  },
  {
    icon: <MdMedicalServices size={26} color="#0ab5c8" />,
    title: "Stitch Removal",
    desc: "Arthroscopic portals are small; stitches (if any) are removed 10–14 days after surgery. Many portal wounds close on their own without sutures.",
  },
  {
    icon: <MdShower size={26} color="#0ab5c8" />,
    title: "Shower",
    desc: "Avoid wetting the shoulder wound for 2 weeks. Showering is permitted once the wounds are confirmed healed by your surgeon.",
  },
  {
    icon: <MdFlashOn size={26} color="#0ab5c8" />,
    title: "Return to Activities",
    desc: "Light desk work: 3–4 weeks. Overhead activities and sport: 3–6 months depending on the degree of stiffness released and rehabilitation progress.",
  },
];

const prepItems = [
  {
    icon: <FaHospital size={28} color="#0ab5c8" />,
    text: "Report to hospital the night before or the same morning. Bring ALL your MRI scans, X-rays, and previous reports.",
  },
  {
    icon: <FaPills size={28} color="#0ab5c8" />,
    text: "Inform the surgical team of all regular medications. Bring them with you on the day of the procedure.",
  },
  {
    icon: <FaWalking size={28} color="#0ab5c8" />,
    text: "Arrange for a companion to drive you home after surgery. You will not be able to drive yourself due to the anaesthetic and shoulder immobilisation.",
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
export default function FrozenShoulder() {
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
            FROZEN SHOULDER
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 2 }}
          >
            Frozen shoulder (adhesive capsulitis) is a condition in which the shoulder joint capsule becomes inflamed, thickened, and tight — resulting in severe pain and a progressive loss of shoulder movement.
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8 }}
          >
            It most commonly affects people between 40 and 60 years of age and may develop after a period of immobilisation, injury, or without any obvious cause.
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
              src={FS}   // 👈 your image
              alt="Frozen Shoulder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* STAGES + SYMPTOMS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}
            >
              <span style={{ color: "#0ab5c8" }}>01.</span> The three stages
            </Typography>
            {[
              { stage: "Freezing (2–9 months)", desc: "Gradual onset of shoulder pain, especially at night. Movement becomes increasingly painful and limited." },
              { stage: "Frozen (4–12 months)", desc: "Pain may reduce slightly but the shoulder remains very stiff. Daily activities such as dressing become difficult." },
              { stage: "Thawing (5–26 months)", desc: "Shoulder mobility gradually returns. Most patients recover fully, though it can take 1–3 years without treatment." },
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1.5 }}>
                <TbActivityHeartbeat size={16} color="#0ab5c8" style={{ marginTop: 4, flexShrink: 0 }} />
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
                  <strong>{item.stage}:</strong> {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}
            >
              <span style={{ color: "#0ab5c8" }}>02.</span> Why arthroscopy helps
            </Typography>
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              When physiotherapy and injections fail to restore movement, arthroscopic capsular release is a highly effective procedure. Using a fine telescope, the tight capsule is carefully divided at key points to immediately restore movement. Benefits include:
            </Typography>
            {[
              "Instant improvement in range of motion.",
              "Minimal incisions — only small portal punctures.",
              "Quick recovery compared to open release.",
              "Physiotherapy after surgery gives lasting results.",
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                <GiMedicines size={16} color="#0ab5c8" />
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* WHAT ACTUALLY HAPPENS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="What actually happens during surgery?" />
        <Box component="ol" sx={{ pl: 3, m: 0 }}>
          {[
            "The procedure is performed under general or regional anaesthesia with the patient positioned for clear shoulder access.",
            "Small portal incisions are made and a fine telescope is inserted into the shoulder joint. The tight, thickened capsule is identified and carefully released using a small motorised shaver or radiofrequency device.",
            "The shoulder is gently manipulated at the end of the procedure to confirm full movement is restored. Physiotherapy begins the very next day.",
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

      {/* RETURN TO ACTIVITIES */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="When can I return to normal activities?" />
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mb: 1 }}>
          Recovery timeline depends on:
        </Typography>
        {[
          "the stage of frozen shoulder at the time of surgery.",
          "dedication to the post-operative physiotherapy programme.",
          "your occupation — desk work returns sooner than manual labour.",
        ].map((item, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <GiMedicines size={16} color="#0ab5c8" />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem" }}>
              {item}
            </Typography>
          </Box>
        ))}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mt: 2, lineHeight: 1.8 }}>
          Most patients notice immediate improvement in shoulder movement following surgery. Light office work can resume within 3–4 weeks, with full functional recovery typically achieved by 3–6 months.
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