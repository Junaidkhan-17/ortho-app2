import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import mahaMap from "../assets/mapMah.jpg";
import Footer from "./Footer";
import "./Appointment.css";
import Slider from "@mui/material/Slider";

const locations = [
  {
    name: "",
    address: "VIJAYA MULTISPECIALITY HOSPITAL 59, Mankapur Ring Rd, Deendayal Nagar440022",
    extra: "Near XYZ Landmark",
    timing: "Monday and Friday – 4 PM to 6 PM",
  }
];

const services = [
  "General Consultation",
  "Follow-up Visit",
  "Arthroscopy",
  "Meniscus Injury of Knee",
  "ACL Injury of Knee",
  "PCL Injury of Knee",
  "Footballer's Ankle",
  "Frozen Shoulder",
  "Other",
];

const iconBox = {
  borderRadius: "50%",
  background: "#0ab5c8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    "& fieldset": { borderColor: "#e0e0e0" },
    "&:hover fieldset": { borderColor: "#0ab5c8" },
    "&.Mui-focused fieldset": { borderColor: "#0ab5c8" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    "&.Mui-focused": { color: "#0ab5c8" },
  },
};

const dateInputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    "& fieldset": { borderColor: "#e0e0e0" },
    "&:hover fieldset": { borderColor: "#0ab5c8" },
    "&.Mui-focused fieldset": { borderColor: "#0ab5c8" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    "&.Mui-focused": { color: "#0ab5c8" },
  },
  "& input[type='date']:not(:focus)::-webkit-datetime-edit": { display: "none" },
  "& input[type='date']::-webkit-calendar-picker-indicator": { opacity: 0, width: 0, padding: 0 },
};

const timeInputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    "& fieldset": { borderColor: "#e0e0e0" },
    "&:hover fieldset": { borderColor: "#0ab5c8" },
    "&.Mui-focused fieldset": { borderColor: "#0ab5c8" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.875rem",
    "&.Mui-focused": { color: "#0ab5c8" },
  },
  "& input[type='time']:not(:focus)::-webkit-datetime-edit": { display: "none" },
  "& input[type='time']::-webkit-calendar-picker-indicator": { opacity: 0, width: 0, padding: 0 },
};



export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }; 

  const RECIPIENT = "919175755946";

const handleSubmit = () => {
  if (!form.name || !form.date || !form.time || !form.service) {
    setStatus("error");
    setErrorMsg("Please fill in all required fields.");
    return;
  }

  const dt = new Date(`${form.date}T${form.time}`);
  const formattedDate = dt.toLocaleDateString("en-IN", {
    weekday: "short", year: "numeric", month: "short", day: "numeric",
  });
  const formattedTime = dt.toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit",
  });

  const message = [
    " New Appointment Request",
    "",
    ` Name:    ${form.name}`,
    form.phone ? `Phone:   ${form.phone}` : null,
    ` Date:    ${formattedDate}`,
    ` Time:    ${formattedTime}`,
    ` Service: ${form.service}`,
    form.notes ? `Notes:   ${form.notes}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const url = `https://wa.me/${RECIPIENT}?text=${encodeURIComponent(message)}`;

  // create a hidden anchor and click it — most reliable cross-browser method
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setStatus("success");
  setForm({ name: "", phone: "", date: "", time: "", service: "", notes: "" });
};

  return (
    <>
      {/* APPOINTMENT SECTION */}
      <Box
        component="section"
        sx={{
          padding: { xs: "60px 20px", md: "60px 4%" },
          paddingRight: { xs: "20px", md: "4%" },
          background: "#fff",

          // ✅ FIXED RESPONSIVE ALIGNMENT
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8rem", sm: "1.8rem", md: "2rem", lg: "2.8rem" },
            fontWeight: 700,
            fontFamily: "'Playfair Display', serif",
            color: "#111",
            mb: 5,
            whiteSpace: "nowrap",

            // RESPONSIVE TITLE ALIGNMENT
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.2px #999",
              fontWeight: 600,
              marginRight: 8,
            }}
          >
            Appoint
          </span>
          ment .
        </Typography>

        {/* Body */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          {/* Map */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", md: 240 },
              height: { xs: 200, md: 380 },

              backgroundImage: `url(${mahaMap})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "#ffffff",

              borderRadius: "16px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Nagpur Dot */}
            <Box
              className="nagpur-dot"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/FG8mHHkC87JxuaF86",
                  "_blank"
                )
              }
              sx={{
                position: "absolute",
                top: { xs: "33%", md: "40%" },
                left: { xs: "56%", md: "74%" },
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            >
              <Box className="dot-core" />
              <Box className="dot-ring ring1" />
              <Box className="dot-ring ring2" />
            </Box>
          </Box>

          {/* Info cards */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: { xs: 0,lg: 19 },
              marginRight: { xs: 0, md: 100},
              gap: 3,
              flex: 1,
              maxWidth: 780,
              alignItems: "flex-start",
              width: "100%",
            }}
          >

            

            
            {/* Appointment Form */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: { xs: "100%",md: "70%", lg: "100%" }, marginRight: { xs: 0, md: -1 } }}>

              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#111",
                }}
              >
                Book an Appointment
              </Typography>

              <TextField
                label="Your Name *"
                name="name"
                value={form.name}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={inputSx}
              />

              <TextField
                label="Personal Phone Number (optional)"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={inputSx}
              />

              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  size="small"
                  fullWidth
                  slotProps={{
                    inputLabel: { shrink: true },
                    input: { notched: true },
                  }}
                  sx={dateInputSx}
                />

                <Box sx={{ display: "flex", gap: 1, flex: 1 }}>
  {/* Hour */}
                  <TextField
                    select
                    size="small"
                    fullWidth
                    label="Hour"
                    value={form.time ? (() => { const h = parseInt(form.time.split(":")[0]); return String(h % 12 || 12).padStart(2, "0"); })() : ""}
                    onChange={(e) => {
                      const currentHH = form.time ? parseInt(form.time.split(":")[0]) : 0;
                      const isPM = currentHH >= 12;
                      const mm = form.time ? form.time.split(":")[1] : "00";
                      let newH = parseInt(e.target.value);
                      if (isPM) newH = newH === 12 ? 12 : newH + 12;
                      else newH = newH === 12 ? 0 : newH;
                      setForm((p) => ({ ...p, time: `${String(newH).padStart(2, "0")}:${mm}` }));
                    }}
                    sx={inputSx}
                  >
                    {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map((h) => (
                      <MenuItem key={h} value={h}>{h}</MenuItem>
                    ))}
                  </TextField>

                  {/* Minute */}
                  <TextField
                    select
                    size="small"
                    fullWidth
                    label="Min"
                    value={form.time ? form.time.split(":")[1] : ""}
                    onChange={(e) => {
                      const hh = form.time ? form.time.split(":")[0] : "00";
                      setForm((p) => ({ ...p, time: `${hh}:${e.target.value}` }));
                    }}
                    sx={inputSx}
                  >
                    {["00", "15", "30", "45"].map((m) => (
                      <MenuItem key={m} value={m}>{m}</MenuItem>
                    ))}
                  </TextField>

                  {/* AM / PM */}
                  <TextField
                    select
                    size="small"
                    fullWidth
                    label="AM/PM"
                    value={form.time ? (parseInt(form.time.split(":")[0]) >= 12 ? "PM" : "AM") : "AM"}
                    onChange={(e) => {
                      const hh = form.time ? parseInt(form.time.split(":")[0]) : 0;
                      const mm = form.time ? form.time.split(":")[1] : "00";
                      let newH = hh % 12;
                      if (e.target.value === "PM") newH = newH === 0 ? 12 : newH + 12;
                      else newH = newH === 0 ? 0 : newH;
                      setForm((p) => ({ ...p, time: `${String(newH).padStart(2, "0")}:${mm}` }));
                    }}
                    sx={inputSx}
                  >
                    <MenuItem value="AM">AM</MenuItem>
                    <MenuItem value="PM">PM</MenuItem>
                  </TextField>
</Box>
              </Box>

              <TextField
                label="Service *"
                name="service"
                value={form.service}
                onChange={handleChange}
                select
                size="small"
                fullWidth
                sx={inputSx}
              >
                {services.map((s) => (
                  <MenuItem
                    key={s}
                    value={s}
                    sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}
                  >
                    {s}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Notes (optional)"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                size="small"
                fullWidth
                multiline
                rows={2}
                sx={inputSx}
              />

              {status === "success" && (
                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#2e7d32",
                    background: "#e8f5e9",
                    borderRadius: "8px",
                    padding: "10px 14px",
                  }}
                >
                    Appointment request check on whatsapp &
                    wait for confirmation via WhatsApp.
                </Typography>
              )}

              {status === "error" && (
                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#c62828",
                    background: "#fdecea",
                    borderRadius: "8px",
                    padding: "10px 14px",
                  }}
                >
                  {errorMsg}
                </Typography>
              )}

              <Button
                onClick={handleSubmit}
                disabled={status === "loading"}
                variant="contained"
                fullWidth
                sx={{
                  background: "#0ab5c8",
                  borderRadius: "10px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  padding: "10px",
                  boxShadow: "none",
                  "&:hover": { background: "#089aaa", boxShadow: "none" },
                  "&:disabled": { background: "#b0bec5" },
                }}
              >
                {status === "loading" ? "Opening SMS..." : "Send Appointment Request"}
              </Button>

            </Box>
          </Box>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          background: "#1a1a1a",
          color: "#ccc",
          padding: { xs: "40px 20px", md: "40px 4%" },
          paddingRight: { xs: "20px", md: "64vw" },
        }}
      >
        <Footer />
        
      </Box>
    </>
  );
}
