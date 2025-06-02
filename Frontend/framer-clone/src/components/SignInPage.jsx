import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Send to backend later
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white px-4 py-12 flex flex-col justify-center items-center text-black font-sans">
        <div className="text-4xl font-black mb-2">
          <span className="bg-yellow-300 px-2">Login</span>
        </div>

        <p className="mb-10 text-center text-sm text-gray-700 max-w-md">
          Enter your details to log in to StudySpace.
        </p>

        <div className="w-full max-w-md">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Loop through fields */}
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
                <span className="bg-blue-300 px-2 py-1 rounded-sm">{label}</span>
                <input
                  type={type}
                  name={name}
                  required
                  value={formData[name]}
                  onChange={handleChange}
                  className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
                />
              </label>
            ))}

            {/* Level of Studies Dropdown */}
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-300 px-2 py-1 rounded-sm">
                Level of Studies
              </span>
              <select
                name="level_of_studies"
                required
                value={formData.level_of_studies}
                onChange={handleChange}
                className="ml-2 w-full border-b border-black outline-none bg-white"
              >
                <option value="">Select...</option>
                <option value="High School">High School</option>
                <option value="College">College</option>
                <option value="University">University</option>
                <option value="Graduate">Graduate</option>
              </select>
            </label>

            {/* Submit */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full font-semibold hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
