import React from "react";

export default function DashboardPreview() {
  const sectionStyle = {
    padding: "4rem 1.5rem",
    backgroundColor: "#F9FAFB",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "2rem",
    color: "#111827",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: "#6B7280",
    marginBottom: "2.5rem",
  };

  const previewBoxStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    borderRadius: "1.5rem",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    border: "1px solid #E5E7EB",
  };

  const imageStyle = {
    width: "100%",
    display: "block",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Your Personalized Dashboard</h2>
      <p style={subtitleStyle}>
        Stay organized with upcoming deadlines, active courses, and progress charts — all in one place.
      </p>
      <div style={previewBoxStyle}>
        <img
          src="https://via.placeholder.com/900x500.png?text=StudySpace+Dashboard+Preview"
          alt="StudySpace Dashboard Preview"
          style={imageStyle}
        />
      </div>
    </section>
  );
}
