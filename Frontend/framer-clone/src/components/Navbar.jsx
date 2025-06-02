import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onFAQClick }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const outerContainer = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2rem",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  const navContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1.5rem",
    border: "2px solid black",
    borderRadius: "9999px",
    width: "90%",
    maxWidth: "1000px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  };

  const logoBox = {
    backgroundColor: "#FBCFE8",
    padding: "0.25rem 0.75rem",
    borderRadius: "0.25rem",
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const navLinks = {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    fontWeight: "500",
    fontSize: "1rem",
  };

  const socialIcons = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    fontSize: "1.2rem",
  };

  const buttonStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.5rem 1.25rem",
    borderRadius: "999px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={outerContainer}>
      <div style={navContainer}>
        {/* Logo */}
        <div style={logoBox}>StudySpace</div>

        {/* Center nav */}
        <div style={navLinks}>
          <span>Courses</span>
          <span style={{ cursor: "pointer" }} onClick={onFAQClick}>
            FAQ
          </span>
          <span>About</span>
        </div>

        {/* Icons + Join Now Dropdown */}
        <div style={socialIcons}>
          <span>✖️</span>
          <span>🏀</span>
          <span>📷</span>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button style={buttonStyle}>Join Now</button>

            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "120%",
                  right: 0,
                  backgroundColor: "#1F2937", // dark gray
                  borderRadius: "1rem",
                  padding: "0.75rem 0",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  zIndex: 1000,
                  minWidth: "140px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                <span
                  onClick={() => navigate("/signin")}
                  style={{
                    cursor: "pointer",
                    padding: "0.75rem 1.5rem", // ← more space
                    color: "#fff",
                    borderRadius: "999px",
                    transition: "background 0.2s ease",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#374151")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  Sign In
                </span>
                <span
                  onClick={() => navigate("/login")}
                  style={{
                    cursor: "pointer",
                    padding: "0.75rem 1.5rem", // ← more space
                    color: "#fff",
                    borderRadius: "999px",
                    transition: "background 0.2s ease",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#374151")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  Login
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
