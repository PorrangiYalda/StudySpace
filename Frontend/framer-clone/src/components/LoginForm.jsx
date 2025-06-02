import React, { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.text(); // or response.json() if your backend sends JSON
    alert(data); // Show backend response
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center text-black font-sans">
      <div className="text-4xl font-black">
        <span className="bg-yellow-300 px-2">StudySpace</span>
      </div>

      <p className="text-sm font-black text-center mt-4 mb-6">
        StudySpace helps you turn “I’ll do it later” into “Done and dusted.”
        <br />
        With sleek task tracking, reminders, and progress tools, it keeps your brain on task and your GPA up.
      </p>

      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-6">
          <span className="bg-yellow-300 px-2">Login</span>
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-300 px-2 py-1 rounded-sm">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Smith"
                className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-300 px-2 py-1 rounded-sm">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="janesmith33@mail.com"
                className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
              />
            </label>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-300 px-2 py-1 rounded-sm">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
              />
            </label>
          </div>

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
  );
}
