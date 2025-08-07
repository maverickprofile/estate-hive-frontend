

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronDown } from 'react-icons/fi'; // Only need ChevronDown here, Swiper handles navigation arrows

import PropertyListing from './PropertyListing'; // ✅ your card section

import listings from '../data/listings';          // ✅ your data

import Testimonials from './Testimonials';


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
//const BUY_MIN = 0;      // ₹1 Cr
//const BUY_MAX = 250000000;     // ₹25 Cr
//const RENT_LEASE_MIN = 0;
//const RENT_LEASE_MAX = 10000000; // ₹1 Cr

const BUY_MIN = 0;       // ₹50 Lakhs
const BUY_MAX = 250000000;     // ₹10 Crore
const RENT_LEASE_MIN = 0;  // ₹10k
const RENT_LEASE_MAX = 1000000; // ₹5 Lakhs


const HomePage = () => {
    // State for form fields
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
    const [isPropertyTypeDropdownOpen, setIsPropertyTypeDropdownOpen] = useState(false);
    const [rangeOpen, setRangeOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Buy'); // or 'Rent'
    const [minPrice, setMinPrice] = useState(BUY_MIN);
    const [maxPrice, setMaxPrice] = useState(BUY_MAX);
    const [priceRange, setPriceRange] = useState([BUY_MIN, BUY_MAX]);


    const [scrollY, setScrollY] = useState(0);

  

// Dropdown options
const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad'];
const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Plot', 'Commercial'];

<PropertyListing listings={listings} />


// real estate eco system components
const ecosystemCards = [
    {
        title: "EH Commercial™",
        desc: "Verified office spaces, warehouses and retail properties with end‑to‑end support.",
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
        className="scroll-smooth relative w-full min-h-[120vh] md:h-[150vh] bg-no-repeat bg-cover bg-center text-white overflow-hidden flex items-center justify-center"
        style={{
            backgroundImage: `url('/bg-Early-mrng.jpg')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
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
                            className={`cursor-pointer hover:underline whitespace-nowrap transition-all duration-200 ${activeTab === label ? 'underline text-white' : 'text-white/80'
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




      {/* EH Verified Exclusives Section */ }
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

          <PropertyListing listings={listings} />




{/* Browse All Listings Button */ }
< motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }
    }
    transition={{ ...fadeInVariants.visible.transition, delay: 0.5 }}
    className="text-center mt-20 z-30"
>
    <button className="bg-[#040449] text-white font-semibold text-md px-6 mb-15 py-3 rounded-[12px] shadow-lg hover:bg-red-700 transition duration-300 ">
        Browse All <span style={{ fontFamily: "'Exo 2', sans-serif" }}>EH Verified
            <span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '0.75em', verticalAlign: 'super', marginLeft: '2px' }}>™</span>
        </span> Listings
    </button>

</motion.div >





{/* Real Estate Ecosystem Section */ }
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
            <Testimonials />

            
    </>
  );
};

export default HomePage;



