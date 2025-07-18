import React, { useState } from 'react';
import { FiSliders, FiStar, FiHeart } from 'react-icons/fi'; // Import React Icons
import { Range, getTrackBackground } from 'react-range'; // Import Range and getTrackBackground for dual-thumb slider

function SmartMatchEngine() {
  // State for form fields
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState([100000, 5000000]); // Initial min and max price
  const [bedrooms, setBedrooms] = useState('2+ Bedroom');
  const [bathrooms, setBathrooms] = useState('1+ Bathroom');
  const [preferredLocation, setPreferredLocation] = useState('');

  // Dummy data for "How Our Smart Match Engine Works" features
  const smartMatchFeatures = [
    {
      icon: FiSliders, // Using React Icon component
      title: 'Smart Filtering',
      description: 'Our AI analyzes your preferences and filters through thousands of properties to find the best matches.',
    },
    {
      icon: FiStar, // Using React Icon component
      title: 'Compatibility Scoring',
      description: 'Each property receives a compatibility score based on how well it matches your specific criteria.',
    },
    {
      icon: FiHeart, // Using React Icon component
      title: 'Personalized Results',
      description: 'Get curated recommendations that align with your lifestyle, budget, and investment goals.',
    },
  ];

  // Min/Max values for the price range slider
  const MIN_PRICE = 100000;
  const MAX_PRICE = 5000000;

  return (
    <>
      {/* Smart Match Engine Hero Section */}
      <section
        className="
          relative w-full h-screen md:h-[80vh] lg:h-[80vh] /* Responsive height */
          bg-cover bg-center /* Cover the area, center the image */
          text-white /* White text for contrast */
          flex items-center justify-center /* Center content vertically and horizontally */
          overflow-hidden /* Hide any overflow from background */
        "
        style={{ backgroundImage: "url('/smart_match_hero_bg (1).png')" }} /* Placeholder background image */
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-60" /> {/* Darker overlay for better contrast */}

        {/* Content Container */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Pre-Title */}
          <p className="
            text-lg md:text-xl lg:text-2xl /* Responsive font size */
            font-medium mb-2 /* Medium weight, bottom margin */
           
          ">
            AI-Powered
          </p>

          {/* Main Title */}
          <h1 className="
            text-4xl md:text-5xl lg:text-6xl /* Responsive font size */
            font-bold leading-tight mb-8 /* Bold, tight line-height, bottom margin */
           
          " style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Smart Match Engine
          </h1>

          {/* Primary Tagline */}
          <p className="
            text-lg md:text-xl lg:text-2xl /* Responsive font size */
            font-medium 
          ">
            Let artificial intelligence find your perfect property match based <br className="hidden sm:inline" />
            on your unique preferences and investment goals.
          </p>
        </div>
      </section>

      {/* Let's Find Your Perfect Match Section */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Let's Find Your <span className="text-red-600">Perfect Match</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-2">
              Tell us about your preferences and investment goals.
            </p>
            <p className="text-gray-600 text-base md:text-lg">
              Our AI-powered engine will analyze thousands of properties to find your ideal matches.
            </p>
          </div>

          {/* Form Card - Neumorphic Styling */}
          <div className="
            bg-neutral-100 rounded-3xl
            shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] /* Neumorphic outset shadow */
            p-8 md:p-12 max-w-4xl mx-auto
          ">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
              {/* Property Type */}
              <div>
                <label htmlFor="propertyType" className="block text-gray-800 font-semibold mb-2">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="
                      block w-full px-4 py-3 rounded-lg
                      bg-neutral-200 border border-gray-200
                      shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF] /* Neumorphic inset */
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      appearance-none /* Hide default arrow */
                      text-gray-700
                    "
                  >
                    <option value="">Select Property Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <label htmlFor="bedrooms" className="block text-gray-800 font-semibold mb-2">
                  Bedrooms
                </label>
                <div className="relative">
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="
                      block w-full px-4 py-3 rounded-lg
                      bg-neutral-200 border border-gray-200
                      shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF] /* Neumorphic inset */
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      appearance-none
                      text-gray-700
                    "
                  >
                    <option value="2+ Bedroom">2+ Bedroom</option>
                    <option value="1+ Bedroom">1+ Bedroom</option>
                    <option value="3+ Bedroom">3+ Bedroom</option>
                    <option value="4+ Bedroom">4+ Bedroom</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Price Range (Dual-Thumb Slider) */}
              <div className="md:col-span-2"> {/* Span full width on desktop */}
                <label htmlFor="priceRange" className="block text-gray-800 font-semibold mb-6"> {/* Increased mb for slider */}
                  Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                </label>
                <div className="relative flex items-center h-8">
                  <Range
                    values={priceRange}
                    step={10000} // Step by 10,000 for smoother increments
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    onChange={(values) => setPriceRange(values)}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '6px',
                          width: '100%',
                          borderRadius: '3px',
                          background: getTrackBackground({
                            values: priceRange,
                            colors: ['#E0E0E0', '#EF4444', '#E0E0E0'], // Gray, Red (active), Gray
                            min: MIN_PRICE,
                            max: MAX_PRICE,
                          }),
                          alignSelf: 'center',
                          // Removed boxShadow for ResizeObserver fix
                          // boxShadow: 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFFFFF', // Neumorphic inset for track
                        }}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          height: '24px',
                          width: '24px',
                          borderRadius: '50%',
                          backgroundColor: '#FFF',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          // Removed boxShadow for ResizeObserver fix
                          // boxShadow: '3px 3px 6px #BABECC, -3px -3px 6px #FFFFFF', // Neumorphic outset for thumb
                          outline: 'none', // Remove default outline
                          border: '2px solid #EF4444', // Red border for thumbs
                        }}
                      />
                    )}
                  />
                </div>
              </div>

              {/* Bathrooms */}
              <div>
                <label htmlFor="bathrooms" className="block text-gray-800 font-semibold mb-2">
                  Bathrooms
                </label>
                <div className="relative">
                  <select
                    id="bathrooms"
                    name="bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="
                      block w-full px-4 py-3 rounded-lg
                      bg-neutral-200 border border-gray-200
                      shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF] /* Neumorphic inset */
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      appearance-none
                      text-gray-700
                    "
                  >
                    <option value="1+ Bathroom">1+ Bathroom</option>
                    <option value="2+ Bathroom">2+ Bathroom</option>
                    <option value="3+ Bathroom">3+ Bathroom</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Preferred Location */}
              <div>
                <label htmlFor="preferredLocation" className="block text-gray-800 font-semibold mb-2">
                  Preferred Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="preferredLocation"
                    name="preferredLocation"
                    value={preferredLocation}
                    onChange={(e) => setPreferredLocation(e.target.value)}
                    placeholder="City, State, or ZIP code"
                    className="
                      block w-full px-4 py-3 rounded-lg
                      bg-neutral-200 border border-gray-200
                      shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF] /* Neumorphic inset */
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                      text-gray-700
                    "
                  />
                  {/* Placeholder for dropdown arrow if location has suggestions/selection */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Find My Match Button */}
              <div className="md:col-span-2 text-center mt-8">
                <button
                  type="submit"
                  className="
                    bg-red-600 hover:bg-red-700
                    text-white font-bold text-lg
                    px-10 py-4 rounded-full
                    shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff] /* Neumorphic outset for button */
                    hover:shadow-[inset_2px_2px_5px_#BABECC,_inset_-5px_-5px_10px_#FFFFFF] /* Inset on hover */
                    transition duration-300 ease-in-out
                    w-full md:w-auto
                  "
                >
                  Find My Match
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* How Our Smart Match Engine Works Section */}
      <section className="bg-[#2A2A3F] py-16 md:py-24 px-4"> {/* Dark blue/grey background */}
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              How Our Smart Match <span className="text-red-600">Engine Works</span>
            </h2>
          </div>

          {/* Feature Blocks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {smartMatchFeatures.map((feature, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-center text-center
                  p-4 /* Padding around content */
                "
              >
                {/* Icon - Using React Icon component directly */}
                <feature.icon className="h-24 w-24 mb-6 text-white" />
                
                {/* Feature Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="text-base text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SmartMatchEngine;
