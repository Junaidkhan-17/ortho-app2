import { useState, useRef, useEffect } from "react";

const ITEM_H = 44;
const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
const mins  = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
const ampm  = ["AM", "PM"];

function DrumCol({ items, colRef, isAp, onScroll }) {
  return (
    <div ref={colRef} onScroll={onScroll} style={{
      flex: isAp ? "0 0 72px" : 1,
      height: 220,
      overflowY: "scroll",
      scrollSnapType: "y mandatory",
      scrollbarWidth: "none",
    }}>
      <div style={{ height: 88 }} />
      {items.map((v) => (
        <div key={v} style={{
          height: ITEM_H,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scrollSnapAlign: "center",
          fontSize: 22,
          color: "#bbb",
          fontFamily: "'DM Sans', sans-serif",
          userSelect: "none",
          transition: "color .12s, font-size .12s",
        }}>{v}</div>
      ))}
      <div style={{ height: 88 }} />
    </div>
  );
}

export default function TimePickerPopup({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const hRef = useRef(null);
  const mRef = useRef(null);
  const aRef = useRef(null);

  const getSel = (el) => Math.round(el.scrollTop / ITEM_H);

  const highlight = () => {
    [[hRef, false], [mRef, false], [aRef, true]].forEach(([ref, isAp]) => {
      if (!ref.current) return;
      const sel = getSel(ref.current);
      ref.current.querySelectorAll("div[style]").forEach((el, i) => {
        // target only item divs (skip spacers)
        if (el.style.scrollSnapAlign !== "center") return;
        if (i === sel) {
          el.style.color = "#0ab5c8";
          el.style.fontSize = isAp ? "17px" : "24px";
          el.style.fontWeight = "600";
        } else {
          el.style.color = "#bbb";
          el.style.fontSize = "22px";
          el.style.fontWeight = "400";
        }
      });
    });
  };

  const handleDone = () => {
    const h = parseInt(hours[getSel(hRef.current)]);
    const m = mins[getSel(mRef.current)];
    const a = ampm[getSel(aRef.current)];
    const hour24 = a === "PM" ? (h === 12 ? 12 : h + 12) : (h === 12 ? 0 : h);
    onChange(`${String(hour24).padStart(2, "0")}:${m}`);
    setOpen(false);
  };

  useEffect(() => {
    if (open) setTimeout(highlight, 50);
  }, [open]);

  const displayTime = () => {
    if (!value) return "Select time";
    const [hh, mm] = value.split(":").map(Number);
    const ap = hh >= 12 ? "PM" : "AM";
    const h12 = hh % 12 || 12;
    return `${String(h12).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ap}`;
  };

  return (
    <>
      {/* Trigger field — same look as your other TextFields */}
      <div
        onClick={() => setOpen(true)}
        style={{
          flex: 1,
          height: 40,
          border: `1px solid ${open ? "#0ab5c8" : "#e0e0e0"}`,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: value ? "#111" : "#aaa",
          background: "#fff",
          boxShadow: open ? "0 0 0 3px rgba(10,181,200,0.12)" : "none",
          transition: "border-color .2s, box-shadow .2s",
        }}
      >
        <span>{displayTime()}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" style={{ opacity: .4 }}>
          <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>
        </svg>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            zIndex: 1300,
          }}
        >
          {/* Sheet */}
          <div style={{
            background: "#fff",
            borderRadius: "20px 20px 0 0",
            width: "100%",
            maxWidth: 480,
            paddingBottom: 24,
          }}>
            {/* Header */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px 8px",
              borderBottom: "0.5px solid #f0f0f0",
            }}>
              <button onClick={() => setOpen(false)} style={{
                background: "none", border: "none",
                fontSize: 14, color: "#999",
                fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
              }}>Cancel</button>
              <span style={{
                fontSize: 14, fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
              }}>Select time</span>
              <button onClick={handleDone} style={{
                background: "#0ab5c8", border: "none", color: "#fff",
                borderRadius: 8, padding: "6px 18px",
                fontSize: 14, fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
              }}>Done</button>
            </div>

            {/* Drum picker */}
            <div style={{ position: "relative", display: "flex", alignItems: "center", height: 220, margin: "0 20px" }}>
              {/* Highlight bar */}
              <div style={{
                position: "absolute", top: "50%", left: 0, right: 0,
                height: 44, transform: "translateY(-50%)",
                borderTop: "1.5px solid #0ab5c8", borderBottom: "1.5px solid #0ab5c8",
                background: "rgba(10,181,200,0.07)", pointerEvents: "none", zIndex: 1,
              }} />
              {/* Fade overlays */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to bottom,#fff,transparent)", pointerEvents: "none", zIndex: 2 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(to top,#fff,transparent)", pointerEvents: "none", zIndex: 2 }} />

              <DrumCol items={hours} colRef={hRef} onScroll={highlight} />
              <span style={{ fontSize: 22, color: "#ccc", padding: "0 2px", userSelect: "none", zIndex: 3 }}>:</span>
              <DrumCol items={mins}  colRef={mRef} onScroll={highlight} />
              <DrumCol items={ampm}  colRef={aRef} onScroll={highlight} isAp />
            </div>
          </div>
        </div>
      )}
    </>
  );
}