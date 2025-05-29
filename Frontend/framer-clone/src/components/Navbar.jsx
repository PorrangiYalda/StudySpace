import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 Add this

export default function Navbar({ onFAQClick }) {
const navigate = useNavigate(); // 👈 Setup hook

const handleLoginClick = () => {
navigate("/login"); // 👈 Redirect to /login
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

```
    {/* Center nav */}
    <div style={navLinks}>
      <span>Courses</span>
      <span style={{ cursor: "pointer" }} onClick={onFAQClick}>
        FAQ
      </span>
      <span>About</span>
    </div>

    {/* Icons + Button */}
    <div style={socialIcons}>
      <span>✖️</span>
      <span>🏀</span>
      <span>📷</span>
      <button style={buttonStyle} onClick={handleLoginClick}>
        Join Now
      </button>
    </div>
  </div>
</div>

);
}