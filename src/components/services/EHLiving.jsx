import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import FiChevronLeft, FiChevronRight for carousel arrows
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module (Pagination removed as dots are not needed)

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation CSS

function EHLiving() {
  // Dummy data for "Why Property Owners Choose EH Living™" features
  const ownerFeatures = [
    {
      icon: '/verified tenats.svg', // Path to your SVG file
      title: 'Verified Tenants Only',
      description: 'Background verification, income proof, and previous landlord references for every tenant.',
      subFeatures: [
        'Credit score check',
        'Employment verification',
        'Previous rental history',
        'Police verification',
      ],
    },
    {
      icon: '/yield bot.svg', // Path to your SVG file
      title: 'YieldBot™ Predictions',
      description: 'AI-powered rent optimization and renewal predictions to maximize your property income.',
      subFeatures: [
        'Market rent analysis',
        'Renewal probability',
        'Yield optimization',
        'Vacancy predictions',
      ],
    },
    {
      icon: '/property management.svg', // Path to your SVG file
      title: 'Full Property Management',
      description: 'Complete hands-off experience with our PMS concierge handling everything.',
      subFeatures: [
        'Tenant onboarding',
        'Maintenance coordination',
        'Rent collection',
        'Legal compliance',
      ],
    },
  ];

  // Dummy data for search bar dropdowns
  const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad'];
  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4+ BHK'];
  const budgetOptions = ['₹10,000 - ₹25,000', '₹25,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000+'];

  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBHK, setSelectedBHK] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [bhkDropdownOpen, setBHKDropdownOpen] = useState(false);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLocationDropdownOpen(false);
        setBHKDropdownOpen(false);
        setBudgetDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  // Dummy data for "Available EH Living™ Properties"
  const availableProperties = [
    {
      id: 1,
      image: '/h01@300x-100.jpg', // Placeholder image
      verified: true,
      title: 'Luxury 3BHK in Whitefield',
      location: 'Whitefield, Bangalore',
      price: '₹85,000/month',
      deposit: '₹2.5L',
      beds: '3 Bed',
      baths: '3 Bath',
      area: '1,800 sq ft',
    },
    {
      id: 2,
      image: '/h02@300x-100.jpg', // Placeholder image
      verified: true,
      title: 'Modern 2BHK in Koramangala',
      location: 'Koramangala, Bangalore',
      price: '₹65,000/month',
      deposit: '₹1.8L',
      beds: '2 Bed',
      baths: '2 Bath',
      area: '1,200 sq ft',
    },
    {
      id: 3,
      image: '/h03@300x-100.jpg', // Placeholder image
      verified: true,
      title: 'Executive 4BHK in HSR Layout',
      location: 'HSR Layout, Bangalore',
      price: '₹1,20,000/month',
      deposit: '₹3.5L',
      beds: '4 Bed',
      baths: '4 Bath',
      area: '2,400 sq ft',
    },
    {
      id: 4,
      image: '/h04@300x-100.jpg', // Placeholder image
      verified: true,
      title: 'Spacious Villa in Sarjapur',
      location: 'Sarjapur, Bangalore',
      price: '₹95,000/month',
      deposit: '₹2.8L',
      beds: '3 Bed',
      baths: '4 Bath',
      area: '2,000 sq ft',
    },
  ];

  return (
    <>
      {/* EH Living Hero Section */}
      <section
        className="
          relative w-full h-screen md:h-[50vh] lg:h-[80vh]
          bg-cover bg-center
          text-white
          flex items-center justify-center
          overflow-hidden
        "
        style={{ backgroundImage: "url('/eh_living_hero_bg (1).png')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-50" />

        {/* Content Container */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="
            text-4xl md:text-5xl lg:text-6xl
            font-bold leading-tight mb-4
          ">
            EH Living™
          </h1>

          {/* Primary Tagline */}
          <p className="
            text-2xl md:text-3xl lg:text-4xl
            font-semibold mb-8
          ">
            Fully managed long-term rentals
          </p>

          {/* Owner Benefits */}
          <p className="
            text-base md:text-lg lg:text-xl
            font-medium mb-2
          ">
            For Owners: 10% fee or flat retainer &bull; Verified tenants &bull; YieldBot predictions
          </p>

          {/* Tenant Benefits */}
          <p className="
            text-base md:text-lg lg:text-xl
            font-medium drop-shadow-sm
          ">
            For Tenants: Zero brokerage &bull; Maintenance included &bull; Easy renewals
          </p>
        </div>
      </section>

      {/* Why Property Owners Choose EH Living™ Section */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Why Property Owners Choose <span className="text-red-600">EH Living™</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Complete rental management with verified tenants and AI-powered yield optimization.
            </p>
          </div>

          {/* Feature Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {ownerFeatures.map((feature, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-center text-center
                  p-4
                "
              >
                {/* Icon - Now uses grayscale filter and adjusted size */}
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-20 w-20 mb-6 grayscale" // Apply grayscale filter
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/CCCCCC/333333?text=Icon`; }} // Fallback for missing SVG
                />
                {/* Feature Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="text-base text-gray-600 mb-4">
                  {feature.description}
                </p>
                {/* Sub-features / Checklist */}
                <ul className="text-left w-full max-w-xs mx-auto space-y-1">
                  {feature.subFeatures.map((subFeature, subIndex) => (
                    <li key={subIndex} className="flex items-center text-gray-600 text-base"> {/* Increased text size to base */}
                      {/* Green Checkmark Icon */}
                      <svg
                        className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span>{subFeature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Get My Property Managed Button */}
          <button className="
            bg-red-600 hover:bg-red-700
            text-white font-semibold text-lg
            px-10 py-4 rounded-full
            shadow-lg hover:shadow-xl transition duration-300 ease-in-out
            w-full md:w-auto mb-16
          ">
            Get My Property Managed
          </button>

          {/* "I'm Looking to Rent" Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              I'm Looking to <span className="text-red-600">Rent</span>
            </h2>

            {/* Search Bar - Refined Styling to match image */}
            <div
              ref={dropdownRef} // Attach ref to the container to handle clicks outside
              className="
                w-full max-w-5xl mx-auto
                flex flex-col md:flex-row
                items-center
                bg-[#EBF2F7] rounded-[12px] /* Light blue/gray background, fully rounded */
                /* Subtle shadow */
                p-3 gap-3 md:gap-0 md:justify-between /* Reduced padding and gap */
              "
            >
              {/* Location Dropdown */}
              <div className="flex-1 w-full md:w-auto relative">
                <div
                  className="
                    
                    px-4 py-3 flex justify-between items-center cursor-pointer
                    text-gray-700 text-base font-medium
                  transition-all duration-200 /* Subtle shadow on hover */
                  "
                  onClick={() => { setLocationDropdownOpen(!locationDropdownOpen); setBHKDropdownOpen(false); setBudgetDropdownOpen(false); }}
                >
                  {selectedLocation || 'Location'}
                  <FiChevronDown size={18} className="text-gray-600" />
                </div>
                {locationDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-white rounded-xl  py-1 mt-2 z-50">
                    {locations.map((loc) => (
                      <div
                        key={loc}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                        onClick={() => { setSelectedLocation(loc); setLocationDropdownOpen(false); }}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* BHK Dropdown */}
              <div className="flex-1 w-full md:w-auto relative">
                <div
                  className="
                     rounded-full 
                    
                    px-4 py-3 flex justify-between items-center cursor-pointer
                    text-gray-700 text-base font-medium
                    hover:shadow-md transition-all duration-200
                  "
                  onClick={() => { setBHKDropdownOpen(!bhkDropdownOpen); setLocationDropdownOpen(false); setBudgetDropdownOpen(false); }}
                >
                  {selectedBHK || 'BHK'}
                  <FiChevronDown size={18} className="text-gray-600" />
                </div>
                {bhkDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg py-1 mt-2 z-50">
                    {bhkOptions.map((bhk) => (
                      <div
                        key={bhk}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                        onClick={() => { setSelectedBHK(bhk); setBHKDropdownOpen(false); }}
                      >
                        {bhk}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Budget Dropdown */}
              <div className="flex-1 w-full md:w-auto relative">
                <div
                  className="
                     rounded-full 
                   
                    px-4 py-3 flex justify-between items-center cursor-pointer
                    text-gray-700 text-base font-medium
                    transition-all duration-200
                  "
                  onClick={() => { setBudgetDropdownOpen(!budgetDropdownOpen); setLocationDropdownOpen(false); setBHKDropdownOpen(false); }}
                >
                  {selectedBudget || 'Budget'}
                  <FiChevronDown size={18} className="text-gray-600" />
                </div>
                {budgetDropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg py-1 mt-2 z-50">
                    {budgetOptions.map((budget) => (
                      <div
                        key={budget}
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                        onClick={() => { setSelectedBudget(budget); setBudgetDropdownOpen(false); }}
                      >
                        {budget}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Homes Button */}
              <div className="w-full md:w-auto">
                <button className="
                  bg-red-600 hover:bg-red-700
                  text-white font-bold text-base
                  px-8 py-3 rounded-full
                  shadow-md hover:shadow-lg /* Standard shadow, not neumorphic */
                  transition duration-300 ease-in-out
                  w-full
                ">
                  Search Homes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available EH Living™ Properties Section */}
      <section className="bg-[#2A2A3F] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Available <span className="text-red-600">EH Living™ Properties</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              Zero brokerage &bull; Verified properties &bull; Maintenance included
            </p>
          </div>

          {/* Property Listing Cards Carousel - Using Swiper.js */}
          <div className="relative">
            <Swiper
              modules={[Navigation]} // Only Navigation module, no Pagination
              spaceBetween={24} // Space between cards
              slidesPerView={1} // Default: 1 slide per view on mobile
              navigation={{
                nextEl: '.swiper-button-next-properties',
                prevEl: '.swiper-button-prev-properties',
              }}
              breakpoints={{
                640: { // sm breakpoint
                  slidesPerView: 1,
                },
                768: { // md breakpoint
                  slidesPerView: 2,
                },
                1024: { // lg breakpoint
                  slidesPerView: 3,
                },
              }}
              className="pb-0" // No padding for pagination dots
            >
              {availableProperties.map((property) => (
                <SwiperSlide key={property.id}>
                  <div
                    className="
                      bg-white rounded-xl shadow-md overflow-hidden
                      border border-gray-200
                      hover:shadow-lg transition-all duration-300 ease-in-out
                      h-full flex flex-col /* Ensure cards take full height of slide */
                    "
                  >
                    {/* Property Image with EH Verified Badge */}
                    <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden"> {/* Increased height for image */}
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
                    </div>

                    {/* Property Content */}
                    <div className="p-4 text-left flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{property.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{property.location}</p>

                        <div className="flex justify-between items-end mb-4">
                          <div>
                            <span className="font-bold text-xl text-gray-900 block">{property.price}</span>
                            <span className="text-sm text-gray-500">Deposit: {property.deposit}</span>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <span>{property.beds} &bull; {property.baths}</span><br/>
                            <span>{property.area}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mt-auto"> {/* Use mt-auto to push button to bottom */}
                        <button className="
                          bg-red-600 text-white font-semibold
                          px-6 py-2 rounded-full
                          shadow-md hover:bg-red-700 transition duration-300
                          w-full
                        ">
                          Schedule Visit
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
                className="swiper-button-prev-properties pointer-events-auto bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition absolute left-[-40px] top-1/2 -translate-y-1/2 z-20"
                aria-label="Previous property"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                className="swiper-button-next-properties pointer-events-auto bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition absolute right-[-40px] top-1/2 -translate-y-1/2 z-20"
                aria-label="Next property"
              >
                <FiChevronRight size={24} />
              </button>
            </div>

            {/* Navigation Arrows - Mobile */}
            <div className="md:hidden flex justify-center mt-8 space-x-4">
              <button
                className="swiper-button-prev-properties bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Previous property"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                className="swiper-button-next-properties bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
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

export default EHLiving;
