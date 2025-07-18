import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'; // Keep FiStar if used elsewhere, remove others if not
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Navigation } from 'swiper/modules'; // Import Navigation module

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation CSS

function EHSignature() {
  // Dummy data for the Signature Difference features
  const signatureFeatures = [
    {
      icon: '/crown.svg', // Path to your SVG file
      title: 'Ultra-Luxury Properties',
      description: '₹5Cr+ homes and ₹2L+ rentals exclusively',
    },
    {
      icon: '/star orange.svg', // Path to your SVG file
      title: 'White-Glove Service',
      description: 'Private walkthroughs with luxury specialists',
    },
    {
      icon: '/shield.svg', // Path to your SVG file
      title: 'Personal Manager',
      description: 'Dedicated RM for your entire journey',
    },
    {
      icon: '/setting.svg', // Path to your SVG file
      title: 'EH Design™ Interiors',
      description: 'Complimentary interior consultation',
    },
  ];

  // Dummy data for Signature Collection properties
  const signatureCollectionProperties = [
    {
      id: 1,
      image: '/h19@300x-100.jpg', // Placeholder image
      verified: true,
      price: '₹8.5 Cr',
      title: 'Designer Loft in Indiranagar',
      location: 'Indiranagar, Bangalore',
      bedsBathsArea: '5 Bed, 6 Bath, 4,500 sq ft',
    },
    {
      id: 2,
      image: '/h20@300x-100.jpg', // Placeholder image
      verified: true,
      price: '₹8.5 Cr',
      title: 'Luxury Apartment in Koramangala',
      location: 'Koramangala, Bangalore',
      bedsBathsArea: '5 Bed, 6 Bath, 4,500 sq ft',
    },
    {
      id: 3,
      image: '/h21@300x-100.jpg', // Placeholder image
      verified: true,
      price: '₹8.5 Cr',
      title: 'Corporate Suite in Whitefield',
      location: 'Whitefield, Bangalore',
      bedsBathsArea: '5 Bed, 6 Bath, 4,500 sq ft',
    },
    {
      id: 4,
      image: '/h22@300x-100.jpg', // Placeholder image
      verified: true,
      price: '₹10.0 Cr',
      title: 'Exclusive Villa in Sarjapur',
      location: 'Sarjapur, Bangalore',
      bedsBathsArea: '6 Bed, 7 Bath, 6,000 sq ft',
    },
  ];

  return (
    <>
      {/* EH Signature Hero Section */}
      <section
        className="
          relative w-full h-screen md:h-[80vh] lg:h-[80vh] /* Responsive height */
          bg-cover bg-center /* Cover the area, center the image */
          text-white /* White text for contrast */
          flex items-center justify-center /* Center content vertically and horizontally */
          overflow-hidden /* Hide any overflow from background */
        "
        style={{ backgroundImage: "url('/eh_signature_hero_bg (1).png')" }} /* Placeholder background image */
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-60" /> {/* Darker overlay for better contrast */}

        {/* Content Container */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="
            text-4xl md:text-5xl lg:text-6xl /* Responsive font size */
            font-bold leading-tight mb-4
          ">
            EH Signature™
          </h1>

          {/* Primary Tagline */}
          <p className="
            text-lg md:text-xl lg:text-2xl /* Responsive font size */
            font-medium mb-8
          ">
            Ultra-luxury real estate experiences for the discerning few. <br />
            Where exceptional properties meet extraordinary service.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="
              bg-[#6B4E9B] hover:bg-[#5A4182] /* Purple background, darker on hover */
              text-white font-semibold /* White text, semi-bold */
              px-8 py-3 rounded-full /* Generous padding, fully rounded */
              shadow-lg /* Base shadow */
              shadow-[0_0_0_2px_#FF6B00] /* Red/orange outline shadow */
              hover:shadow-[0_0_0_3px_#FF6B00] /* Thicker outline on hover */
              transition duration-300 ease-in-out /* Smooth transitions */
              w-full sm:w-auto /* Full width on mobile, auto width on desktop */
            ">
              Request Signature Experience
            </button>
            <button className="
              bg-[#4A3B72] hover:bg-[#3A2D5B] /* Darker purple background, darker on hover */
              text-white font-semibold
              px-8 py-3 rounded-full
              shadow-lg hover:shadow-xl
              transition duration-300 ease-in-out
              w-full sm:w-auto
            ">
              Speak to Your RM
            </button>
          </div>
        </div>
      </section>

      {/* The Signature Difference Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-4"> {/* Light grey background */}
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              The Signature <span className="text-red-600">Difference</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Experience luxury real estate like never before with <br className="hidden sm:inline" />
              our exclusive Signature service.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {signatureFeatures.map((feature, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-xl shadow-sm p-6 md:p-8
                  flex flex-col items-center text-center
                  transition-all duration-300 ease-in-out
                  hover:shadow-md hover:scale-105
                "
              >
                {/* Icon - Render the SVG image with grayscale filter */}
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-24 w-24 mb-6 grayscale" // Apply grayscale for professional look
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/96x96/CCCCCC/333333?text=Icon`; }} // Fallback for missing SVG
                />
                {/* Feature Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Collection Section */}
      <section className="bg-[#2A2A3F] py-16 md:py-24 px-4"> {/* Dark blue/grey background */}
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Signature <span className="text-red-600">Collection</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              Handpicked ultra-luxury properties available exclusively through EH Signature™
            </p>
          </div>

          {/* Properties Carousel - Using Swiper.js */}
          <div className="relative">
            <Swiper
              modules={[Navigation]} // Only Navigation module, no Pagination
              spaceBetween={24} // Space between cards
              slidesPerView={1} // Default: 1 slide per view on mobile
              navigation={{
                nextEl: '.swiper-button-next-signature',
                prevEl: '.swiper-button-prev-signature',
              }}
              breakpoints={{
                640: { // sm breakpoint
                  slidesPerView: 1,
                },
                768: { // md breakpoint
                  slidesPerView: 2, // Show 2 on medium screens
                },
                1024: { // lg breakpoint
                  slidesPerView: 3, // Show 3 on large screens
                },
              }}
              className="pb-0" // No padding for pagination dots
            >
              {signatureCollectionProperties.map((property) => (
                <SwiperSlide key={property.id}>
                  <div
                    className="
                      bg-white rounded-xl shadow-md overflow-hidden
                      border border-gray-200 /* Subtle border */
                      hover:shadow-lg transition-all duration-300 ease-in-out
                      h-full flex flex-col justify-between /* Ensure consistent height and button alignment */
                    "
                  >
                    {/* Property Image with EH Verified Badge and Price Overlay */}
                    <div className="relative w-full h-56 overflow-hidden"> {/* Fixed height for image */}
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/E0E0E0/333333?text=Image+Error`; }}
                      />
                      {property.verified && (
                        <span className="
                          absolute top-3 left-3
                          bg-red-600 text-white text-xs font-semibold
                          px-3 py-1 rounded-full
                          shadow-md
                        ">
                          EH Verified™
                        </span>
                      )}
                      <div className="
                        absolute bottom-3 left-3
                        bg-black bg-opacity-50 text-white
                        px-3 py-1 rounded-md text-lg font-bold
                        drop-shadow-md
                      ">
                        {property.price}
                      </div>
                    </div>

                    {/* Property Content */}
                    <div className="p-4 text-left flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{property.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{property.location}</p>

                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          {/* Star Icon (using FiStar from react-icons/fi) */}
                          <FiStar className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{property.bedsBathsArea}</span>
                        </div>
                      </div>

                      <div className="text-right mt-auto"> {/* Align button to the right and push to bottom */}
                        <button className="
                          bg-red-600 text-white font-semibold
                          px-6 py-2 rounded-full
                          shadow-md hover:bg-red-700 transition duration-300
                          w-full /* Full width button */
                        ">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows - Desktop */}
            <div className="hidden md:flex justify-between absolute inset-y-0 w-full pointer-events-none">
              <button
                className="swiper-button-prev-signature pointer-events-auto bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition absolute left-[-40px] top-1/2 -translate-y-1/2 z-20"
                aria-label="Previous property"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                className="swiper-button-next-signature pointer-events-auto bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition absolute right-[-40px] top-1/2 -translate-y-1/2 z-20"
                aria-label="Next property"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Navigation Arrows - Mobile */}
            <div className="md:hidden flex justify-center mt-8 space-x-4">
              <button
                className="swiper-button-prev-signature bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Previous property"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                className="swiper-button-next-signature bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                aria-label="Next property"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EHSignature;
