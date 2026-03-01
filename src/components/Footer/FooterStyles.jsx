// FooterStyles.js

const FooterStyles = {
  footer: {
    backgroundColor: "#0a0a0a",
    color: "#d1d5db",
    padding: "40px 0",
    marginTop: "80px",
    borderTop: "1px solid #1f2937",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    maxWidth: "900px",
    textAlign: "center",
    padding: "0 20px",
  },

  socialWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "26px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  icon: {
    fontSize: "28px",
    cursor: "pointer",
    transition: "0.3s",
  },

  iconHover: {
    color: "#fff",
  },
  
  accent: {
    width: "80px",
    height: "6px",
    borderRadius: "999px",
    margin: "0 auto 18px",
    background: "linear-gradient(90deg, #06b6d4, #07203b)",
  },
  
  backToTop: {
    marginTop: "18px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.04)",
    color: "#d1d5db",
    transition: "transform 180ms ease, box-shadow 180ms ease",
  },
  
  backToTopHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 10px 30px rgba(3,218,197,0.08)",
  },

  copy: {
    color: "#9ca3af", // light gray
    fontSize: "14px",
    letterSpacing: "0.5px",
  },
};

export default FooterStyles;
