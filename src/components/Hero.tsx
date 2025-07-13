'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from './ui/button';
import { carouselInfo } from '@/lib/constants';

const Hero = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="my-4">
        {carouselInfo.map((item, index) => (
          <CarouselItem key={index} className="relative">
            <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-lg md:w-[70%] md:flex-row dark:bg-gray-800">
              <div className="flex flex-col gap-4">
                <span className="text-[0.8rem] font-semibold md:text-lg">
                  {item.title}
                </span>
                <p className="text-[1rem] md:text-4xl">{item.description}</p>
                <Button className="w-[200px] bg-[#2B3089]">Shop Now</Button>
              </div>
              <div className="h-[300px] w-full overflow-hidden rounded-lg shadow-md md:h-[400px] md:w-[300px]">
                <img
                  src={item.image}
                  alt={`Hero Image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
