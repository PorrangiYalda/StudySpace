import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignInPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    level_of_studies: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.text();
    alert(data);
  };

  

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center text-black font-sans">
        <div className="text-4xl font-black mt-4 mb-6">
          <span className="bg-yellow-300 px-2">StudySpace</span>
        </div>

        <p className="text-sm font-black text-center mt-4 mb-6">
          StudySpace helps you turn “I’ll do it later” into “Done and dusted.”
          <br />
          With sleek task tracking, reminders, and progress tools, it keeps your brain on task and your GPA up.
        </p>

        {/* Sign Up Form */}
        <div className="w-full max-w-md mt-6">
          <h2 className="text-lg font-semibold mb-6">
            <span className="bg-yellow-300 px-2">Sign Up</span>
          </h2>

          <form className="space-y-6" onSubmit={handleSignupSubmit}>
            {[
              { label: "First Name", name: "first_name", type: "text" },
              { label: "Last Name", name: "last_name", type: "text" },
              { label: "Username", name: "username", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Password", name: "password", type: "password" },
              { label: "Date of Birth", name: "dob", type: "date" },
            ].map(({ label, name, type }) => (
              <label
                key={name}
                className="flex items-center gap-2 text-sm font-bold"
              >
                <span className="bg-blue-50 px-3 py-1 rounded-sm w-32 text-center">{label}</span>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
                />
              </label>
            ))}

            {/* Level of Studies Dropdown */}
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-50 px-3 py-1 rounded-sm w-32 text-center">Level</span>
              <select
                name="level_of_studies"
                value={formData.level_of_studies}
                onChange={handleChange}
                required
                className="ml-2 w-full border-b border-black outline-none bg-white"
              >
                <option value="">Select...</option>
                <option value="High School">High School</option>
                <option value="College">College</option>
                <option value="University">University</option>
                <option value="Graduate">Graduate</option>
              </select>
            </label>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-semibold hover:opacity-90"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        
      </div>

      <Footer />
    </>
  );
}
