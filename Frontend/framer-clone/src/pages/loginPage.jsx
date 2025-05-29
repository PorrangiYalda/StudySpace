import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
}
