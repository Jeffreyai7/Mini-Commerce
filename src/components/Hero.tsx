"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from './ui/button'
import { carouselInfo } from '@/lib/constants'



const Hero = () => {
  return (
   <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="h-[500px] md:h-[600px] p-3 my-4">
        {
          carouselInfo.map((item, index) => (
            <CarouselItem key={index} className="relative">
              <div className='flex flex-col md:flex-row items-center justify-between md:w-[60%] w-full mx-auto gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
                <div className='flex flex-col gap-4'>
                  <span className='md:text-lg text-[0.8rem] font-semibold'>{item.title}</span>
                  <p className='md:text-4xl text-[1rem]'>{item.description}</p>
                  <Button className='bg-[#2B3089] w-[200px]'>Shop Now</Button>
                </div>
                <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px]'>
                  <img
                    src={item.image}
                    alt={`Hero Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
    </Carousel>
  )
}

export default Hero