import React from "react";
import { FaInstagram, FaDribbble } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendarCheck } from "react-icons/bs";
import studyImage from "../assets/thumb.png"; // Replace with your image path

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-xl font-bold bg-pink-100 px-2 py-1 rounded-full">
          StudySpace
        </h1>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-sm font-medium hover:underline">Features</a>
          <a href="#" className="text-sm font-medium hover:underline">FAQ</a>
          <a href="#" className="text-sm font-medium hover:underline">About</a>
          <FaDribbble className="text-xl" />
          <FaInstagram className="text-xl" />
          <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">
            Try Now
          </button>
        </nav>
      </header>

      {/* Reduced padding and gap here */}
      <main className="grid md:grid-cols-2 gap-4 px-6 pt-6 pb-4 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BsCalendarCheck />
            <span>Now Live</span>
          </div>
          <h2 className="text-3xl font-bold leading-snug">
            Welcome to <span className="bg-yellow-200 px-1">StudySpace</span>
          </h2>
          <p className="text-base text-gray-700">
            Your all-in-one platform for focused studying, organizing coursework, and collaborating with classmates. Designed to make learning productive and fun!
          </p>
          <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">Try Now</button>
            <button className="border border-black px-4 py-2 rounded-full font-semibold">Learn More</button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <IoLocationOutline />
            <span>Vancouver, Canada</span>
          </div>
        </div>

        <div className="relative">
          <img
            src={studyImage}
            alt="StudySpace preview"
            className="rounded-3xl border-4 border-pink-300 rotate-2 shadow-md w-full max-w-sm mx-auto"
          />
        </div>
      </main>
    </div>
  );
}
