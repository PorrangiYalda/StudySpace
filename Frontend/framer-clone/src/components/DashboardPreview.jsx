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

// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function Dashboard() {
//   const location = useLocation();
//   const student = location.state?.student;

//   return (
//     <div className="min-h-screen bg-gray-100 text-black p-10 font-sans">
//       <h1 className="text-3xl font-bold mb-4">
//         👋 Welcome back, {student?.first_name || "Student"}!
//       </h1>

//       <p className="text-lg mb-2">📧 Email: {student?.email}</p>
//       <p className="text-lg mb-2">🎓 Level: {student?.level_of_studies}</p>
//       <p className="text-lg mb-6">🗓️ DOB: {student?.dob}</p>

//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold mb-2">📚 Your Courses</h2>
//         <p className="text-gray-600">Course data coming soon...</p>
//       </div>
//     </div>
//   );
// }
