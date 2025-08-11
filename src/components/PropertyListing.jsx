import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//SwiperCore.use([Navigation]);

const PropertyListing = ({ listings = [] }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    const tabOptions = ['For Sale', 'For Rent', 'Luxury Rentals', 'EH Signature™'];
    const activeTab = tabOptions[activeTabIndex];

    const filteredListings = useMemo(() => {
        const source = Array.isArray(listings) ? listings : [];
        const matching = source.filter((listing) => listing.category === activeTab);
        if (matching.length === 0) return [];
        const repeated = [];
        while (repeated.length < 12) {
            repeated.push(...matching);
        }
        return repeated.slice(0, 12);
    }, [listings, activeTab]);

    const slidesPerView = 3;
    const totalSlides = Math.ceil(filteredListings.length / slidesPerView);

    const handlePrev = () => {
        if (currentSlide > 0) {
            swiperRef.current?.swiper.slidePrev();
            setCurrentSlide((prev) => prev - 1);
        } else {
            const prevTab = (activeTabIndex - 1 + tabOptions.length) % tabOptions.length;
            setActiveTabIndex(prevTab);
            setCurrentSlide(0);
        }
    };

    const handleNext = () => {
        if (currentSlide < totalSlides - 1) {
            swiperRef.current?.swiper.slideNext();
            setCurrentSlide((prev) => prev + 1);
        } else {
            const nextTab = (activeTabIndex + 1) % tabOptions.length;
            setActiveTabIndex(nextTab);
            setCurrentSlide(0);
        }
    };

    useEffect(() => {
        setCurrentSlide(0);
    }, [activeTabIndex]);

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section className="relative bg-white py-20 px-4 z-30">
            <div className="max-w-7xl mx-auto relative z-20">
                {/* Tabs */}
                <Motion.div
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex justify-center mb-10 md:mb-16 mt-10"
                >
                    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide bg-[rgba(28,117,188,0.08)] rounded-[12px] p-1 gap-2 md:gap-5 flex justify-start md:justify-center flex-nowrap md:flex-wrap backdrop-blur-sm">
                        {tabOptions.map((tab, index) => {
                            const isSignature = tab.startsWith('EH Signature');
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTabIndex(index)}
                                    className={`px-4 py-2 md:px-6 md:py-2 mx-1 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex-shrink-0 md:flex-grow-0 ${activeTabIndex === index ? 'text-[#E7000B] bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-200'
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
                </Motion.div>

                {/* Carousel */}
                <Motion.div
                    variants={fadeInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {filteredListings.length === 0 ? (
                        <p className="text-center text-gray-500">No listings available.</p>
                    ) : (
                        <Swiper
                            ref={swiperRef}
                            key={activeTabIndex}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                            className="mySwiper listings-swiper pb-8 px-1 sm:px-4"
                        >
                            {filteredListings.map((listing, index) => {
                            const isImageTop = index % 2 === 0;
                            return (
                                <SwiperSlide key={`${listing.id}-${index}`}>
                                    <div className="flex justify-center px-2 m-1">
                                        <Motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-between w-[90%] md:w-full h-[430px] border border-gray-200"
                                        >
                                            {isImageTop && (
                                                <div className="relative w-full h-62 overflow-hidden px-8">
                                                    <img
                                                        src={listing.image}
                                                        alt={listing.title}
                                                        className="w-full h-full object-cover scale-[1.5] transition-transform duration-500"
                                                    />
                                                    <button
                                                        className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-[12px] shadow"
                                                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                                                    >
                                                        {listing.badge.replace('™', '')}
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
                                                    </button>
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
                                                    <button
                                                        className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-[12px] shadow -translate-y-2"
                                                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                                                    >
                                                        {listing.badge.replace('™', '')}
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
                                                    </button>
                                                </div>
                                            )}
                                        </Motion.div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        </Swiper>
                    )}

                    {/* Navigation Arrows */}
                    <div className="flex justify-center gap-6 mt-6 md:hidden">
                        <button onClick={handlePrev} className="bg-gray-800 text-white p-3 rounded-full shadow hover:bg-red-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={handleNext} className="bg-gray-800 text-white p-3 rounded-full shadow hover:bg-red-600 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop arrows */}
                    <div className="hidden md:flex">
                        <div onClick={handlePrev} className="swiper-button-prev-listings absolute left-[-60px] top-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div onClick={handleNext} className="swiper-button-next-listings absolute right-[-60px] top-1/2 -translate-y-1/2 z-30 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
};

export default PropertyListing;
