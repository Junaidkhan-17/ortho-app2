// src/pages/patients/MeniscusInjury.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import meniscustears from "../../assets/meniscustears.jpg";

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
    desc: "A physiotherapist will design a rehabilitation programme to restore knee strength, stability, and range of motion. Follow the schedule carefully to achieve the best outcome.",
  },
  {
    icon: <MdDirectionsWalk size={26} color="#0ab5c8" />,
    title: "Walking",
    desc: "For a partial meniscectomy (removal), walking with full weight-bearing is usually possible within 1–2 days. Repair surgery requires crutches for 4–6 weeks.",
  },
  {
    icon: <MdAcUnit size={26} color="#0ab5c8" />,
    title: "Ice Compress",
    desc: "Apply an ice-pack wrapped in a dry towel to the knee for 15–20 minutes at least four times daily. This is especially important in the first week to control swelling.",
  },
  {
    icon: <MdMedicalServices size={26} color="#0ab5c8" />,
    title: "Stitch Removal",
    desc: "Portal stitches are removed at 10–14 days. Arthroscopic wounds are very small and typically heal without complication.",
  },
  {
    icon: <MdShower size={26} color="#0ab5c8" />,
    title: "Shower",
    desc: "Avoid wetting the knee wounds for the first 2 weeks. A full shower is permitted once the wound is dry and confirmed healed.",
  },
  {
    icon: <MdFlashOn size={26} color="#0ab5c8" />,
    title: "Return to Sport",
    desc: "After meniscectomy: jogging at 4–6 weeks, sport at 6–8 weeks. After repair: sport is typically allowed at 4–6 months once strength and stability are restored.",
  },
];

const prepItems = [
  {
    icon: <FaHospital size={28} color="#0ab5c8" />,
    text: "Report to the hospital the evening before or the same morning. Bring ALL MRI scans, X-rays, and previous investigation reports.",
  },
  {
    icon: <FaPills size={28} color="#0ab5c8" />,
    text: "Bring all regular medications and inform the team. Blood thinners may need to be paused — discuss this with your surgeon in advance.",
  },
  {
    icon: <FaWalking size={28} color="#0ab5c8" />,
    text: "Bring crutches or a walking stick. You may need them for a few days to weeks depending on the type of surgery performed.",
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
export default function MeniscusInjury() {
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
            MENISCUS INJURY
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 2 }}
          >
            The menisci are two C-shaped wedges of fibrocartilage that sit between the thigh bone and shin bone in the knee, acting as shock absorbers and stabilisers.
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8 }}
          >
            A meniscus tear commonly occurs during twisting or pivoting sports movements, or through degenerative wear in older patients. It is one of the most frequent knee injuries treated by arthroscopic surgery.
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
                src={meniscustears}
                alt="ACL Injury"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* SYMPTOMS + TYPES */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}
            >
              <span style={{ color: "#0ab5c8" }}>01.</span> Symptoms
            </Typography>
            {[
              "Pain along the inner or outer knee joint line.",
              "Swelling that develops over 24–48 hours after injury.",
              "Locking or catching — the knee may get stuck and be unable to straighten fully.",
              "Giving way — a sense of instability during weight-bearing activities.",
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
              Accurate diagnosis determines the correct surgical approach:
            </Typography>
            {[
              "MRI: Gold standard — shows tear location, pattern (horizontal, radial, bucket-handle), and associated ligament damage.",
              "X-ray: Useful to rule out bone fractures or arthritic changes.",
              "Clinical tests: McMurray's and Thessaly's tests help localise the injury during examination.",
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
            "Small, stable tears in older patients may be managed conservatively with rest, physiotherapy, and anti-inflammatory medication — many settle without surgery.",
            "Arthroscopic partial meniscectomy: The torn portion of the meniscus is trimmed and removed through small puncture holes. Recovery is rapid and most patients walk within a day.",
            "Arthroscopic meniscus repair: Suitable for tears in the outer vascular zone — particularly in younger patients. The torn edges are stitched back together to preserve meniscal tissue. Recovery takes longer but protects long-term joint health.",
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
          Return to activity depends on:
        </Typography>
        {[
          "whether a repair or removal was performed.",
          "the size, location, and pattern of the tear.",
          "muscle strength recovery and physiotherapy progress.",
        ].map((item, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <GiMedicines size={16} color="#0ab5c8" />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem" }}>
              {item}
            </Typography>
          </Box>
        ))}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mt: 2, lineHeight: 1.8 }}>
          After meniscectomy, most athletes return to sport by 6–8 weeks. After a repair, the protected healing period means return to full sport is typically at 4–6 months.
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