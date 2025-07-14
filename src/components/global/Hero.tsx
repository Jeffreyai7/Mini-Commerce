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
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-xl" />

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
              <div className="mx-auto flex w-full flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card/80 p-6 shadow-2xl backdrop-blur-sm transition md:w-[70%] md:flex-row">
                <div className="flex flex-col gap-3 text-foreground md:gap-4">
                  <span className="text-sm font-semibold tracking-wide text-muted-foreground md:text-lg">
                    {item.title}
                  </span>
                  <p className="text-xl font-bold leading-tight md:text-4xl">
                    {item.description}
                  </p>
                  <Button className="w-[200px] bg-primary text-primary-foreground transition hover:opacity-90">
                    Shop Now
                  </Button>
                </div>
                <div className="group h-[280px] w-full overflow-hidden rounded-xl md:h-[380px] md:w-[300px]">
                  <Image
                    width={300}
                    height={380}
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
