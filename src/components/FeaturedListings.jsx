import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const tabs = ["For Sale", "For Rent", "Luxury Rentals", "EH Signature™"];

const cardData = {
  "For Sale": [
    { title: "Modern Villa", location: "Hyderabad", price: "₹2.4 Cr" },
    { title: "Urban Apartment", location: "Mumbai", price: "₹1.2 Cr" },
    { title: "Lake House", location: "Bangalore", price: "₹3.1 Cr" },
  ],
  "For Rent": [
    { title: "Studio Apartment", location: "Delhi", price: "₹25K/mo" },
    { title: "2BHK Flat", location: "Pune", price: "₹32K/mo" },
    { title: "Cozy Condo", location: "Chennai", price: "₹28K/mo" },
  ],
  "Luxury Rentals": [
    { title: "Sea View Penthouse", location: "Goa", price: "₹1.2L/mo" },
    { title: "Smart Mansion", location: "Hyderabad", price: "₹3L/mo" },
    { title: "Skyline Duplex", location: "Mumbai", price: "₹2.5L/mo" },
  ],
  "EH Signature™": [
    { title: "Signature Bungalow", location: "Jaipur", price: "₹4.5 Cr" },
    { title: "Elite Tower", location: "Noida", price: "₹3.3 Cr" },
    { title: "Palace Estate", location: "Udaipur", price: "₹5.1 Cr" },
  ],
};

export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState("For Sale");
  const [direction, setDirection] = useState(1);

  const handleTabClick = (tab) => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = tabs.indexOf(tab);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(tab);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Featured Listings</h2>

      <div className="flex gap-4 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {cardData[activeTab].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all relative group cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
                <p className="text-gray-500">{card.location}</p>
                <p className="text-indigo-600 font-bold mt-3">{card.price}</p>
                <div className="absolute bottom-4 right-4 text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <HiArrowRight size={24} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
