const styles = {
  section: {
    width: "100%",
    padding: "110px 5% 100px",
    background:
      "radial-gradient(circle at top left, rgba(56,189,248,0.10), transparent 55%)," +
      "radial-gradient(circle at bottom right, rgba(59,130,246,0.10), transparent 55%)," +
      "#f5f7fb",
    boxSizing: "border-box",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    position: "relative",
    padding: "20px 0",
    width: "100%",           // FIX 1
    overflow: "visible",     // FIX 2
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  label: {
    fontSize: "13px",
    fontWeight: 700,
    color: "#06b6d4",
    letterSpacing: "1.6px",
    marginBottom: "6px",
  },

  title: {
    fontSize: "30px",
    fontWeight: 800,
    color: "#0f172a",
    margin: 0,
  },

  timeline: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr 70px 1fr",
    gap: "18px",
    alignItems: "start",
    marginTop: "30px",
  },

  verticalLine: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: 0,
    bottom: 0,
    width: "3px",
    background: "linear-gradient(180deg, #06b6d4, #0369a1)",
    borderRadius: "999px",
    opacity: 0.95,
    zIndex: 1,
  },

  dotWrap: {
    gridColumn: "2 / 3",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },

  dot: {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "#fff",
    border: "4px solid #06b6d4",
    boxShadow: "0 6px 20px rgba(3,105,161,0.12)",
  },

  card: {
    background: "#ffffff",
    padding: "18px 16px",
    borderRadius: "12px",
    boxShadow: "0 10px 28px rgba(15,23,42,0.10)",
    width: "100%",                // FIX 3
    maxWidth: "100%",             // FIX 4
    boxSizing: "border-box",      // FIX 5
    zIndex: 2,
  },

  leftCardContainer: {
    gridColumn: "1 / 2",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "20px",
    position: "relative",
  },

  rightCardContainer: {
    gridColumn: "3 / 4",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "20px",
    position: "relative",
  },

  degree: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#07203b",
    marginBottom: "6px",
  },

  institute: {
    fontSize: "14px",
    color: "#334155",
    marginBottom: "8px",
  },

  period: {
    fontSize: "13px",
    color: "#64748b",
    marginBottom: "10px",
  },

  desc: {
    fontSize: "14px",
    color: "#475569",
    lineHeight: 1.6,
  },

  cardHidden: {
    opacity: 0,
    transform: "translateY(20px)",
  },

  cardVisible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 600ms ease, transform 600ms ease",
  },

  cardConnectorLeft: {
    display: "none",       // FIX 6 — HIDE ON ALL DEVICES
  },

  cardConnectorRight: {
    display: "none",       // FIX 7 — HIDE ON ALL DEVICES
  }
};

export default styles;
