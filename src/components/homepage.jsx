import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Range } from 'react-range';
import locationIcon from '/location pin.svg'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { HiArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const MIN_PRICE = 0;
const MAX_PRICE = 100000;

const HomePage = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [rangeOpen, setRangeOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([20000, 80000]);
  const [activeTab, setActiveTab] = useState('Luxury Rentals');
  const [scrollY, setScrollY] = useState(0); // State for parallax effect

  // Dummy data for dropdowns
  const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad'];
  const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Plot', 'Commercial'];

  // Dummy data for property listings
  const listings = [
    {
      id: 1,
      image: '/h02@300x-100.jpg',
      badge: 'EH Verified™',
      title: 'Modern Villa Whitefield',
      location: 'Whitefield, Bangalore',
      area: '3,200 sq ft',
      bhk: '4 BHK',
      price: '₹2.8 Cr',
    },
    {
      id: 2,
      image: '/h04@300x-100.jpg',
      badge: 'EH Verified™',
      title: 'Luxury Penthouse',
      location: 'UB City, Bangalore',
      area: '4,500 sq ft',
      bhk: '5 BHK',
      price: '₹5.2 Cr',
    },
    {
      id: 3,
      image: '/h11@300x-100.jpg',
      badge: 'EH Verified™',
      title: 'Contemporary Apartment',
      location: 'Koramangala, Bangalore',
      area: '2,100 sq ft',
      bhk: '3 BHK',
      price: '₹1.9 Cr',
    },
    {
      id: 4,
      image: '/h05@300x-100.jpg',
      badge: 'EH Verified™',
      title: 'Riverside Home',
      location: 'Sarjapur, Bangalore',
      area: '3,800 sq ft',
      bhk: '4 BHK',
      price: '₹3.5 Cr',
    },
    {
      id: 5,
      image: '/h01@300x-100.jpg',
      badge: 'EH Verified™',
      title: 'City View Loft',
      location: 'Indiranagar, Bangalore',
      area: '1,800 sq ft',
      bhk: '2 BHK',
      price: '₹1.2 Cr',
    },
    {
      id: 6,
      image: '/h03@300x-100.jpg',
      badge: 'EH Verified™',
      title: 'Spacious Duplex',
      location: 'JP Nagar, Bangalore',
      area: '2,500 sq ft',
      bhk: '3 BHK',
      price: '₹2.1 Cr',
    },
  ];

  // real estate eco system components
  const ecosystemCards = [
  {
    title: "EH Commercial™",
    desc:
      "Verified office spaces, warehouses, and retail properties with end‑to‑end support.",
    linkText: "Explore Commercial",
  },
  {
    title: "GeoHeat™ Intelligence",
    desc: "AI‑powered market heatmaps with 85% accuracy in price forecasting.",
    linkText: "Discover Insights",
  },
  {
    title: "EH Stay™ Boutique",
    desc:
      "Premium short‑term rentals for ₹5,000+/night with concierge service.",
    linkText: "Book Now",
  },
  {
    title: "EH Signature™",
    desc: "Ultra‑luxury properties 5Cr+ with white‑glove service and personal RM.",
    linkText: "View Luxury",
  },
  {
    title: "EH Living™ Rentals",
    desc:
      "Fully managed long‑term rentals with verified tenants and YieldBot predictions.",
    linkText: "Find Rentals",
  },
  {
    title: "Smart Match Engine",
    desc:
      "AI‑powered property matching based on preferences and behavior patterns.",
    linkText: "Get Matched",
  },
  {
    title: "EH Rank™",
    desc: "Every listing and agent scored for transparency.",
    linkText: "Meet Top Agents",
  },
  {
    title: "EH Design™",
    desc: "Exclusive interior design services for Estate Hive clients. Where luxury meets functionality.",
    linkText: "See Designs",
  },
  {
    title: "EH Accelerate™",
  desc:
    "Builder funnel suite that transforms your marketing. From campaign setup to closures—we accelerate your sales.",
  linkText: "Start Selling",
  },
];

// const accelerateCard = {
//   title: "EH Accelerate™",
//   desc:
//     "Builder funnel suite that transforms your marketing. From campaign setup to closures—we accelerate your sales.",
//   linkText: "Start Selling",
// };
  

  const carouselRef = useRef(null);

const scrollLeft = () => {
  if (carouselRef.current) {
    carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carouselRef.current) {
    carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  }
};

const testimonials = [
  {
    text: 'Found my dream villa in Whitefield through EH Verified™. The entire process was seamless with transparent documentation.',
    location: 'Villa in Whitefield',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww',
    name: 'Vignesh Kumar',
    role: 'Animator',
  },
  {
    text: 'Found my dream villa in Whitefield through EH Verified™. The entire process was seamless with transparent documentation.',
    location: 'Villa in Whitefield',
    rating: 5,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkHXDtUQRea0mhqJfcly2JmKlpINontO1ruire9eiQBStGywKDkV7WK8XM-oYLfhajUI&usqp=CAU',
    name: 'Vignesh Kumar',
    role: 'Animator',
  },
  {
    text: 'Found my dream villa in Whitefield through EH Verified™. The entire process was seamless with transparent documentation.',
    location: 'Villa in Whitefield',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww',
    name: 'Vignesh Kumar',
    role: 'Animator',
  },
  {
    text: 'Found my dream villa in Whitefield through EH Verified™. The entire process was seamless with transparent documentation.',
    location: 'Villa in Whitefield',
    rating: 5,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7ltq11RLOqyn1QcuU56jshO_eUag-BbDjadbxjgOGU21EkeiTsugxluEdyGULqa2--0&usqp=CAU',
    name: 'Vignesh Kumar',
    role: 'Animator',
  },
  {
    text: 'Found my dream villa in Whitefield through EH Verified™. The entire process was seamless with transparent documentation.',
    location: 'Villa in Whitefield',
    rating: 5,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkHXDtUQRea0mhqJfcly2JmKlpINontO1ruire9eiQBStGywKDkV7WK8XM-oYLfhajUI&usqp=CAU',
    name: 'Vignesh Kumar',
    role: 'Animator',
  },
  {
    text: 'Found my dream villa in Whitefield through EH Verified™. The entire process was seamless with transparent documentation.',
    location: 'Villa in Whitefield',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww',
    name: 'Vignesh Kumar',
    role: 'Animator',
  },
  // Add more testimonials
];


  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  // Calculate background position for parallax
  const parallaxBackgroundPosition = `center ${50 + scrollY * 0.1}px`; // Adjust 0.1 for speed

  return (
    <>
      {/* Hero Section */}
      <section
  className="relative w-full min-h-[110vh] md:min-h-[160vh] bg-no-repeat bg-cover bg-center text-white overflow-hidden"
  style={{
    backgroundImage: "url('/bg-Early-mrng.jpg')",
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: `center ${-70 - scrollY * 0.12}px`, // Makes background move upward more aggressively
  }}
>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/10 z-0" />

  {/* Content within hero section */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 pt-[30vh] md:pt-[60vh] flex flex-col items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white drop-shadow-md">
        Discover <span className='font-exo'>EH Verified™</span> <br /> Homes & Premium Rentals
      </h1>
      <p className="mt-4 text-sm md:text-base font-medium text-gray-200 drop-shadow-sm">
        <span className="block">Exclusive. Curated. Personalized.</span>
        Luxury homes, elite rentals & smart real estate technology — all in one place.
      </p>
    </div>

    {/* Search Bar */}
    <div className="mt-10 w-full px-2 md:px-0">
      <div className="
        w-full max-w-5xl mx-auto
        bg-white backdrop-blur-xl
        border border-white/20
        shadow-lg rounded-[15px]
        flex flex-col md:flex-row
        items-center px-4 py-5 gap-4 md:gap-0
        md:justify-between
      ">
        {/* Location Filter */}
        <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r px-4 pb-4 md:pb-0 relative">
          <label className="text-sm text-gray-100 md:text-gray-800 block mb-1">Location</label>
          <div className="flex items-center gap-2 cursor-pointer relative group">
            <img src={locationIcon} alt="location" className="h-4 w-4" />
            <span
              className="text-sm text-white md:text-gray-800 font-medium flex-grow"
              onClick={() => setLocation(prev => prev === 'dropdown' ? '' : 'dropdown')}
            >
              {location === 'dropdown' ? 'Select your city' : location || 'Select your city'}
            </span>
            <FiChevronDown size={18} className="text-white md:text-gray-600" />
            {location === 'dropdown' && (
              <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-lg py-1 mt-2 z-50">
                {locations.map((loc) => (
                  <div
                    key={loc}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={() => { setLocation(loc); setLocation(''); }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Property Type Filter */}
        <div className="flex-1 w-full md:w-auto border-b md:border-b-0 md:border-r px-4 pb-4 md:pb-0 relative">
          <label className="text-sm text-gray-100 md:text-gray-800 block mb-1">Property Type</label>
          <div className="flex items-center justify-between cursor-pointer relative group">
            <span
              className="text-sm text-white md:text-gray-800 font-medium flex-grow"
              onClick={() => setPropertyType(prev => prev === 'dropdown' ? '' : 'dropdown')}
            >
              {propertyType === 'dropdown' ? 'Choose Property Type' : propertyType || 'Choose Property Type'}
            </span>
            <FiChevronDown size={18} className="text-white md:text-gray-600" />
            {propertyType === 'dropdown' && (
              <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-lg py-1 mt-2 z-50">
                {propertyTypes.map((type) => (
                  <div
                    key={type}
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={() => { setPropertyType(type); setPropertyType(''); }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="flex-1 w-full md:w-auto px-4 relative">
          <label className="text-sm text-gray-100 md:text-gray-800 block mb-1">Price Range</label>
          <div
            className="text-sm text-white md:text-gray-800 font-medium cursor-pointer flex justify-between items-center"
            onClick={() => setRangeOpen(!rangeOpen)}
          >
            ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            <FiChevronDown size={18} className="text-white md:text-gray-600" />
          </div>
          {rangeOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-64 bg-white p-4 shadow-lg rounded-xl z-40">
              <Range
                step={1000}
                min={MIN_PRICE}
                max={MAX_PRICE}
                values={priceRange}
                onChange={setPriceRange}
                renderTrack={({ props, children }) => (
                  <div {...props} className="h-1 bg-gray-300 rounded" style={{ ...props.style }}>
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props} className="h-4 w-4 bg-[#1F275E] rounded-full shadow-md" />
                )}
              />
              <div className="text-sm text-gray-700 mt-2 text-center">
                ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </div>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="px-4 w-full md:w-auto mt-4 md:mt-0">
          <button className="bg-[#2E2D72] text-white font-semibold text-sm py-3 px-6 rounded-full shadow hover:bg-[#1f1f5f] transition w-full">
            Browse Properties
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Reveal Gradient */}
  <div className="absolute bottom-0 left-0 w-full h-48 md:h-60 bg-gradient-to-t from-[#05051f] to-transparent" />
</section>


      {/* EH Verified Exclusives Section */}
      <section className="bg-[#05051f] text-white py-18 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#b32b14] font-bold text-[40px] mb-2">EH Verified™ Exclusives</p>
          <h2 className="text-[70px] font-medium mb-4 leading-tight">
            Only on Estate Hive.<br />Nowhere else.
          </h2>
          <p className="text-gray-300 text-base mb-12 max-w-2xl mx-auto">
            Owner-signed exclusivity. Free professional media. Pre-verified legal docs. GeoHeat™ enabled.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Owner-Signed Exclusivity',
                desc: 'Direct partnerships with property owners',
                icon: '/cup.svg'
              },
              {
                title: 'Professional Media',
                desc: 'Free photography and virtual tours',
                icon: '/camera.svg'
              },
              {
                title: 'Pre-Verified Documents',
                desc: 'Complete legal verification process',
                icon: '/verified.svg'
              },
              {
                title: 'GeoHeat Tracking',
                desc: 'AI-powered market intelligence',
                icon: '/geo heat_1.svg'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white
                  text-[#121212]
                  rounded-3xl
                  p-8
                  flex flex-col
                  items-center
                  text-center
                  transition-all
                  duration-500
                  ease-in-out
                  group
                  transform
                  hover:scale-105
                  shadow-none
                  hover:shadow-[8px_8px_20px_#b32b14]
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-16 w-16 text-gray-500 mb-6 transition duration-500 ease-in-out"
                />

                <h3 className="font-bold text-xl text-[#121212] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="relative bg-white py-20 px-4 z-30">
  {/* Shadow Drop from Top */}
  <div className="absolute top-0 left-0 w-full h-48 md:h-60 pointer-events-none z-0 bg-gradient-to-b from-[#05051F] to-transparent" />

  <div className="max-w-7xl mx-auto relative z-20">
    {/* Tab Navigation */}
    <div className="flex justify-center mb-20 mt-20 md:mt-40">
      <div className="w-full bg-[rgba(28,117,188,0.08)] rounded-[12px] p-1 gap-10 flex justify-center backdrop-blur-sm">
        {['For Sale', 'For Rent', 'Luxury Rentals', 'EH Prime'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex-grow md:flex-grow-0
              ${activeTab === tab
                ? 'text-[#E7000B] bg-white shadow-sm'
                : 'text-gray-700 hover:bg-gray-200'}
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>

   {/* Property Listing Cards Carousel */}
<div className="relative overflow-hidden">
  {/* Carousel Scrollable Container */}
  <div
    ref={carouselRef}
    className="flex flex-nowrap gap-4 animate-scroll-listings overflow-x-auto scroll-smooth scrollbar-hide"
  >
    {listings.map((listing, index) => {
      const isImageTop = index % 2 === 0;

      return (
        <div
          key={listing.id}
          className="flex-shrink-0 w-[280px] md:w-[320px] p-2"
        >
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 ease-in-out flex flex-col justify-between h-[500px] border-[#6285A3]">
            {isImageTop && (
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover scale-[1.1]"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-[12px] shadow">
                  {listing.badge}
                </span>
              </div>
            )}

            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{listing.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{listing.location}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-2 mb-4">
                  <span>{listing.area}</span>
                  <span>{listing.bhk}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-[30px] text-black">{listing.price}</span>
                <button className="bg-red-600 text-white text-[12px] font-semibold px-2 py-1 rounded-[12px] shadow hover:bg-red-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>

            {!isImageTop && (
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover scale-[1.1]"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {listing.badge}
                </span>
              </div>
            )}
          </div>
        </div>
      );
    })}
  </div>

  {/* Left Arrow */}
  <button
    onClick={scrollLeft}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black text-white p-3 rounded-full shadow hover:bg-red-600 transition"
    aria-label="Scroll Left"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Right Arrow */}
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black text-white p-3 rounded-full shadow hover:bg-red-600 transition"
    aria-label="Scroll Right"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>

  {/* Gradient Overlays */}
  <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
  <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
</div>


    {/* Browse All Listings Button */}
    <div className="text-center mt-20 z-30">
      <button className="bg-red-600 text-white font-semibold text-md px-6 py-3 rounded-[12px] shadow-lg hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        Browse All EH Verified™ Listings
      </button>
    </div>
  </div>
</section>


{/* Real Estate Ecosystem Section */}

<section className="bg-gray-100 py-20 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold text-center leading-tight text-gray-900"
    >
      Complete Real Estate <span className="text-red-600">Ecosystem</span>
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
    >
      From buying and selling to renting and investing, we've got every aspect of real estate covered.
    </motion.p>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
  {ecosystemCards.map((card, idx) => {
    const isDarkBlue = card.title === "EH Design™" || card.title === "EH Accelerate™";
    const baseColor = isDarkBlue ? "#040449" : "#E7000B";
    const hoverColor = isDarkBlue ? "#0a437d" : "#cc0000";

    return (
     <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
  viewport={{ once: false }}
  className="group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-200 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
>
  {/* Expanding Color Splash */}
  <span
    className="absolute top-10 z-0 h-10 w-10 rounded-full transition-all duration-500 group-hover:scale-[25]"
    style={{ backgroundColor: baseColor }}
  />

  {/* Inner Content */}
  <div className="relative z-10 flex flex-col flex-grow justify-between">
    <div>
      {/* Icon Circle */}
      <span
        className="grid h-10 w-10 place-items-center rounded-full transition-all duration-300 group-hover:brightness-110"
        style={{ backgroundColor: baseColor }}
      >
        <HiArrowRight className="h-6 w-6 text-white transition-all" />
      </span>

      {/* Title + Description */}
      <div className="space-y-4 pt-5 text-base leading-7 text-gray-600 group-hover:text-white/90 transition-all">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white">
          {card.title}
        </h3>
        <p>{card.desc}</p>
      </div>
    </div>

    {/* CTA always at bottom */}
    <div className="pt-6 text-base font-semibold leading-7">
      <a
        href="#"
        className={`transition-all duration-300 ${
          isDarkBlue ? 'text-[#040449]' : 'text-[#E7000B]'
        } group-hover:text-white`}
      >
        {card.linkText || 'Explore more'} &rarr;
      </a>
    </div>
  </div>
</motion.div>

    );
  })}
</div>


    {/* EH Accelerate Section */}
    {/* <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-16 mx-auto max-w-lg group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-200 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-black transition-all duration-300 group-hover:scale-[12]" />
      <div className="relative z-10">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-black group-hover:bg-gray-900 transition duration-300">
          <HiArrowRight className="h-8 w-8 text-white transition-all" />
        </span>
        <div className="space-y-4 pt-5 text-base leading-7 text-gray-600 group-hover:text-white/90">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white">{accelerateCard.title}</h3>
          <p>{accelerateCard.desc}</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <a
            href="#"
            className="text-black group-hover:text-white transition-all duration-300"
          >
            {accelerateCard.linkText || 'Join Now'} &rarr;
          </a>
        </div>
      </div>
    </motion.div> */}
  </div>
</section>


{/* Testimonial Section */}
{/* Testimonial Section */}
<section className="relative bg-[#F7F8FC] py-20 px-4 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
      Trusted by Bangalore's <span className="text-red-600">Elite</span>
    </h2>
    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
      Real stories from real clients who found their dream properties through Estate Hive.
    </p>

    <h3 className="mt-10 uppercase text-sm tracking-wide font-semibold text-gray-700">
      —— They use our service ——
    </h3>

    {/* Custom Scroll Carousel */}
    <div className="relative mt-14">
      <div
        id="testimonial-scroll"
        className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory px-8 no-scrollbar"
      >
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`
              snap-center flex-shrink-0 w-[300px] md:w-[360px] h-[450px]
              bg-white rounded-2xl shadow-md flex flex-col justify-between
              transition-transform duration-300 ease-in-out hover:scale-[1.04]
            `}
          >
            {/* Top */}
            <div className="p-6">
              <div className="text-yellow-400 text-[40px] mb-2">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <p className="text-lg text-gray-900 font-semibold mb-2 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-xs text-gray-500">{testimonial.location}</p>
            </div>

            {/* Bottom */}
            <div className="bg-[#D6E1FF] p-10 flex items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3 text-left">
                <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 h-full w-70 bg-gradient-to-r from-[#F7F8FC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-70 bg-gradient-to-l from-[#F7F8FC] to-transparent z-10 pointer-events-none" />

      {/* Arrows */}
      <div className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => {
            document.getElementById("testimonial-scroll").scrollBy({
              left: -360,
              behavior: "smooth",
            });
          }}
          className="rounded-full p-3 bg-gray-400 hover:bg-gray-600 transition"
        >
          <img src="/right_arrow-removebg-preview (1).png" alt="Left" className="w-20 h-20 rotate-180" />
        </button>
      </div>
      <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => {
            document.getElementById("testimonial-scroll").scrollBy({
              left: 360,
              behavior: "smooth",
            });
          }}
          className=" rounded-full p-3 bg-gray-400 hover:bg-gray-600 transition"
        >
          <img src="/right_arrow-removebg-preview (1).png" alt="Right" className="w-20 h-20" />
        </button>
      </div>
    </div>
  </div>
</section>



    </>
  );
};

export default HomePage;
