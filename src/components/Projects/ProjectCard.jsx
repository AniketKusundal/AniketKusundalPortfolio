import React, { useState } from "react";
import styles from "./ProjectsStyles";

const ProjectCard = ({ title, description, tech, repo }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, overflow: "hidden" }}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.description}>{description}</p>

        <div style={styles.techStack}>
          {tech.map((item, index) => (
            <span key={index} style={styles.techItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {repo && (
        <div style={styles.repoButtons}>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            style={styles.repoBtn}
            aria-label={`Open ${title} repository`}
            title={`Open ${title} repository`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 0.5C5.7 0.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.1 1.7 2.6 1.2.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.4-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2 1-.3 2.1-.4 3.1-.4 1 0 2.1.1 3.1.4 2.3-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.5-2.6 5.5-5.1 5.8.4.4.7 1.1.7 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
