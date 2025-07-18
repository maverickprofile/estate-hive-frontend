import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

function EHAccelerate() {
  // Dummy data for the performance metrics
  const performanceMetrics = [
    {
      value: '4.2x',
      title: 'Average ROAS',
      description: 'Return on ad spend',
    },
    {
      value: '85%',
      title: 'Lead Quality',
      description: 'Qualified prospects',
    },
    {
      value: '48hrs',
      title: 'Campaign Setup',
      description: 'Time to go live',
    },
    {
      value: '₹750',
      title: 'Cost Per Lead',
      description: 'Average across campaigns',
    },
  ];

  // Dummy data for the marketing suite features
  const marketingFeatures = [
    {
      icon: '/campaign setup.svg', // Placeholder icon path
      title: 'Campaign Setup',
      description: 'Professional ad creation and targeting for maximum ROI',
    },
    {
      icon: '/builder.svg', // Placeholder icon path
      title: 'Builder Dashboard',
      description: 'Real-time analytics and performance tracking',
    },
    {
      icon: '/data.svg', // Placeholder icon path
      title: 'Meta & Google Ads',
      description: 'Multi-platform advertising with optimized spend',
    },
    {
      icon: '/lead management.svg', // Placeholder icon path
      title: 'Lead Management',
      description: 'Automated lead scoring and nurturing workflows',
    },
  ];

  // Dummy data for pricing plans
  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹50,000',
      period: '/month',
      commission: '+ 1% on closures',
      features: [
        'Basic campaign setup',
        'Google Ads management',
        'Lead dashboard access',
        'Monthly reporting',
        'Email support',
      ],
      isPopular: false,
      buttonColor: 'bg-gray-800 hover:bg-gray-900', // Darker button for non-popular
    },
    {
      name: 'Professional',
      price: '₹75,000',
      period: '/month',
      commission: '+ 1% on closures',
      features: [
        'Advanced campaign setup',
        'Google & Meta Ads',
        'AI-powered targeting',
        'Weekly reporting',
        'Priority support',
        'Landing page optimization',
      ],
      isPopular: true,
      buttonColor: 'bg-red-600 hover:bg-red-700', // Red for popular
    },
    {
      name: 'Enterprise',
      price: '₹1,00,000',
      period: '/month',
      commission: '+ 1% on closures',
      features: [
        'Full-service management',
        'Multi-platform advertising',
        'Custom analytics dashboard',
        'Daily reporting',
        'Dedicated account manager',
        'A/B testing & optimization',
        'WhatsApp integration',
      ],
      isPopular: false,
      buttonColor: 'bg-gray-800 hover:bg-gray-900', // Darker button for non-popular
    },
  ];

  // Framer Motion variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* EH Accelerate Hero Section */}
      <section
        className="
          relative w-full h-screen md:h-[80vh] lg:h-[90vh] /* Responsive height */
          bg-cover bg-center /* Cover the area, center the image */
          text-white /* White text for contrast */
          flex items-center justify-center /* Center content vertically and horizontally */
          overflow-hidden /* Hide any overflow from background */
        "
        style={{ backgroundImage: "url('/eh_accelerate_hero_bg (1).png')" }} /* Placeholder background image */
      >
        {/* Overlay for readability and color tint */}
        <div className="absolute inset-0 bg-black/60 bg-opacity-40" /> {/* Dark overlay */}

        {/* Content Container */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="
              text-4xl md:text-5xl lg:text-6xl /* Responsive font size */
              font-bold leading-tight mb-4 /* Bold, tight line-height, bottom margin */
            "
          >
            EH Accelerate™
          </motion.h1>

          {/* Subtitle/Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...fadeInUp.visible.transition, delay: 0.2 }} // Add delay for sequential animation
            className="
              text-lg md:text-xl lg:text-2xl /* Responsive font size */
              font-medium mb-8 /* Medium weight, bottom margin */
            "
          >
            Builder funnel suite that transforms your marketing. <br />
            From campaign setup to closures - we accelerate your sales.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...fadeInUp.visible.transition, delay: 0.4 }} // Add delay
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <button className="
              bg-purple-700 hover:bg-purple-800 /* Purple background, darker on hover */
              text-white font-semibold /* White text, semi-bold */
              px-8 py-3 rounded-full /* Generous padding, fully rounded */
              shadow-lg hover:shadow-xl /* Shadow for depth, larger on hover */
              transition duration-300 ease-in-out /* Smooth transitions */
              w-full sm:w-auto /* Full width on mobile, auto width on desktop */
            ">
              Start Campaign
            </button>
            <button className="
              bg-transparent border-2 border-purple-700 /* Transparent background, purple border */
              text-purple-200 hover:text-white /* Light purple text, white on hover */
              hover:bg-purple-700 /* Purple background on hover */
              font-semibold px-8 py-3 rounded-full
              shadow-lg hover:shadow-xl
              transition duration-300 ease-in-out
              w-full sm:w-auto
            ">
              View Demo Dashboard
            </button>
          </motion.div>
        </div>
      </section>

      {/* Proven Performance Section */}
      <section className="bg-gray-50 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center mb-4"
            >
              <div className="w-16 h-px bg-gray-300 mr-4" /> {/* Left line */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Proven <span className="text-red-600">Performance</span>
              </h2>
              <div className="w-16 h-px bg-gray-300 ml-4" /> {/* Right line */}
            </motion.div>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ ...fadeInUp.visible.transition, delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              Our numbers speak for themselves
            </motion.p>
          </div>

          {/* Performance Metrics Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of section is visible
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={item}
                className="
                  bg-white rounded-2xl shadow-sm p-6 md:p-8
                  flex flex-col items-center text-center
                  transition-all duration-300 ease-in-out
                  hover:shadow-md hover:scale-105
                "
              >
                {/* Metric Value */}
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </h3>
                {/* Metric Title */}
                <p className="text-lg md:text-xl font-medium text-gray-800 mb-1">
                  {metric.title}
                </p>
                {/* Metric Description */}
                <p className="text-sm text-gray-500">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Complete Marketing Suite Section */}
      <section className="bg-gray-100 py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-12">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center mb-4"
            >
              <div className="w-16 h-px bg-gray-300 mr-4" /> {/* Left line */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Complete <span className="text-red-600">Marketing Suite</span>
              </h2>
              <div className="w-16 h-px bg-gray-300 ml-4" /> {/* Right line */}
            </motion.div>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ ...fadeInUp.visible.transition, delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              Everything you need to accelerate your property sales
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          >
            {marketingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="
                  flex flex-col items-center text-center
                  p-4 /* Padding around content */
                "
              >
                {/* Icon */}
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-20 w-20 mb-6 grayscale" /* Apply grayscale filter */
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/80x80/CCCCCC/333333?text=Icon`; }}
                />
                {/* Feature Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Choose Your Acceleration Plan Section (Minimalist & Attractive) */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <div className="mb-16">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-3"
            >
              Choose Your <span className="text-red-600">Acceleration Plan</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ ...fadeInUp.visible.transition, delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl"
            >
              Flexible plans that scale with your business
            </motion.p>
          </div>

          {/* Plans Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`
                  bg-white rounded-2xl shadow-lg p-8 border border-gray-200
                  flex flex-col items-center text-center
                  transition-all duration-300 ease-in-out
                  ${plan.isPopular ? 'relative scale-[1.03] shadow-xl border-red-600' : 'hover:shadow-xl hover:scale-[1.02]'} /* Highlight popular, subtle hover for others */
                `}
              >
                {plan.isPopular && (
                  <span className="
                    absolute -top-4 bg-red-600 text-white font-semibold
                    px-4 py-1 rounded-full text-sm shadow-md
                  ">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-4"> {/* Adjusted mt for popular badge */}
                  {plan.name}
                </h3>
                <p className="text-5xl font-extrabold text-black mb-1">
                  {plan.price}<span className="text-xl font-semibold text-gray-700">{plan.period}</span>
                </p>
                <p className="text-base font-semibold text-orange-600 mb-6">
                  {plan.commission}
                </p>

                <ul className="text-left space-y-4 text-gray-700 mb-8 text-base font-medium">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✔</span> {feature}
                    </li>
                  ))}
                </ul>

                <button className={`
                  ${plan.buttonColor}
                  text-white font-semibold py-3 px-8 rounded-full
                  shadow-md hover:shadow-lg transition duration-300
                  w-full
                `}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default EHAccelerate;
