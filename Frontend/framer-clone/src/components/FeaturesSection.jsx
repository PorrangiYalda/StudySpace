import React, { useState } from "react";

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      label: "Organize",
      title: "Task & Deadline Management",
      desc: "Track your upcoming tasks and due dates in one clean interface. Never miss an assignment again.",
      color: "#BAE6FD",
      sparkle: { icon: "✨", top: "-10px", left: "-10px", size: "1.5rem" },
    },
    {
      label: "Learn",
      title: "Course Dashboard",
      desc: "View your enrolled courses, materials, and weekly progress — all in one place.",
      color: "#FEF08A",
      sparkle: { icon: "🌟", top: "10px", left: "95%", size: "1.4rem" },
    },
    {
      label: "Progress",
      title: "Analytics & Tracking",
      desc: "Visualize your study time and performance with friendly charts and goals.",
      color: "#FBCFE8",
      sparkle: { icon: "💫", top: "10px", left: "50%", size: "1.4rem" },
    },
  ];

  const sectionStyle = {
    padding: "4rem 1.5rem",
    backgroundColor: "#fff",
    textAlign: "center",
  };

  const headingStyle = {
    display: "inline-block",
    backgroundColor: "#FEF08A",
    padding: "0.25rem 0.75rem",
    fontWeight: "bold",
    fontSize: "1.5rem",
    borderRadius: "0.375rem",
    marginBottom: "2rem",
  };

  const cardContainer = {
    maxWidth: "700px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  };

  const cardStyle = (bgColor) => ({
    backgroundColor: bgColor,
    borderRadius: "1rem",
    padding: "1.5rem",
    position: "relative",
    textAlign: "left",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    overflow: "hidden",
    cursor: "pointer",
  });

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

  const sparkleStyle = (sparkle) => ({
    position: "absolute",
    top: sparkle.top || "10%",
    left: sparkle.left || "10%",
    fontSize: sparkle.size || "1.5rem",
    animation: "float 2s ease-in-out infinite",
    pointerEvents: "none",
  });

  const labelStyle = {
    fontWeight: "600",
    marginBottom: "0.5rem",
  };

  const titleStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const descStyle = {
    fontSize: "0.95rem",
    color: "#374151",
    lineHeight: "1.6",
  };

  return (
    <section style={sectionStyle}>
      <div style={headingStyle}>Key Features</div>
      <div style={cardContainer}>
        {features.map((feature, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              ...cardStyle(feature.color),
              transform:
                hoveredIndex === index ? "translateY(-8px) scale(1.02)" : "translateY(0)",
              transition: "transform 0.3s ease",
            }}
          >
            <div style={circleStyle}></div>
            {hoveredIndex === index && (
              <div style={sparkleStyle(feature.sparkle)}>
                {feature.sparkle.icon}
              </div>
            )}
            <div style={labelStyle}>{feature.label}</div>
            <div style={titleStyle}>{feature.title}</div>
            <div style={descStyle}>{feature.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
