import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e2235] text-white">
      {/* Top CTA Section */}
      <div className="text-center py-30 px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Find Your <span className="text-red-500">Dream Property?</span>
        </h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Join thousands of satisfied clients who found their perfect property through our AI-powered platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-orange-500 border-2 border-red-500 hover:bg-orange-600 transition-all px-6 py-3 rounded-md text-white font-semibold shadow-md hover:scale-105 duration-300">
            Get Smart Matched
          </button>
          <button className="bg-transparent border-2 border-purple-500 hover:bg-red-500 transition-all px-6 py-3 rounded-md text-white font-semibold shadow-md hover:scale-105 duration-300">
            Book Consultation
          </button>
        </div>
      </div>

      {/* Mid Footer Section */}
      <div className="bg-gray-100 text-black px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo + Socials */}
          <div className="space-y-4">
            <img src="/EH_Logo@300x-8.png" alt="Estate Hive" className="ml-18 w-55 h-[70px]" />
            <p className="ml-20 text-sm text-gray-600 max-w-xs">
              Curated experiences. Data-backed confidence. Real results.
            </p>
            <div className="ml-20 flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-gray-600 hover:text-orange-500 transition text-xl cursor-pointer" />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-600 hover:text-orange-500 transition text-xl cursor-pointer" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-600 hover:text-orange-500 transition text-xl cursor-pointer" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-gray-600 hover:text-orange-500 transition text-xl cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3 ">Services</h3>
            <ul className="space-y-2 text-sm text-gray-700  ">
              {["EH Verified™", "EH Commercial™", "EH Living™", "EH Stay™", "EH Signature™", "EH Design™"].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 cursor-pointer transition-all hover:underline underline-offset-4 text2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Technology</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {["GeoHeat™", "EH Rank™", "AI Agents", "Smart Match", "EH Accelerate™"].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-500 cursor-pointer transition-all hover:underline underline-offset-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-3 mr-50">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="hover:text-orange-500 transition-all cursor-pointer flex items-center gap-2">
                <span>📞</span> +91 xxxxxxxx
              </li>
              <li className="hover:text-orange-500 transition-all cursor-pointer flex items-center gap-2">
                <span>✉️</span> Mail
              </li>
              <li className="hover:text-orange-500 transition-all cursor-pointer flex items-center gap-2">
                <span>📍</span> Location
              </li>
            </ul>
          </div> */}


          {/* Contact */}
          <div>
  <h3 className="font-semibold text-lg mb-4">Contact</h3>
  <ul className="space-y-4 text-sm text-gray-700">
    <li className="hover:text-orange-500 transition-all cursor-pointer flex items-center gap-3">
      <img
        src="/call@300x-8.png" // ✅ Update this path based on your project folder
        alt="Phone Icon"
        className="w-5 h-6"
      />
      +91 7975728907
    </li>
    <li className="hover:text-orange-500 transition-all cursor-pointer flex items-center gap-3">
      <img
        src="/mail@300x-8.png"
        alt="Email Icon"
        className="w-7 h-6"
      />
      shamique@simsinfotech.com
    </li>
    <li className="hover:text-orange-500 transition-all cursor-pointer flex items-center gap-3">
      <img
        src="/location pin@300x-8.png"
        alt="Location Icon"
        className="w-4 h-6"
      />
      Bengaluru, India <br />
      Chennai, TN, India <br />
      Dubai, UAE <br />
    </li>
  </ul>
</div>

        </div>

        {/* Bottom */}
        <div className="mt-20 border-t pl-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex space-x-4 mb-2 sm:mb-0">
            {["Blog", "PrivacyPolicy", "Terms of Service", "Careers"].map((item) => (
              <span
                key={item}
                className="hover:text-orange-500 cursor-pointer transition hover:underline underline-offset-4"
              >
                {item}
              </span>
            ))}
          </div>
          <p>© 2025 Estate Hive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;