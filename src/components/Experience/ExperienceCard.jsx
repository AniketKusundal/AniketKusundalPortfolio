import React, { useState } from "react";
import styles from "./ExperienceStyles";

const ExperienceCard = ({ item, index, isVisible }) => {
  const [hover, setHover] = useState(false);

  return (
    <div style={styles.row}>
      {/* LEFT LINE POINT */}
      <div style={styles.lineContainer}>
        <div
          style={{
            ...styles.dot,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.5)",
            transition: `all 0.6s ease ${index * 0.2}s`,
          }}
          className={isVisible ? "exp-dot-pulse" : ""}
        ></div>

        <div
          style={{
            ...styles.line,
            height: isVisible ? "100%" : "0%",
            transition: `height 1s ease ${index * 0.2 + 0.3}s`,
          }}
        ></div>
      </div>

      {/* CONTENT CARD */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.card,
          ...(hover ? styles.cardHover : {}),
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0px)" : "translateX(40px)",
          transition: `all 0.7s ease ${index * 0.2 + 0.1}s`,
        }}
      >
        <h3 style={styles.role}>{item.role}</h3>
        <h4 style={styles.company}>{item.company}</h4>
        <p style={styles.duration}>{item.duration}</p>
        <p style={styles.description}>{item.description}</p>

        <div style={styles.techBox}>
          {item.tech.map((t, i) => (
            <span key={i} style={styles.tech}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
