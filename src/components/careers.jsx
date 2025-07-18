import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import suitable Lucide React icons
import { Lightbulb, TrendingUp, Users, Briefcase, MapPin, Code, Palette, BarChart, Headphones, DollarSign, Target, Clock } from 'lucide-react';

const Careers = () => {
  // Dummy data for "Why Join Us" benefits
  const whyJoinUsBenefits = [
    {
      icon: Lightbulb, // Lucide React icon for innovation
      title: 'Innovation at Core',
      description: 'Work with cutting-edge AI and data science to revolutionize real estate.',
    },
    {
      icon: TrendingUp, // Lucide React icon for growth
      title: 'Accelerated Growth',
      description: 'Opportunities for rapid career progression in a fast-paced environment.',
    },
    {
      icon: Target, // Lucide React icon for impact
      title: 'Make a Real Impact',
      description: 'Contribute to a platform that empowers millions in their property journey.',
    },
    {
      icon: Users, // Lucide React icon for culture/team
      title: 'Vibrant Culture',
      description: 'Collaborative, inclusive, and supportive environment where ideas thrive.',
    },
  ];

  // Dummy data for job openings - added icons for each job type
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      location: 'Bangalore, India',
      department: 'Technology',
      description: 'Develop and deploy advanced AI models for property matching and market analysis.',
      icon: Code, // Icon for Technology/Engineering
    },
    {
      id: 2,
      title: 'Real Estate Sales Manager',
      location: 'Bangalore, India',
      department: 'Sales',
      description: 'Lead a team of sales professionals to achieve ambitious targets in residential sales.',
      icon: DollarSign, // Icon for Sales/Revenue
    },
    {
      id: 3,
      title: 'Product Designer (UI/UX)',
      location: 'Remote',
      department: 'Product',
      description: 'Design intuitive and engaging user experiences for our web and mobile platforms.',
      icon: Palette, // Icon for Design
    },
    {
      id: 4,
      title: 'Data Scientist',
      location: 'Bangalore, India',
      department: 'Data & Analytics',
      description: 'Analyze large datasets to uncover market trends and optimize our AI algorithms.',
      icon: BarChart, // Icon for Data/Analytics
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      location: 'Bangalore, India',
      department: 'Marketing',
      description: 'Develop and execute digital marketing campaigns to increase brand visibility and lead generation.',
      icon: Briefcase, // Icon for Marketing/Business
    },
    {
      id: 6,
      title: 'Customer Success Executive',
      location: 'Bangalore, India',
      department: 'Customer Service',
      description: 'Provide exceptional support to our clients, ensuring their satisfaction and success.',
      icon: Headphones, // Icon for Customer Service
    },
  ];

  // Dummy data for employee testimonials
  const employeeTestimonials = [
    {
      quote: 'Working at Estate Hive is incredibly rewarding. The focus on innovation and the supportive team make every day exciting.',
      name: 'Ananya Rao',
      role: 'AI Engineer',
      avatar: 'https://placehold.co/100x100/FFD700/000000?text=AR', // Placeholder avatar
    },
    {
      quote: 'I\'ve seen tremendous professional growth here. Estate Hive truly invests in its employees and provides ample learning opportunities.',
      name: 'Vikram Singh',
      role: 'Sales Manager',
      avatar: 'https://placehold.co/100x100/87CEEB/000000?text=VS', // Placeholder avatar
    },
    {
      quote: 'The culture here is fantastic. It\'s a place where your ideas are heard, and you genuinely feel like you\'re making a difference.',
      name: 'Priya Devi',
      role: 'Product Designer',
      avatar: 'https://placehold.co/100x100/90EE90/000000?text=PD', // Placeholder avatar
    },
    {
      quote: 'The challenges are stimulating, and the impact of our work on the real estate market is truly inspiring.',
      name: 'Rohan Mehta',
      role: 'Data Scientist',
      avatar: 'https://placehold.co/100x100/FF6347/000000?text=RM', // Placeholder avatar
    },
  ];

  // Framer Motion variants for animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[70vh] md:min-h-[90vh] flex items-center justify-center text-center px-6 py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg')" }} // Using provided local asset path
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <motion.h1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            Join Our <span className="text-red-500">Visionary Team</span>
          </motion.h1>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Shape the future of real estate with cutting-edge technology and a passion for innovation.
          </motion.p>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...fadeInVariants.visible.transition, delay: 0.4 }}
          >
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">
              Explore Open Positions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Join Estate Hive Section */}
      <section className="bg-white py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight"
          >
            Why Join <span className="text-red-600">Estate Hive?</span>
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed"
          >
            We're building more than just a platform; we're building a future.
          </motion.p>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
          >
            {whyJoinUsBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-gray-50 rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Render Lucide React icon with grayscale */}
                <benefit.icon className="w-16 h-16 mx-auto mb-6 text-gray-700 grayscale" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 text-center leading-tight"
          >
            Current <span className="text-red-600">Openings</span>
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 text-center leading-relaxed"
          >
            Explore our exciting career opportunities and find your next challenge.
          </motion.p>

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {jobOpenings.map((job, idx) => (
              <motion.div
                key={job.id}
                variants={cardVariants}
                className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {/* Render Lucide React icon for job opening */}
                  <job.icon className="w-8 h-8 text-blue-600 mr-3 flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {job.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-1">{job.department}</p>
                <p className="text-sm text-gray-500 mb-4">{job.location}</p>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {job.description}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 leading-tight"
          >
            Hear From Our <span className="text-red-600">Team</span>
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed"
          >
            See what our employees love about working at Estate Hive.
          </motion.p>

          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative mt-14"
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-employee',
                prevEl: '.swiper-button-prev-employee',
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper employee-testimonials-swiper pb-12"
            >
              {employeeTestimonials.map((testimonial, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className="
                      bg-gray-50 rounded-2xl shadow-md p-8 h-full flex flex-col justify-between
                      transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl
                    "
                  >
                    <p className="text-lg text-gray-800 font-medium mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover grayscale border-2 border-red-500"
                      />
                      <div className="ml-4 text-left">
                        <p className="text-base font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows for Swiper */}
            <div className="swiper-button-prev-employee absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition cursor-pointer hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-employee absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition cursor-pointer hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="bg-[#1E2235] py-16 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          >
            Ready to Make Your Mark?
          </motion.h2>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Join Estate Hive and be part of a team that's redefining real estate.
          </motion.p>
          <motion.button
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ ...fadeInVariants.visible.transition, delay: 0.4 }}
            className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            View All Openings
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Careers;
