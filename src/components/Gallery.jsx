import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

// ── Assets ──────────────────────────────────────────────────────────────────
import img1 from "../assets/bigImg.jpeg";
import img2 from "../assets/face.jpeg";
import img3 from "../assets/OT.png";
import img4 from "../assets/OT Group.png";
import img5 from "../assets/mapMah.jpg";

gsap.registerPlugin(ScrollTrigger);

// ── Simple aligned photo list ───────────────────────────────────────────────
const PHOTOS = [img1, img2, img3, img4, img5, img1];

export default function Gallery() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✨ Stagger animation (fade + slide up)
      gsap.to(cardRefs.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=DM+Sans:wght@300;400&display=swap');
      `}</style>

      <section ref={sectionRef} style={styles.section}>
        {/* ── Background ── */}
        <div style={styles.bgWrap}>
          <img src={img3} alt="" style={styles.bgImg} />
          <div style={styles.bgOverlay} />
        </div>

        {/* ── Heading ── */}
        <div style={styles.headingWrap}>
          <p style={styles.eyebrow}>Journey</p>
          <h2 style={styles.heading}>Gallery</h2>
          <div style={styles.rule} />
        </div>

        {/* ── GRID GALLERY ── */}
        <div style={styles.grid}>
          {PHOTOS.map((src, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              style={styles.card}
            >
              <img src={src} alt={`gallery-${i}`} style={styles.cardImg} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────
const styles = {
  section: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
  },

  bgWrap: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  },

  bgImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.45)",
  },

  bgOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
  },

  headingWrap: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    paddingTop: "60px",
  },

  eyebrow: {
    fontSize: "12px",
    letterSpacing: "4px",
    textTransform: "uppercase",
    color: "#0ab5c8",
    marginBottom: "8px",
  },

  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(48px, 7vw, 90px)",
    color: "#fff",
    margin: 0,
  },

  rule: {
    width: "50px",
    height: "3px",
    background: "#0ab5c8",
    margin: "16px auto",
  },

  // GRID LAYOUT
  grid: {
    position: "relative",
    zIndex: 5,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "24px",
    padding: "60px",
  },

  // CARD
  card: {
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    transform: "translateY(40px)",
    opacity: 0,
    transition: "transform 0.3s ease",
  },

  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    aspectRatio: "4/3",
  },
};