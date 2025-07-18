import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronDown } from 'react-icons/fi'; // Only need ChevronDown here, Swiper handles navigation arrows
import { Range } from 'react-range';
import locationIcon from '/location pin.svg'; // Ensure this path is correct
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animations
import { HiArrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation CSS

// Define constants for tab-based price range limits
const BUY_MIN = 0;      // ₹1 Cr
const BUY_MAX = 250000000;     // ₹25 Cr
const RENT_LEASE_MIN = 0;
const RENT_LEASE_MAX = 10000000; // ₹1 Cr

const HomePage = () => {
  // State for form fields
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isPropertyTypeDropdownOpen, setIsPropertyTypeDropdownOpen] = useState(false);
  const [rangeOpen, setRangeOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([BUY_MIN, BUY_MAX]);
  const [minPrice, setMinPrice] = useState(BUY_MIN);
  const [maxPrice, setMaxPrice] = useState(BUY_MAX);
  const [activeTab, setActiveTab] = useState('Buy');
  const [scrollY, setScrollY] = useState(0);

  // Dropdown options
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
    desc: "Verified office spaces, warehouses, and retail properties with end‑to‑end support.",
    linkText: "Explore Commercial",
    link: "/eh-commercial",
  },
  {
    title: "GeoHeat™ Intelligence",
    desc: "AI‑powered market heatmaps with 85% accuracy in price forecasting.",
    linkText: "Discover Insights",
    link: "/eh-geoheat",
  },
  {
    title: "EH Stay™ Boutique",
    desc: "Premium short‑term rentals with concierge service.",
    linkText: "Book Now",
    link: "/eh-stay",
  },
  {
    title: "EH Signature™",
    desc: "Ultra‑luxury properties 5Cr+ with white‑glove service and personal RM.",
    linkText: "View Luxury",
    link: "/eh-signature",
  },
  {
    title: "EH Living™",
    desc: "Fully managed long‑term rentals with verified tenants and YieldBot predictions.",
    linkText: "Find Rentals",
    link: "/eh-living",
  },
  {
    title: "Smart Match Engine",
    desc: "AI‑powered property matching based on preferences and behavior patterns.",
    linkText: "Get Matched",
    link: "/smart-match-engine",
  },
  {
    title: "EH Rank™",
    desc: "Every listing and agent scored for transparency.",
    linkText: "Meet Top Agents",
    link: "/eh-rank",
  },
  {
    title: "EH Design™",
    desc: "Exclusive interior design services for Estate Hive clients. Where luxury meets functionality.",
    linkText: "See Designs",
    link: "/eh-design",
  },
  {
    title: "EH Accelerate™",
    desc: "Builder funnel suite that transforms your marketing. From campaign setup to closures—we accelerate your sales.",
    linkText: "Start Selling",
    link: "/eh-accelerate",
  },
];


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
      text: 'Estate Hive made finding a commercial space incredibly easy. Their GeoHeat™ insights were a game-changer for our business.',
      location: 'Office in Koramangala',
      rating: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkHXDtUQRea0mhqJfcly2JmKlpINontO1ruire9eiQBStGywKDkV7WK8XM-oYLfhajUI&usqp=CAU',
      name: 'Priya Sharma',
      role: 'Entrepreneur',
    },
    {
      text: 'The Smart Match Engine truly understood my needs. I got personalized recommendations that perfectly fit my investment goals.',
      location: 'Apartment in Indiranagar',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww',
      name: 'Rahul Singh',
      role: 'Investor',
    },
    {
      text: 'EH Stay™ Boutique was fantastic for our short-term rental. Luxurious, well-maintained, and the concierge service was top-notch.',
      location: 'Luxury Stay in JP Nagar',
      rating: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7ltq11RLOqyn1QcuU56jshO_eUag-BbDjadbxjgOGU21EkeiTsugxluEdyGULqa2--0&usqp=CAU',
      name: 'Anjali Reddy',
      role: 'Traveler',
    },
    {
      text: 'Selling my property was hassle-free with EH Accelerate™. Their marketing strategies truly boosted visibility and led to a quick sale.',
      location: 'Plot in Sarjapur',
      rating: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkHXDtUQRea0mhqJfcly2JmKlpINontO1ruire9eiQBStGywKDkV7WK8XM-oYLfhajUI&usqp=CAU',
      name: 'Amit Patel',
      role: 'Property Owner',
    },
    {
      text: 'The EH Design™ team transformed my new apartment into a masterpiece. Their attention to detail and understanding of modern aesthetics is commendable.',
      location: 'Apartment Interior',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww',
      name: 'Sneha Rao',
      role: 'Homeowner',
    },
    
  ];


  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBackgroundPosition = `center ${-70 - scrollY * 0.12}px`;

  // Animate tab-based price range
  useEffect(() => {
    if (activeTab === 'Buy') {
      setMinPrice(BUY_MIN);
      setMaxPrice(BUY_MAX);
      setPriceRange([BUY_MIN, BUY_MAX]);
    } else {
      setMinPrice(RENT_LEASE_MIN);
      setMaxPrice(RENT_LEASE_MAX);
      setPriceRange([0, RENT_LEASE_MAX]); // Default mid-range for Rent/Lease
    }
  }, [activeTab]);

  // Framer Motion Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };


  return (
    <>
      <section
  className="relative w-full min-h-[120vh] md:h-[150vh] bg-no-repeat bg-cover bg-center text-white overflow-hidden flex items-center justify-center"
  style={{
    backgroundImage: "url('/bg-Early-mrng.jpg')",
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 z-0" />

  <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-28 pb-10 flex flex-col items-center justify-center text-center">
    {/* Heading */}
    <motion.h1
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight text-white drop-shadow-md max-w-4xl"
    >
      <div>
        Discover{' '}
        <span style={{ fontFamily: "'Exo 2', sans-serif" }}>
          EH Verified
          <span
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '25px',
              verticalAlign: 'super',
              marginLeft: '2px',
            }}
          >
            ™
          </span>
        </span>
      </div>
      <div className="mt-1">Homes & Premium Rentals</div>
    </motion.h1>

    {/* Subheading */}
    <motion.p
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ ...fadeInVariants.visible.transition, delay: 0.3 }}
      className="mt-6 text-base sm:text-lg md:text-xl font-medium text-gray-200 drop-shadow-sm max-w-2xl px-2"
    >
      <span className="block mb-1">Exclusive. Curated. Personalized.</span>
      Luxury homes, elite rentals & smart real estate technology — all in one place.
    </motion.p>

{/* ---------- TABS ---------- */}
<div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-10 -mb-px">
  <div className="
    w-full
    bg-white/30 backdrop-blur-md text-white font-semibold
    rounded-t-[15px]
    flex justify-between sm:justify-around
    px-4 py-3 text-sm sm:text-base tracking-wide
  ">
    {['Buy', 'Rent', 'Lease'].map((label) => (
      <span
        key={label}
        onClick={() => setActiveTab(label)}
        className={`cursor-pointer hover:underline whitespace-nowrap transition-all duration-200 ${
          activeTab === label ? 'underline text-white' : 'text-white/80'
        }`}
      >
        {label}
      </span>
    ))}
  </div>
</div>

{/* ---------- SEARCH BAR ---------- */}
<motion.div
  variants={fadeInVariants}
  initial="hidden"
  animate="visible"
  transition={{ ...fadeInVariants.visible.transition, delay: 0.6 }}
  className="w-full max-w-5xl mx-auto px-4 sm:px-6"
>
  <div className="
    bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg
    rounded-b-[15px]
    flex flex-col md:flex-row
    items-start md:items-center
    px-4 py-6 space-y-5 md:space-y-0 md:gap-0
    text-left
  ">
    {/* LOCATION */}
    <div className="relative w-full md:flex-1 md:border-r md:pr-4">
      <label className="block mb-1 text-xs md:text-sm text-gray-800">Location</label>
      <div
        className="w-full flex items-center justify-between text-sm text-gray-800 font-medium cursor-pointer"
        onClick={() => {
          setIsLocationDropdownOpen((prev) => !prev);
          setIsPropertyTypeDropdownOpen(false);
          setRangeOpen(false);
        }}
      >
        <span>{location || 'Select your city'}</span>
        <FiChevronDown size={18} className="text-gray-600" />
      </div>
      <AnimatePresence>
        {isLocationDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white rounded-md shadow-lg mt-2 py-1 z-50"
          >
            {locations.map((loc) => (
              <li
                key={loc}
                onClick={() => {
                  setLocation(loc);
                  setIsLocationDropdownOpen(false);
                }}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                {loc}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>

    {/* PROPERTY TYPE */}
    <div className="relative w-full md:flex-1 md:px-4 md:border-r">
      <label className="block mb-1 text-xs md:text-sm text-gray-800">Property Type</label>
      <div
        className="w-full flex items-center justify-between text-sm text-gray-800 font-medium cursor-pointer"
        onClick={() => {
          setIsPropertyTypeDropdownOpen((prev) => !prev);
          setIsLocationDropdownOpen(false);
          setRangeOpen(false);
        }}
      >
        <span>{propertyType || 'Choose Property Type'}</span>
        <FiChevronDown size={18} className="text-gray-600" />
      </div>
      <AnimatePresence>
        {isPropertyTypeDropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white rounded-md shadow-lg mt-2 py-1 z-50"
          >
            {propertyTypes.map((type) => (
              <li
                key={type}
                onClick={() => {
                  setPropertyType(type);
                  setIsPropertyTypeDropdownOpen(false);
                }}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                {type}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>

    {/* PRICE RANGE */}
    <div className="relative w-full md:flex-1 md:px-4">
      <label className="block mb-1 text-xs md:text-sm text-gray-800">Price Range</label>
      <div
        className="w-full flex items-center justify-between text-sm text-gray-800 font-medium cursor-pointer"
        onClick={() => {
          setRangeOpen((prev) => !prev);
          setIsLocationDropdownOpen(false);
          setIsPropertyTypeDropdownOpen(false);
        }}
      >
        <span>₹{priceRange[0].toLocaleString()} – ₹{priceRange[1].toLocaleString()}</span>
        <FiChevronDown size={18} className="text-gray-600" />
      </div>
      <AnimatePresence>
        {rangeOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white p-4 rounded-xl shadow-lg mt-2 z-40"
          >
            <Range
              step={100000}
              min={minPrice}
              max={maxPrice}
              values={priceRange}
              onChange={setPriceRange}
              renderTrack={({ props, children }) => (
                <div {...props} className="h-1 bg-gray-300 rounded" style={props.style}>
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div {...props} className="h-4 w-4 bg-[#1F275E] rounded-full shadow-md" />
              )}
            />
            <p className="mt-2 text-center text-sm text-gray-700">
              ₹{priceRange[0].toLocaleString()} – ₹{priceRange[1].toLocaleString()}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* BUTTON */}
    <div className="w-full md:w-auto md:px-4">
      <button className="bg-[#040449] text-white font-semibold text-sm py-3 px-6 rounded-full shadow hover:opacity-90 transition w-full">
        Browse Properties
      </button>
    </div>
  </div>
</motion.div>


  </div>

  {/* Bottom Gradient */}
  <div className="absolute bottom-0 left-0 w-full h-48 md:h-60 bg-gradient-to-t from-[#05051f] to-transparent" />
</section>




      {/* EH Verified Exclusives Section */}
      <section className="bg-[#05051f] text-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    
    {/* Subheading */}
    <motion.p
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-[#b32b14] font-bold text-2xl sm:text-3xl md:text-[40px] mb-2"
    >
      <span  style={{ fontFamily: "'Exo 2', sans-serif" }}>EH Verified</span>
      <span
        style={{
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontSize: '20px',
          verticalAlign: 'super',
          marginLeft: '2px',
        }}
      >
        ™
      </span>
      &nbsp;Exclusives
    </motion.p>

    {/* Heading */}
    <motion.h2
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold mb-4 leading-tight"
    >
      Only on Estate Hive.<br className="hidden md:block" />
      Nowhere else.
    </motion.h2>

    {/* Description */}
    <motion.p
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ...fadeInVariants.visible.transition, delay: 0.4 }}
      className="text-gray-300 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto"
    >
      Owner-signed exclusivity. Free professional media. Pre-verified legal docs. GeoHeat™ enabled.
    </motion.p>

    {/* Feature Cards */}
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
    >
      {[
  {
    title: 'Owner-Signed Exclusivity',
    desc: 'Direct partnerships with property owners',
    icon: '/cup.svg',
    hoverIcon: '/cup read.svg',
  },
  {
    title: 'Professional Media',
    desc: 'Free photography and virtual tours',
    icon: '/camera.svg',
    hoverIcon: '/cam red.svg',
  },
  {
    title: 'Pre-Verified Documents',
    desc: 'Complete legal verification process',
    icon: '/verified.svg',
    hoverIcon: '/verified red.svg',
  },
  {
    title: 'GeoHeat Tracking',
    desc: 'AI-powered market intelligence',
    icon: '/geo heat_1.svg',
    hoverIcon: '/geo red.svg',
  },
].map((item, i) => (
  <motion.div
          key={i}
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="bg-white text-[#121212] rounded-3xl p-8 md:p-8 flex flex-col items-center text-center shadow-none hover:shadow-[8px_8px_20px_#b32b14] group"
        >
    {/* Icon Swap Logic */}
    <div className="relative h-16 w-16 mb-6">
      <img
        src={item.icon}
        alt={item.title}
        className="h-16 w-16 absolute top-0 left-0 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-0"
      />
      <img
        src={item.hoverIcon}
        alt={`${item.title} Hover`}
        className="h-16 w-16 absolute top-0 left-0 opacity-0 group-hover:opacity-300 transition-opacity duration-300 ease-in-out group-hover:scale-110"
      />
    </div>

    {/* Text Content */}
    <h3 className="font-bold text-lg sm:text-xl text-[#121212] mb-2">
      {item.title}
    </h3>
    <p className="text-sm text-gray-600">{item.desc}</p>
  </motion.div>
))}

    </motion.div>
  </div>
</section>


{/* Featured Listings Section */}
<section className="relative bg-white py-20 px-4 z-30">
  <div className="max-w-7xl mx-auto relative z-20">
    {/* Tab Navigation */}
    <motion.div
  variants={fadeInVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex justify-center mb-10 md:mb-16 mt-10"
>
  <div className="w-full md:w-full bg-[rgba(28,117,188,0.08)] rounded-[12px] p-1 gap-2 md:gap-5 flex justify-center flex-wrap backdrop-blur-sm">
    {['For Sale', 'For Rent', 'Luxury Rentals', 'EH Signature™'].map((tab) => {
      const isSignature = tab.startsWith('EH Signature');

      return (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex-grow md:flex-grow-0 ${
            activeTab === tab
              ? 'text-[#E7000B] bg-white shadow-sm'
              : 'text-gray-700 hover:bg-gray-200'
          }`}
          style={isSignature ? { fontFamily: "'Exo 2', sans-serif" } : {}}
        >
          {isSignature ? (
            <>
              {tab.replace('™', '')}
              <span
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontSize: '0.75em',
                  verticalAlign: 'super',
                  marginLeft: '2px',
                }}
              >
                ™
              </span>
            </>
          ) : (
            tab
          )}
        </button>
      );
    })}
  </div>
</motion.div>


    {/* Cards Carousel */}
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ...fadeInVariants.visible.transition, delay: 0.3 }}
      className="relative"
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-listings',
          prevEl: '.swiper-button-prev-listings',
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        className="mySwiper listings-swiper pb-8 px-1 sm:px-4"
      >
        {listings.map((listing, index) => {
          const isImageTop = index % 2 === 0;
          return (
            <SwiperSlide key={listing.id}>
  <div className="flex justify-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-between w-[90%] md:w-full h-[430px] border border-gray-200"
    >
      {isImageTop && (
        <div className="relative w-full h-62 overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover scale-[1.5] transition-transform duration-500"
          />
          <span
            className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-[12px] shadow"
          >
            <span style={{ fontFamily: "'Exo 2', sans-serif" }}>
              {listing.badge.replace('™', '')}
            </span>
            {listing.badge.includes('™') && (
              <span
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontSize: '0.75em',
                  verticalAlign: 'super',
                  marginLeft: '2px',
                }}
              >
                ™
              </span>
            )}
          </span>
        </div>
      )}

      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-medium text-2xl text-gray-900 mb-1">{listing.title}</h3>
          <p className="text-sm text-gray-600 mb-1">{listing.location}</p>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <span>{listing.area}</span>
            <span>{listing.bhk}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-[30px] text-black">{listing.price}</span>
          <button className="bg-red-600 text-white text-[12px] font-semibold px-3 py-1 rounded-full shadow hover:bg-red-700 transition duration-300">
            View Details
          </button>
        </div>
      </div>

      {!isImageTop && (
        <div className="relative w-full h-62 overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover scale-[1.5] transition-transform duration-500"
          />
          <span
            className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-[12px] shadow"
          >
            <span style={{ fontFamily: "'Exo 2', sans-serif" }}>
              {listing.badge.replace('™', '')}
            </span>
            {listing.badge.includes('™') && (
              <span
                style={{
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontSize: '0.75em',
                  verticalAlign: 'super',
                  marginLeft: '2px',
                }}
              >
                ™
              </span>
            )}
          </span>
        </div>
      )}
    </motion.div>
  </div>
</SwiperSlide>

          );
        })}
      </Swiper>

      {/* Scroll Buttons - Desktop */}
      <div className="hidden md:flex">
        <div className="swiper-button-prev-listings absolute left-[-60px] top-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next-listings absolute right-[-60px] top-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Scroll Buttons - Mobile */}
      <div className="md:hidden flex justify-center gap-4 mt-6">
        <button className="swiper-button-prev-listings bg-gray-800 text-white p-2 rounded-full shadow hover:bg-red-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="swiper-button-next-listings bg-gray-800 text-white p-2 rounded-full shadow hover:bg-red-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>

    {/* Browse All Listings Button */}
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ...fadeInVariants.visible.transition, delay: 0.5 }}
      className="text-center mt-20 z-30"
    >
      <button className="bg-[#040449] text-white font-semibold text-md px-6 py-3 rounded-[12px] shadow-lg hover:bg-red-700 transition duration-300 ">
  Browse All <span style={{ fontFamily: "'Exo 2', sans-serif" }}>EH Verified
    <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '0.75em', verticalAlign: 'super', marginLeft: '2px' }}>™</span>
  </span> Listings
</button>

    </motion.div>
  </div>
</section>




      {/* Real Estate Ecosystem Section */}
      <section className="bg-gray-100 py-20 px-4 relative overflow-hidden" id='services'>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center leading-tight text-gray-900"
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
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of element is in view
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
          >
            {ecosystemCards.map((card, idx) => {
  const isDarkBlue = card.title === "EH Design™" || card.title === "EH Accelerate™";
  const baseColor = isDarkBlue ? "#040449" : "#E7000B";

  return (
    <motion.div
  key={idx}
  variants={cardVariants}
  className="group relative overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-200 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
>
  <span
    className="absolute top-10 z-0 h-10 w-10 rounded-full transition-all duration-500 group-hover:scale-[25]"
    style={{ backgroundColor: baseColor }}
  />

  <div className="relative z-10 flex flex-col flex-grow justify-between">
    <div>
      <span
        className="grid h-10 w-10 place-items-center rounded-full transition-all duration-300 group-hover:brightness-110"
        style={{ backgroundColor: baseColor }}
      >
        <HiArrowRight className="h-6 w-6 text-white transition-all" />
      </span>

      <div className="space-y-4 pt-5 text-base leading-7 text-gray-600 group-hover:text-white/90 transition-all">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          {card.title.replace('™', '')}
          <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '0.75em', verticalAlign: 'super' }}>™</span>
        </h3>
        <p>{card.desc}</p>
      </div>
    </div>

    <div className="pt-6 text-base font-semibold leading-7">
      <Link
        to={card.link}
        className={`transition-all duration-300 ${isDarkBlue ? 'text-[#040449]' : 'text-[#E7000B]'} group-hover:text-white`}
      >
        {card.linkText || 'Explore more'} &rarr;
      </Link>
    </div>
  </div>
</motion.div>

  );
})}

          </motion.div>
        </div>
      </section>

<section className="bg-[#F7F8FC] py-14 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-gray-900"
    >
      Trusted by Bangalore's <span className="text-red-600">Elite</span>
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mt-3 text-gray-600 max-w-xl mx-auto"
    >
      Real stories from real clients who found their dream properties through Estate Hive.
    </motion.p>

    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mt-8 uppercase text-sm tracking-wide font-semibold text-gray-700"
    >
      —— They use our service ——
    </motion.h3>

    {/* Carousel */}
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="relative mt-10"
>
  {/* Gradient Fades on Desktop */}
  <div className="hidden md:block absolute top-0 left-0 h-full w-20 z-10 bg-gradient-to-r from-[#F7F8FC] to-transparent pointer-events-none" />
  <div className="hidden md:block absolute top-0 right-0 h-full w-20 z-10 bg-gradient-to-l from-[#F7F8FC] to-transparent pointer-events-none" />

  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    centeredSlides
    loop={true} // ✅ Infinite scroll
    navigation={{
      nextEl: '.swiper-button-next-testimonials',
      prevEl: '.swiper-button-prev-testimonials'
    }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
    className="testimonials-swiper"
  >
    {testimonials.map((testimonial, idx) => (
      <SwiperSlide key={idx}>
        <div className="w-[90%] md:w-full h-[450px] mx-auto bg-white rounded-2xl shadow-md flex flex-col justify-between transition-all duration-500 ease-in-out hover:scale-105">
          {/* Top */}
          <div className="p-6">
            <div className="text-yellow-400 text-[32px] mb-2">
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className="text-base text-gray-900 font-semibold mb-2 leading-relaxed">
              "{testimonial.text}"
            </p>
            <p className="text-xs text-gray-500">{testimonial.location}</p>
          </div>

          {/* Bottom */}
          <div className="bg-[#D6E1FF] p-8 flex items-center">
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
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Navigation Arrows */}
  {/* Desktop Buttons - Left and Right */}
  <div className="swiper-button-prev-testimonials absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition hidden md:flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
  <div className="swiper-button-next-testimonials absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition hidden md:flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>

  {/* Mobile Buttons - Below Carousel */}
  <div className="flex md:hidden justify-center gap-6 mt-6">
    <div className="swiper-button-prev-testimonials bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
    <div className="swiper-button-next-testimonials bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</motion.div>

  </div>
</section>


    </>
  );
};

export default HomePage;
