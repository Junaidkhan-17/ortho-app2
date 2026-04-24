// src/pages/patients/ACLInjury.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import aclImg from "../../assets/aclImg.png";

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
    desc: "A physiotherapist will take you through a structured, phase-based programme. Quadriceps and hamstring strengthening are essential for protecting the new graft and restoring full knee function.",
  },
  {
    icon: <MdDirectionsWalk size={26} color="#0ab5c8" />,
    title: "Walking",
    desc: "You can begin walking with crutches and a hinged brace from the day after surgery. Full unassisted weight-bearing is typically introduced at 4–6 weeks, guided by your surgeon.",
  },
  {
    icon: <MdAcUnit size={26} color="#0ab5c8" />,
    title: "Ice Compress",
    desc: "Apply a covered ice-pack over the knee for 15–20 minutes at least four times daily, especially during the first two weeks, to reduce swelling and manage pain.",
  },
  {
    icon: <MdMedicalServices size={26} color="#0ab5c8" />,
    title: "Stitch Removal",
    desc: "Sutures are removed at 12–14 days post-surgery. The graft harvest site and arthroscopic portal wounds are both reviewed for healing at this appointment.",
  },
  {
    icon: <MdShower size={26} color="#0ab5c8" />,
    title: "Shower",
    desc: "Keep the wounds dry for at least 2 weeks. A waterproof dressing may allow earlier showering — confirm with your surgeon at your first follow-up.",
  },
  {
    icon: <MdFlashOn size={26} color="#0ab5c8" />,
    title: "Return to Sport",
    desc: "Jogging begins at 3–4 months; sport-specific training at 6 months; full return to competitive play at 9–12 months, once strength symmetry tests are passed.",
  },
];

const prepItems = [
  {
    icon: <FaHospital size={28} color="#0ab5c8" />,
    text: "Report to the hospital the evening before or the same morning. Bring ALL MRI scans, X-rays, and previous investigation reports.",
  },
  {
    icon: <FaPills size={28} color="#0ab5c8" />,
    text: "Bring all regular medications. Blood thinners and NSAIDs may need to be paused before surgery — discuss this with your surgeon in advance.",
  },
  {
    icon: <FaWalking size={28} color="#0ab5c8" />,
    text: "Bring crutches and arrange a companion to drive you home. A hinged knee brace will be fitted on the day and worn for the first several weeks.",
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
export default function ACLInjury() {
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
            ACL INJURY
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 2 }}
          >
            The anterior cruciate ligament (ACL) is one of the four major stabilising ligaments of the knee. It runs diagonally through the centre of the joint, connecting the femur to the tibia and preventing the shin bone from sliding forward.
          </Typography>
          <Typography
            sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "1rem", lineHeight: 1.8 }}
          >
            ACL tears are among the most common serious sports injuries — frequently occurring during sudden stops, pivoting movements, or awkward landings in sports such as football, basketball, and skiing.
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
              src={aclImg} 
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

      {/* HOW IT HAPPENS + SYMPTOMS */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#111", mb: 1.5 }}
            >
              <span style={{ color: "#0ab5c8" }}>01.</span> How does it happen?
            </Typography>
            <Typography
              sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}
            >
              Most ACL injuries are non-contact — the ligament tears under the force of the athlete's own movement. Common mechanisms include:
            </Typography>
            {[
              "Sudden deceleration followed by a change of direction (cutting movement).",
              "Pivoting on a planted foot with the knee close to full extension.",
              "Landing from a jump with the knee in a vulnerable valgus (knock-knee) position.",
              "A direct blow to the outer knee that forces it inward.",
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                <GiMedicines size={16} color="#0ab5c8" style={{ marginTop: 4, flexShrink: 0 }} />
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
              <span style={{ color: "#0ab5c8" }}>02.</span> Symptoms
            </Typography>
            {[
              "A loud, audible 'pop' at the time of injury — often felt and heard.",
              "Immediate, severe pain followed by the inability to continue playing.",
              "Rapid swelling of the knee developing within 1–2 hours of injury.",
              "Loss of full range of movement in the knee.",
              "A feeling of instability — the knee gives way during weight-bearing.",
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
                <TbActivityHeartbeat size={16} color="#0ab5c8" style={{ marginTop: 4, flexShrink: 0 }} />
                <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
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
            "ACL reconstruction is performed under general or spinal anaesthesia. The procedure is entirely arthroscopic — only small puncture holes are made; there is no large open incision.",
            "A graft is harvested — usually from the patient's own hamstring tendons or patellar tendon. This graft will replace the torn ACL and, over time, integrate fully into the knee as a living ligament.",
            "Bone tunnels are drilled precisely through the tibia and femur at the exact attachment points of the original ACL. The graft is passed through and fixed securely with screws or buttons.",
            "Physiotherapy begins from the day after surgery. The rehabilitation programme is the most important part of recovery — the surgery creates the foundation, but exercises rebuild the strength and neuromuscular control needed to return to sport safely.",
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

      {/* IF NOT OPERATED */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="What if it is not operated?" />
        <Typography
          sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mb: 1 }}
        >
          Some patients — particularly older or less active individuals — can manage without surgery. However, leaving an ACL-deficient knee untreated carries significant long-term risks:
        </Typography>
        {[
          "Repeated episodes of the knee giving way, leading to further cartilage and meniscus damage.",
          "Progressive joint damage and early-onset osteoarthritis.",
          "Inability to return to sports or activities involving pivoting, cutting, or jumping.",
          "Secondary injury to other structures — meniscus tears and cartilage lesions are far more common in unstable knees.",
        ].map((item, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 1, mt: 1 }}>
            <TbActivityHeartbeat size={16} color="#0ab5c8" style={{ marginTop: 4, flexShrink: 0 }} />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", lineHeight: 1.8 }}>
              {item}
            </Typography>
          </Box>
        ))}
        <Typography
          sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mt: 2, lineHeight: 1.8 }}
        >
          For active individuals and athletes, reconstruction is strongly recommended to restore stability, protect the joint, and allow a safe return to sport.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* RETURN TO SPORT */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="When can I return to sport?" />
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mb: 1 }}>
          Return to play is determined by:
        </Typography>
        {[
          "strength and symmetry testing — the reconstructed leg must reach 90%+ of the uninjured side.",
          "completion of all rehabilitation phases without pain or swelling.",
          "the type of sport and level of competition being returned to.",
        ].map((item, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <GiMedicines size={16} color="#0ab5c8" />
            <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem" }}>
              {item}
            </Typography>
          </Box>
        ))}
        <Typography sx={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: "0.95rem", mt: 2, lineHeight: 1.8 }}>
          Most athletes return to full competitive sport between 9 and 12 months after reconstruction. Rushing this timeline significantly increases the risk of re-rupture — patience through rehabilitation is essential.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "#f0f0f0" }} />

      {/* PREPARATION */}
      <Box sx={{ padding: { xs: "60px 20px", md: "60px 10%" } }}>
        <SectionTitle text="Preparation before the operation" />
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, justifyContent: "center" }}
        >
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