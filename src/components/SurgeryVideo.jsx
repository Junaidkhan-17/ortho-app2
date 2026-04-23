// src/components/SurgeryVideos.jsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

/**
 * SurgeryVideos — reusable video gallery section
 *
 * Props:
 * @param {string}  title     — section heading (default: "In The Theatre")
 * @param {string}  highlight — the italic teal word in the title (default: "Theatre")
 * @param {Array}   videos    — array of { title, src, type, thumbnail? }
 *                              type: "local" | "youtube"
 *                              thumbnail: optional poster image for local videos
 */
export default function SurgeryVideos({
  title = "In The Theatre",
  highlight = "Theatre",
  videos = [],
}) {
  const [active, setActive] = useState(null);

  const parts = title.split(highlight);

  return (
    <>
      <Box sx={{ padding: { xs: "60px 20px", md: "80px 10%" } }}>
        {/* Heading */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 6 }}>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "1.6rem", md: "2rem" },
              color: "#111",
              whiteSpace: "nowrap",
            }}
          >
            {parts[0]}
            <span style={{ color: "#0ab5c8", fontStyle: "italic" }}>{highlight}</span>
            {parts[1]}
          </Typography>
          <Divider sx={{ flex: 1, borderColor: "#ddd" }} />
        </Box>

        {/* Thumbnail grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {videos.map((video, i) => (
            <Box key={i} onClick={() => setActive(video)} sx={{ cursor: "pointer" }}>
              {/* Card */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e0f0f3",
                  aspectRatio: "16/9",
                  background: "#111",
                  "&:hover .play-btn": { transform: "translate(-50%, -50%) scale(1.12)" },
                  "&:hover": { boxShadow: "0 8px 32px rgba(10,181,200,0.15)" },
                  transition: "box-shadow 0.2s ease",
                }}
              >
                {/* Thumbnail */}
                {video.thumbnail ? (
                  <Box
                    component="img"
                    src={video.thumbnail}
                    alt={video.title}
                    sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : video.type === "youtube" ? (
                  <Box
                    component="img"
                    src={`https://img.youtube.com/vi/${getYouTubeId(video.src)}/hqdefault.jpg`}
                    alt={video.title}
                    sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  // Local video — first frame as thumbnail
                  <Box
                    component="video"
                    src={video.src}
                    muted
                    preload="metadata"
                    sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                )}

                {/* Dark overlay */}
                <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />

                {/* Play button */}
                <Box
                  className="play-btn"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#0ab5c8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.2s ease",
                    boxShadow: "0 4px 20px rgba(10,181,200,0.5)",
                  }}
                >
                  <PlayArrowIcon sx={{ color: "#fff", fontSize: "2rem" }} />
                </Box>
              </Box>

              {/* Title */}
              {video.title && (
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#111",
                    mt: 1.5,
                  }}
                >
                  {video.title}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* MODAL POPUP PLAYER */}
      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "95vw", md: "75vw" },
            maxWidth: 1000,
            background: "#000",
            borderRadius: "14px",
            overflow: "hidden",
            outline: "none",
            boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={() => setActive(null)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 10,
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              "&:hover": { background: "#0ab5c8" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Player */}
          <Box sx={{ aspectRatio: "16/9", width: "100%" }}>
            {active?.type === "local" ? (
              <video
                src={active.src}
                controls
                autoPlay
                style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
              />
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={active ? `${active.src}?autoplay=1` : ""}
                title={active?.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              />
            )}
          </Box>

          {/* Video title inside modal */}
          {active?.title && (
            <Box sx={{ padding: "12px 20px", background: "#111" }}>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#fff",
                }}
              >
                {active.title}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}

function getYouTubeId(src) {
  return src?.split("/embed/")[1]?.split("?")[0] ?? "";
}