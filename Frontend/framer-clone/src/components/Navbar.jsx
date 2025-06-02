import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onFAQClick }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Delay to prevent flicker
  };

  const outerContainer = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "2rem",
    backgroundColor: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };
  const rightContainer = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "0rem"
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
    paddingLeft: "1rem"
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

  const dropdownWrapper = {
    position: "relative",
    display: "inline-block",
  };

  const dropdownMenu = {
    position: "absolute",
    top: "120%",
    right: 0,
    backgroundColor: "#1F2937",
    borderRadius: "1rem",
    padding: "0.75rem 0",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    zIndex: 1000,
    minWidth: "140px",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  };

  
  const dropdownItem = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "0.5rem 1.25rem",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "background 0.2s ease, opacity 0.2s ease",
  };
  

  return (
    <div style={outerContainer}>
      <div style={navContainer}>
        <div style={logoBox}>StudySpace</div>

        <div style = {rightContainer}>
    
        <div style={navLinks}>
          <span>Courses</span>
          <span style={{ cursor: "pointer" }} onClick={onFAQClick}>
            FAQ
          </span>
          <span>About</span>
        </div>
    
        <div style={socialIcons}>
          <span>✖️</span>
          <span>🏀</span>
          <span>📷</span>

          {/* Join Now with Dropdown */}
          <div
            style={dropdownWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button style={buttonStyle}>Join Now</button>

            {showDropdown && (
              <div style={dropdownMenu}>
                <span
                  style={dropdownItem}
                  onClick={() => navigate("/signin")}
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
                  style={dropdownItem}
                  onClick={() => navigate("/login")}
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
    </div>
  );
}
