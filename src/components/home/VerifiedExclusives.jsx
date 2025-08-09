import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import PropertyListing from '../PropertyListing';
import { supabase } from '../../lib/supabaseClient';

const features = [
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
];

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
    transition: { staggerChildren: 0.1 },
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

const VerifiedExclusives = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const { data, error } = await supabase
        .from('properties')
        .select('id, title, location, price, category, bhk, area, badge, image_urls, status')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching properties:', error);
        return;
      }

      const formatted = (data || [])
        .filter((item) => item.status === 'active')
        .map((item) => ({
          id: item.id,
          title: item.title,
          location: item.location,
          price: item.price,
          category: item.category,
          bhk: item.bhk,
          area: item.area,
          badge: item.badge || '',
          image: item.image_urls?.[0] || '',
        }));

      setListings(formatted);
    };

    fetchListings();
  }, []);

  return (
    <>
      <section className="bg-[#05051f] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#b32b14] font-bold text-2xl sm:text-3xl md:text-[40px] mb-2"
          >
            <span style={{ fontFamily: "'Exo 2', sans-serif" }}>EH Verified</span>
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
          </Motion.p>

          <Motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold mb-4 leading-tight"
          >
            Only on Estate Hive.<br className="hidden md:block" />
            Nowhere else.
          </Motion.h2>

          <Motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...fadeInVariants.visible.transition, delay: 0.4 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto"
          >
            Owner-signed exclusivity. Free professional media. Pre-verified legal docs. GeoHeat™ enabled.
          </Motion.p>

          <Motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {features.map((item, i) => (
              <Motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="bg-white text-[#121212] rounded-3xl p-8 md:p-8 flex flex-col items-center text-center shadow-none hover:shadow-[8px_8px_20px_#b32b14] group"
              >
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
                <h3 className="font-bold text-lg sm:text-xl text-[#121212] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      <PropertyListing listings={listings} />

      <Motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ ...fadeInVariants.visible.transition, delay: 0.5 }}
        className="text-center mt-20 z-30"
      >
        <button className="bg-[#040449] text-white font-semibold text-md px-6 mb-15 py-3 rounded-[12px] shadow-lg hover:bg-red-700 transition duration-300">
          Browse All <span style={{ fontFamily: "'Exo 2', sans-serif" }}>EH Verified<span style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '0.75em', verticalAlign: 'super', marginLeft: '2px' }}>™</span></span> Listings
        </button>
      </Motion.div>
    </>
  );
};

export default VerifiedExclusives;

