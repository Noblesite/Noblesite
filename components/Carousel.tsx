"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  const slides = [
    { src: '/images/alexander.webp', caption: 'Dedicated Father', width: 1920, height: 1080 },
    { src: '/images/automation.webp', caption: 'Automation Saving Costs', width: 1920, height: 1080 },
    { src: '/images/developer.webp', caption: 'Full Stack Developer', width: 1920, height: 1080 },
    { src: '/images/llm.webp', caption: 'Fine-Tuning Large Language Models', width: 1920, height: 1080 },
    { src: '/images/mobility.webp', caption: 'Mobility Solutions Architect', width: 1920, height: 1080 },
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
            <div className="relative w-full h-[500px]">
              <Image
                src={slide.src}
                alt={slide.caption}
                layout="fill" // Ensures the image fills the parent container
                objectFit="cover" // Maintains the image aspect ratio
                className="rounded-lg"
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
