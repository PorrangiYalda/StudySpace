import React from "react";

export default function Feature({ color, label, title, desc, sparkle = {} }) {
  const cardStyle = {
    backgroundColor: color,
    borderRadius: "1rem",
    padding: "1.5rem",
    position: "relative",
    textAlign: "left",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    marginBottom: "2.5rem",
    overflow: "hidden",
  };

  const circleStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "#fff",
    border: "2px solid black",
    borderRadius: "50%",
    position: "absolute",
    top: "1rem",
    right: "1rem",
  };

  const sparkleStyle = {
    position: "absolute",
    top: sparkle.top || "10%",
    left: sparkle.left || "10%",
    fontSize: sparkle.size || "1.5rem",
    animation: "float 3s ease-in-out infinite",
    pointerEvents: "none",
  };

  return (
    <div style={cardStyle}>
      <div style={circleStyle}></div>
      {sparkle.icon && <div style={sparkleStyle}>{sparkle.icon}</div>}
      <div style={{ fontWeight: "600", marginBottom: "0.5rem" }}>{label}</div>
      <div style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{title}</div>
      <div style={{ fontSize: "0.95rem", color: "#374151", lineHeight: "1.6" }}>{desc}</div>
    </div>
  );
}
