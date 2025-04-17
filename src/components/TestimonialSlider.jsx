import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content:
      "GigFloww has transformed how I find design projects. The platform's intuitive interface and reliable payment system make freelancing a breeze. I've doubled my client base in just three months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content:
      "As a developer, finding quality projects was always challenging. GigFloww's matching algorithm consistently connects me with projects that align perfectly with my skills and interests.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Content Writer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content:
      "The support from the GigFloww team is outstanding! They've created a wonderful community of professionals. I love how easy it is to collaborate and grow my freelance writing business here.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="bg-gradient-to-br  from-purple-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-24   ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by thousands of freelancers and clients worldwide
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-purple-300 rounded-2xl shadow-lg p-8 h-full flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-purple-600">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 flex-grow mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
