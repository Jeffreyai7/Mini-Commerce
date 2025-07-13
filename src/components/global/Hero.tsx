'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Button } from '../ui/button';
import { carouselInfo } from '@/lib/constants';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="animate-gradient from-primary via-accent to-secondary absolute inset-0 -z-10 bg-gradient-to-r opacity-20 blur-xl" />

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="my-6">
          {carouselInfo.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div className="border-border bg-card/80 mx-auto flex w-full flex-col items-center justify-between gap-6 rounded-2xl border p-6 shadow-2xl backdrop-blur-sm transition md:w-[70%] md:flex-row">
                <div className="text-foreground flex flex-col gap-3 md:gap-4">
                  <span className="text-muted-foreground text-sm font-semibold tracking-wide md:text-lg">
                    {item.title}
                  </span>
                  <p className="text-xl font-bold leading-tight md:text-4xl">
                    {item.description}
                  </p>
                  <Button className="bg-primary text-primary-foreground w-[200px] transition hover:opacity-90">
                    Shop Now
                  </Button>
                </div>
                <div className="group h-[280px] w-full overflow-hidden rounded-xl md:h-[380px] md:w-[300px]">
                  <img
                    src={item.image}
                    alt={`Hero Image ${index + 1}`}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
