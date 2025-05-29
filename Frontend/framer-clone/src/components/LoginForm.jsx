import React from "react";


export default function LoginForm() {
  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center text-black font-sans">
      {/* Logo */}
      <div className="text-4xl font-black">
        <span className="bg-yellow-300 px-2">StudySpace</span>
      </div>

      <p className="text-0.5xl font-black">StudySpace helps you turn “I’ll do it later” into “Done and dusted.”<br></br> With sleek task tracking, reminders, and progress tools, it keeps your brain on task and your GPA up.</p>

      {/* Form Box */}
      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-6">
          <span className="bg-yellow-300 px-2">Login</span>
        </h2>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-300 px-2 py-1 rounded-sm">Name</span>
              <input type="text"
                placeholder="Jane Smith"
                className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
              />
            </label>
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-300 px-2 py-1 rounded-sm">Email</span>
              <input type="email"
                placeholder="janesmith33@mail.com"
                className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
              />
            </label>
          </div>

          {/* Password */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <span className="bg-blue-300 px-2 py-1 rounded-sm">Password</span>
              <input type="password"
                className="ml-2 w-full border-b border-black outline-none placeholder-gray-400"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button type="submit"
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

