// src/components/HeroSection.js
export default function HeroSection() {
    return (
      <section className="text-center py-24 px-4 bg-white">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Welcome to Our Site
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Built with React + Tailwind CSS 💻
        </p>
        <button className="mt-8 px-6 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition">
          Get Started
        </button>
      </section>
    );
  }