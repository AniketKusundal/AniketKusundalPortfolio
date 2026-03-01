import React, { useState } from "react";
import styles from "./AboutStyles";

const ProfileImage = ({ src, alt, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      style={{
        ...styles.right,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(50px)",
        transition: "all 0.8s ease-out 0.3s",
      }}
    >
      <div style={styles.imgWrapper}>
        <img
          src={src}
          alt={alt}
          style={{
            ...styles.img,
            transform: isVisible && imageLoaded ? "scale(1)" : "scale(0.95)",
            filter: imageLoaded ? "brightness(1)" : "brightness(0.9)",
          }}
          onLoad={() => setImageLoaded(true)}
        />
        <div style={styles.glow}></div>
        <div style={styles.decorativeBox}></div>
      </div>
    </div>
  );
};

export default ProfileImage;
