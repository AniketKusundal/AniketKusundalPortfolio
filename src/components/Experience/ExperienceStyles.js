const styles = {
  section: {
    width: "100%",
    padding: "110px 5% 100px",
    background:
      "radial-gradient(circle at top left, rgba(59,130,246,0.10), transparent 55%)," +
      "radial-gradient(circle at bottom right, rgba(56,189,248,0.12), transparent 55%)," +
      "#f4f7fb",
    transition: "all 0.7s ease",
  },
  connector: {
    position: "absolute",
    left: 38,
    top: 0,
    width: 4,
    height: "0%",
    background: "linear-gradient(180deg, rgba(0,123,255,0.9), rgba(0,212,255,0.7))",
    borderRadius: 2,
    transition: "height 1.1s ease",
    zIndex: 1,
  },

  heading: {
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "800",
    marginBottom: "56px",
    color: "#0f172a",
  },

  cardHover: {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: "0 18px 50px rgba(3,123,255,0.14)",
    border: "1px solid rgba(3,123,255,0.24)",
  },

  timeline: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
  },

  row: {
    display: "flex",
    width: "100%",
    marginBottom: "40px",
  },

  lineContainer: {
    width: "80px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  dot: {
    width: "18px",
    height: "18px",
    background: "#007bff",
    borderRadius: "50%",
    border: "3px solid white",
    boxShadow: "0 0 15px rgba(0, 123, 255, 0.5)",
  },

  line: {
    width: "4px",
    background: "linear-gradient(180deg, #007bff, #00d4ff)",
    borderRadius: "2px",
    flexGrow: 1,
    marginTop: "5px",
  },

  card: {
    flex: 1,
    padding: "22px 24px",
    background: "rgba(255,255,255,0.96)",
    borderRadius: "14px",
    boxShadow: "0 10px 26px rgba(15,23,42,0.12)",
    border: "1px solid rgba(148,163,184,0.25)",
  },

  role: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#007bff",
  },

  company: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "5px",
  },

  duration: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
    fontWeight: "600",
  },

  description: {
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.6",
    marginBottom: "15px",
  },

  techBox: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
  },

  tech: {
    padding: "6px 12px",
    borderRadius: "8px",
    background: "rgba(0,123,255,0.1)",
    color: "#007bff",
    fontSize: "13px",
    fontWeight: "600",
  },
};

export default styles;
