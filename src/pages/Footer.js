import { useState } from "react";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`w-full p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg font-bold">MITCHEL SMITH</h2>
          <p className="text-sm">Graphic Designer</p>
          <p>📞 000 1234 5678</p>
          <p>🌐 yourwebsite.com</p>
          <p>📧 your.email@example.com</p>
          <p>📍 Your Street, Singapore, 56789</p>
        </div>

        {/* Center Logo & Branding */}
        <div className="text-center">
          <div className="text-2xl font-bold">BRAND NAME</div>
          <p className="text-sm">Tagline Goes Here</p>
          <div className="flex justify-center space-x-3 mt-2">
            <a href="#" className="text-lg">🌐</a>
            <a href="#" className="text-lg">🐦</a>
            <a href="#" className="text-lg">🔗</a>
          </div>
        </div>

        {/* Right Profile Picture */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 border-4 border-gray-300 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <div className="text-center mt-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default Footer;
