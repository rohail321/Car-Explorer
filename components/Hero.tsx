"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components";
import Link from "next/link";
function Hero() {
  const handleScroll = (): void => {
    window.scrollTo({});
  };
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, compare, or rent a car -- quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <Link href='#discover'>
          {" "}
          <Button
            title='Explore Cars!'
            type='button'
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
          />
        </Link>
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src='/hero.png' alt='hero' className='object-contain' fill />
          <div className='hero__image-overlay'></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
