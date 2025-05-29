import React from "react";

export default function Footer() {
  const wrapper = {
    backgroundColor: "#0f172a", // almost black-blue
    color: "#ffffff",
    padding: "4rem 1.5rem 2rem",
    fontFamily: "sans-serif",
  };

  const topNav = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3rem",
    flexWrap: "wrap",
  };

  const linkGroup = {
    display: "flex",
    gap: "2rem",
    fontWeight: "500",
    fontSize: "1rem",
  };

  const socialIcons = {
    display: "flex",
    gap: "1rem",
    fontSize: "1.2rem",
    cursor: "pointer",
  };

  const centerText = {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto 2.5rem",
  };

  const ctaTitle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.75rem",
  };

  const ctaSub = {
    color: "#CBD5E1",
    fontSize: "1rem",
    lineHeight: "1.6",
  };

  const ctaButton = {
    marginTop: "2rem",
    backgroundColor: "#f1f5f9",
    color: "#000",
    border: "none",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "999px",
    cursor: "pointer",
  };

  const bottomRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "3rem",
    fontSize: "0.9rem",
    color: "#94A3B8",
    flexWrap: "wrap",
  };

  const footerLinks = {
    display: "flex",
    gap: "1.5rem",
    fontWeight: "500",
    cursor: "pointer",
  };

  return (
    <footer style={wrapper}>
      {/* Top nav */}
      <div style={topNav}>
        <div style={linkGroup}>
          <span>Portfolio</span>
          <span>FAQ</span>
          <span>Resume</span>
        </div>
        <div style={socialIcons}>
          <span>✖️</span>
          <span>🏀</span>
          <span>📷</span>
        </div>
      </div>

      {/* Center text */}
      <div style={centerText}>
        <h2 style={ctaTitle}>Ready to Bring Your Vision to Life?</h2>
        <p style={ctaSub}>
          Let’s make something incredible together! Reach out to discuss your project, and let’s create designs that resonate and inspire.
        </p>
        <button style={ctaButton}>Join StudySpace</button>
      </div>

      {/* Bottom bar */}
      <div style={bottomRow}>
        <div><strong>StudySpace</strong> ©all rights reserved</div>
        <div style={footerLinks}>
          <span>Buy this Template</span>
          <span>Made in React</span>
        </div>
      </div>
    </footer>
  );
}
