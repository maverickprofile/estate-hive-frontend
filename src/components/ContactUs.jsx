import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    // Here you would typically send this data to a backend service
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const neumorphicShadowOutset = '8px 8px 16px #bebebe, -8px -8px 16px #ffffff';
  const neumorphicShadowInset = 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFFFFF';
  const neumorphicShadowHover = 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFFFFF'; // Inset on hover for buttons

  return (
    <div className="min-h-screen bg-neutral-100 font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[50vh] flex items-center justify-center text-center px-6 py-20 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg')" }} // Placeholder background image
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <motion.h1
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          >
            Contact <span className="text-red-500">Estate Hive</span>
          </motion.h1>
          <motion.p
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...fadeInVariants.visible.transition, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto"
          >
            Get in touch with our team for inquiries, support, or feedback.
          </motion.p>
        </div>
      </section>

      {/* Main Content: Form and Info */}
      <section className="py-20 px-4 bg-neutral-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Form */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="
              bg-neutral-100 rounded-3xl p-8 md:p-12
              shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] /* Neumorphic outset shadow */
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={`
                    w-full px-5 py-3 rounded-xl
                    bg-neutral-200 text-gray-800
                    shadow-[${neumorphicShadowInset}]
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                    transition-all duration-200
                  `}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className={`
                    w-full px-5 py-3 rounded-xl
                    bg-neutral-200 text-gray-800
                    shadow-[${neumorphicShadowInset}]
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                    transition-all duration-200
                  `}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className={`
                    w-full px-5 py-3 rounded-xl
                    bg-neutral-200 text-gray-800
                    shadow-[${neumorphicShadowInset}]
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                    transition-all duration-200
                  `}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry about..."
                  required
                  className={`
                    w-full px-5 py-3 rounded-xl
                    bg-neutral-200 text-gray-800
                    shadow-[${neumorphicShadowInset}]
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                    transition-all duration-200
                  `}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type your message here..."
                  required
                  className={`
                    w-full px-5 py-3 rounded-xl
                    bg-neutral-200 text-gray-800
                    shadow-[${neumorphicShadowInset}]
                    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-none
                    transition-all duration-200
                  `}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: neumorphicShadowHover }}
                whileTap={{ scale: 0.98, boxShadow: neumorphicShadowInset }}
                className={`
                  w-full bg-blue-600 text-white font-bold text-lg
                  py-3 rounded-full mt-6
                  shadow-[${neumorphicShadowOutset}]
                  transition-all duration-300
                `}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Contact Info & Map */}
          <div className="flex flex-col space-y-12">
            {/* Contact Details */}
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="
                bg-neutral-100 rounded-3xl p-8 md:p-10
                shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] /* Neumorphic outset shadow */
              "
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                Our Details
              </h3>
              <ul className="space-y-5 text-gray-700 text-lg">
                <li className="flex items-center justify-center lg:justify-start">
                  <FaMapMarkerAlt className="text-blue-600 text-2xl mr-4 flex-shrink-0" />
                  <span>Estate Hive Headquarters, 123 Main Street, Bangalore, India</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FaPhoneAlt className="text-blue-600 text-2xl mr-4 flex-shrink-0" />
                  <span>+91 123 456 7890</span>
                </li>
                <li className="flex items-center justify-center lg:justify-start">
                  <FaEnvelope className="text-blue-600 text-2xl mr-4 flex-shrink-0" />
                  <span>info@estatehive.com</span>
                </li>
              </ul>
              <div className="flex justify-center lg:justify-start mt-8 space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-3xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-3xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-3xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-3xl" />
                </motion.a>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="
                bg-neutral-100 rounded-3xl overflow-hidden h-[300px] md:h-[400px]
                shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] /* Neumorphic outset shadow */
                border border-gray-200
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.000609340087!2d77.5901416750731!3d12.971598787355013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167a14c3d4f7%3A0x6a0a0b0b0b0b0b0b!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Estate Hive Location on Google Maps"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
