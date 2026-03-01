const styles = {
  section: {
    width: "100%",
    padding: "110px 5% 100px",
    background:
      "radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 55%)," +
      "radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 55%)," +
      "#eef3fb",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 5%",
  },

  header: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#0b2540",
  },

  label: {
    color: "#2563eb",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginTop: "6px",
    color: "#0f172a",
  },

  grid: {
    display: "grid",
    gap: "20px",
    marginTop: "32px",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    padding: "8px 4px",
  },

  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(241,247,255,0.98))",
    padding: "18px 16px",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid rgba(148,163,184,0.3)",
    transition: "all 0.22s ease",
    boxSizing: "border-box",
    boxShadow: "0 8px 22px rgba(15,23,42,0.08)",
    color: "#0b2540",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  cardHover: {
    transform: "translateY(-6px) scale(1.02)",
    borderColor: "#2563eb",
    boxShadow: "0 14px 32px rgba(37,99,235,0.18)",
    background: "linear-gradient(180deg, rgba(219,234,254,0.4), rgba(255,255,255,0.98))",
  },

  // entrance animation states
  cardHidden: {
    transform: "translateY(24px) scale(0.98)",
    opacity: 0,
    filter: "blur(2px)",
    transition: "opacity 420ms cubic-bezier(.2,.9,.3,1), transform 420ms cubic-bezier(.2,.9,.3,1), filter 420ms ease",
  },

  cardVisible: {
    transform: "translateY(0) scale(1)",
    opacity: 1,
    filter: "blur(0)",
  },

  icon: {
    width: "44px",
    height: "44px",
    marginBottom: "10px",
  },

  skillName: {
    color: "#0f172a",
    fontSize: "14px",
    fontWeight: "600",
    marginTop: "6px",
  },
};

export default styles;
