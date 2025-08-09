import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { motion as Motion } from 'framer-motion';

const ecosystemCards = [
  {
    title: 'EH Commercial™',
    desc: 'Verified office spaces, warehouses and retail properties with end‑to‑end support.',
    linkText: 'Explore Commercial',
    link: '/eh-commercial',
  },
  {
    title: 'GeoHeat™ Intelligence',
    desc: 'AI‑powered market heatmaps with 85% accuracy in price forecasting.',
    linkText: 'Discover Insights',
    link: '/eh-geoheat',
  },
  {
    title: 'EH Stay™ Boutique',
    desc: 'Premium short‑term rentals with concierge service.',
    linkText: 'Book Now',
    link: '/eh-stay',
  },
  {
    title: 'EH Signature™',
    desc: 'Ultra‑luxury properties 5Cr+ with white‑glove service and personal RM.',
    linkText: 'View Luxury',
    link: '/eh-signature',
  },
  {
    title: 'EH Living™',
    desc: 'Fully managed long‑term rentals with verified tenants and YieldBot predictions.',
    linkText: 'Find Rentals',
    link: '/eh-living',
  },
  {
    title: 'Smart Match Engine',
    desc: 'AI‑powered property matching based on preferences and behavior patterns.',
    linkText: 'Get Matched',
    link: '/smart-match-engine',
  },
  {
    title: 'EH Rank™',
    desc: 'Every listing and agent scored for transparency.',
    linkText: 'Meet Top Agents',
    link: '/eh-rank',
  },
  {
    title: 'EH Design™',
    desc: 'Exclusive interior design services for Estate Hive clients. Where luxury meets functionality.',
    linkText: 'See Designs',
    link: '/eh-design',
  },
  {
    title: 'EH Accelerate™',
    desc: 'Builder funnel suite that transforms your marketing. From campaign setup to closures—we accelerate your sales.',
    linkText: 'Start Selling',
    link: '/eh-accelerate',
  },
];

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

const RealEstateEcosystem = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center leading-tight text-gray-900"
        >
          Complete Real Estate <span className="text-red-600">Ecosystem</span>
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-lg"
        >
          From buying and selling to renting and investing, we've got every aspect of real estate covered.
        </Motion.p>

        <Motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
        >
          {ecosystemCards.map((card, idx) => {
            const isDarkBlue = card.title === 'EH Design™' || card.title === 'EH Accelerate™';
            const baseColor = isDarkBlue ? '#040449' : '#E7000B';

            return (
              <Motion.div
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
                      <h3
                        className="text-xl font-semibold text-gray-900 group-hover:text-white"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {card.title.replace('™', '')}
                        <span
                          style={{
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontSize: '0.75em',
                            verticalAlign: 'super',
                          }}
                        >
                          ™
                        </span>
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
              </Motion.div>
            );
          })}
        </Motion.div>
      </div>
    </section>
  );
};

export default RealEstateEcosystem;

