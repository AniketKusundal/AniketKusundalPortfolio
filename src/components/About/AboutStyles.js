const styles = {
  about: {
    width: "100%",
    padding: "110px 5% 100px",
    background:
      "radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 55%)," +
      "radial-gradient(circle at bottom right, rgba(56,189,248,0.14), transparent 55%)," +
      "#f3f6fb",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    flexWrap: "wrap-reverse",
    maxWidth: "1300px",
    margin: "0 auto",
    width: "100%",
  },

  // TEXT CONTENT (LEFT)
  left: {
    flex: "1 1 380px",
    minWidth: "260px",
    textAlign: "left",
  },

  sectionLabel: {
    fontSize: "13px",
    fontWeight: "700",
    color: "#2563eb",
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "15px",
  },

  title: {
    fontSize: "46px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "#0f172a",
    lineHeight: "1.2",
    letterSpacing: "-1px",
  },

  desc: {
    fontSize: "17px",
    color: "#4b5563",
    lineHeight: "1.85",
    marginBottom: "35px",
    fontWeight: "400",
    letterSpacing: "0.4px",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "22px",
    marginTop: "40px",
  },

  statBox: {
    padding: "22px 20px",
    background: "rgba(15,23,42,0.02)",
    borderRadius: "16px",
    border: "1px solid rgba(148,163,184,0.35)",
    boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
    transition: "all 0.25s ease",
  },

  statBoxHover: {
    background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(37,99,235,0.04))",
    borderColor: "rgba(59,130,246,0.6)",
    transform: "translateY(-4px)",
  },

  statNumber: {
    fontSize: "30px",
    fontWeight: "800",
    color: "#1d4ed8",
    marginBottom: "8px",
  },

  statLabel: {
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },

  // IMAGE (RIGHT)
  right: {
    flex: "1 1 340px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  imgWrapper: {
    position: "relative",
    width: "320px",
    maxWidth: "75vw",
    height: "400px",
    borderRadius: "25px",
    overflow: "hidden",
    boxShadow: "0 30px 70px rgba(0, 100, 200, 0.25)",
    border: "4px solid rgba(0, 123, 255, 0.2)",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "21px",
    transition: "transform 0.8s ease-out, filter 0.8s ease-out",
  },

  glow: {
    position: "absolute",
    inset: "-50px",
    borderRadius: "25px",
    background: "radial-gradient(circle, rgba(0,123,255,0.35), rgba(34,197,94,0.15))",
    filter: "blur(80px)",
    zIndex: -1,
  },

  decorativeBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    background: "linear-gradient(135deg, rgba(0,132,255,0.1) 0%, transparent 50%, rgba(34,197,94,0.05) 100%)",
    pointerEvents: "none",
    zIndex: 2,
  },
};

export default styles;
