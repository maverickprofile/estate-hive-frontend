import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "Found my dream villa in Whitefield through EH Verified™. The entire process was seamless with transparent documentation.",
    location: "Villa in Whitefield",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww",
    name: "Vignesh Kumar",
    role: "Animator",
  },
  {
    text: "Estate Hive made finding a commercial space incredibly easy. Their GeoHeat™ insights were a game-changer for our business.",
    location: "Office in Koramangala",
    rating: 5,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkHXDtUQRea0mhqJfcly2JmKlpINontO1ruire9eiQBStGywKDkV7WK8XM-oYLfhajUI&usqp=CAU",
    name: "Priya Sharma",
    role: "Entrepreneur",
  },
  {
    text: "The Smart Match Engine truly understood my needs. I got personalized recommendations that perfectly fit my investment goals.",
    location: "Apartment in Indiranagar",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww",
    name: "Rahul Singh",
    role: "Investor",
  },
  {
    text: "EH Stay™ Boutique was fantastic for our short-term rental. Luxurious, well-maintained, and the concierge service was top-notch.",
    location: "Luxury Stay in JP Nagar",
    rating: 5,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7ltq11RLOqyn1QcuU56jshO_eUag-BbDjadbxjgOGU21EkeiTsugxluEdyGULqa2--0&usqp=CAU",
    name: "Anjali Reddy",
    role: "Traveler",
  },
  {
    text: "Selling my property was hassle-free with EH Accelerate™. Their marketing strategies truly boosted visibility and led to a quick sale.",
    location: "Plot in Sarjapur",
    rating: 5,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKkHXDtUQRea0mhqJfcly2JmKlpINontO1ruire9eiQBStGywKDkV7WK8XM-oYLfhajUI&usqp=CAU",
    name: "Amit Patel",
    role: "Property Owner",
  },
  {
    text: "The EH Design™ team transformed my new apartment into a masterpiece. Their attention to detail and understanding of modern aesthetics is commendable.",
    location: "Apartment Interior",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBwcm9maWxlfGVufDB8fDB8fHww",
    name: "Sneha Rao",
    role: "Homeowner",
  },
];

const getCardClass = (index, activeIndex) => {
  if (index === activeIndex) return "scale-[1.05] md:scale-[1.15] z-20";
  return "scale-[0.92] opacity-80 z-10";
};

const TestimonialsSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    if (!swiperInstance) return;

    const handleSlideChange = () => {
      setActiveIndex(swiperInstance.realIndex);
    };

    swiperInstance.on("slideChange", handleSlideChange);
    return () => swiperInstance.off("slideChange", handleSlideChange);
  }, []);

  return (
    <section className="bg-[#F7F8FC] py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-gray-900">
              
          Trusted by Bangalore's <span className="text-red-600">Elite</span>
        </motion.h2>
              <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="mt-3 text-gray-600 max-w-xl mx-auto"> 
          Real stories from real clients who found their dream properties through Estate Hive.
        </motion.p>
              <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="mt-8 uppercase text-sm tracking-wide font-semibold text-gray-700">
          —— They use our service ——
        </motion.h3>

        <div className="relative mt-10">
          {/* 🔽 Gradient blur left */}
  <div className="absolute left-0 top-0 h-full w-16 z-30 bg-gradient-to-r from-[#F7F8FC] to-transparent pointer-events-none" />
  {/* 🔼 Gradient blur right */}
  <div className="absolute right-0 top-0 h-full w-16 z-30 bg-gradient-to-l from-[#F7F8FC] to-transparent pointer-events-none" />
           <Swiper
    ref={swiperRef}
    modules={[Navigation]}
    spaceBetween={20}
    centeredSlides
    loop={true}
    navigation={{
      nextEl: ".swiper-button-next-testimonials",
      prevEl: ".swiper-button-prev-testimonials",
    }}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="testimonials-swiper"
  >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`transform transition-all duration-500 ease-in-out ${getCardClass(
                    idx,
                    activeIndex
                  )} w-[90%] md:w-full h-[450px] mx-auto bg-white rounded-2xl shadow-md flex flex-col justify-between`}
                >
                  <div className="p-6">
                    <div className="text-yellow-400 text-[32px] mb-2">
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </div>
                    <p className="text-base text-gray-900 font-semibold mb-2 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="bg-[#D6E1FF] p-8 flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3 text-left">
                      <p className="text-sm font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Navigation */}
          <div className="swiper-button-prev-testimonials absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white -ml-15  p-3 rounded-full shadow-lg hover:bg-red-600 transition hidden md:flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="swiper-button-next-testimonials absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-gray-800 text-white -mr-15 p-3 rounded-full shadow-lg hover:bg-red-600 transition hidden md:flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
