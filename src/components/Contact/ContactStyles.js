const styles = {
  section: {
    width: "100%",
    padding: "110px 5% 100px",
    background:
      "radial-gradient(circle at top left, rgba(56,189,248,0.10), transparent 55%)," +
      "radial-gradient(circle at bottom right, rgba(59,130,246,0.10), transparent 55%)," +
      "#f5f7fb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    maxWidth: "1100px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
  },

  // LEFT INFO CARD
  infoCard: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 10px 28px rgba(15,23,42,0.12)",
    animation: "fadeInLeft 0.8s ease-out",
  },

  label: {
    fontSize: "14px",
    color: "#0084ff",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  title: {
    fontSize: "42px",
    fontWeight: "800",
    marginTop: "10px",
    marginBottom: "20px",
  },

  detailRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "18px",
    fontSize: "17px",
    color: "#333",
  },

  icon: {
    color: "#0084ff",
    fontSize: "26px",
    marginRight: "12px",
  },

  // FORM CARD
  formCard: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "18px",
    boxShadow: "0 10px 28px rgba(15,23,42,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    animation: "fadeInRight 0.8s ease-out",
  },

  input: {
    padding: "15px 18px",
    borderRadius: "10px",
    border: "1.5px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
    transition: "0.3s",
  },

  inputError: {
    borderColor: "#ff4d4d",
    boxShadow: "0 0 6px rgba(255,77,77,0.3)",
  },

  textarea: {
    padding: "15px 18px",
    borderRadius: "10px",
    border: "1.5px solid #cbd5e1",
    fontSize: "16px",
    minHeight: "130px",
    resize: "none",
  },

  cardHidden: {
    opacity: 0,
    transform: "translateY(18px)",
  },

  cardVisible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 600ms ease, transform 600ms ease",
  },

  button: {
    padding: "15px",
    background: "linear-gradient(135deg, #0ea5e9, #0369a1)",
    color: "#fff",
    fontSize: "17px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    transition: "transform 200ms ease, box-shadow 200ms ease, opacity 200ms",
    fontWeight: "700",
  },

  buttonHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 26px rgba(14,165,233,0.35)",
  },

  successMsg: {
    color: "green",
    fontSize: "15px",
    marginTop: "8px",
    fontWeight: "600",
  },

  errorMsg: {
    color: "red",
    fontSize: "14px",
    marginTop: "-10px",
    marginBottom: "5px",
  },

  // Keyframes (ADD THIS IN index.css)
};

export default styles;
