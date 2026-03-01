import React, { useState } from "react";
import styles from "./AboutStyles";

const AboutContent = ({ data, isVisible }) => {
  return (
    <div
      style={{
        ...styles.left,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-50px)",
        transition: "all 0.8s ease-out 0.2s",
      }}
    >
      <p style={styles.sectionLabel}>{data.label}</p>
      <h2 style={styles.title}>{data.title}</h2>
      <p style={styles.desc}>{data.bio}</p>

      {data.stats && (
        <div style={styles.statsContainer}>
          {data.stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={0.4 + index * 0.1} />
          ))}
        </div>
      )}
    </div>
  );
};

const StatCard = ({ stat, isVisible, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.statBox,
        ...(isHovered ? styles.statBoxHover : {}),
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${delay}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.statNumber}>{stat.number}</div>
      <div style={styles.statLabel}>{stat.label}</div>
    </div>
  );
};

export default AboutContent;
