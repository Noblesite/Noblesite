"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  const slides = [
    { src: '/images/alexander.webp', caption: 'Dedicated Father' },
    { src: '/images/automation.webp', caption: 'Automation Saving Costs' },
    { src: '/images/developer.webp', caption: 'Full Stack Developer' },
    { src: '/images/llm.webp', caption: 'Fine-Tuning Large Language Models' },
    { src: '/images/mobility.webp', caption: 'Mobility Solutions Architect' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.src}
                alt={slide.caption}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center">
                {slide.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
