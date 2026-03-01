const styles = {
  section: {
    padding: "110px 5% 100px",
    background:
      "radial-gradient(circle at top left, rgba(56,189,248,0.10), transparent 55%)," +
      "radial-gradient(circle at bottom right, rgba(59,130,246,0.10), transparent 55%)," +
      "#f4f7fb",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#0b2545",
  },
  label: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "1.6px",
    color: "#06b6d4",
    marginBottom: "8px",
  },
  heading: {
    fontSize: "30px",
    fontWeight: 800,
    color: "#07203b",
    margin: 0,
    marginBottom: "18px",
  },
  accent: {
    width: "88px",
    height: "8px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #06b6d4, #07203b)",
    marginBottom: "28px",
  },
  grid: {
    display: "grid",
    gridAutoRows: "1fr",
    gap: "24px",
    justifyContent: "center",
    marginTop: "8px",
    width: "100%",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "18px",
    boxShadow: "0 6px 18px rgba(9,30,63,0.08)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "360px",
    overflow: "hidden",
    transition: "transform 200ms ease, box-shadow 200ms ease",
  },
  title: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#07203b",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#07203b",
    margin: 0,
  },
  description: {
    fontSize: "14px",
    color: "#274055",
    marginTop: "8px",
    flex: 1,
    overflow: "hidden",
  },
  techList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "12px",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "12px",
  },
  techLine: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#345",
    opacity: 0.9,
  },
  techItem: {
    background: "#f1f7ff",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    color: "#0b2545",
  },
  repoButtons: {
    display: "flex",
    gap: "8px",
    marginTop: "14px",
    justifyContent: "flex-end",
  },
  repoBtn: {
    background: "#0b2545",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 14px 34px rgba(9,30,63,0.12)",
  },
  cardHidden: {
    opacity: 0,
    transform: "translateY(18px)",
  },
  cardVisible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 500ms ease, transform 500ms ease",
  },
};

export default styles;
