"use client";
import { ICar } from "@/types";
import React, { useState } from "react";
import { calculateDailyRent } from "..";
import Image from "next/image";
import { Button, CarDetail } from ".";
import { generateCarImageUrl } from "@/utils/";

interface CardProps {
  car: ICar;
}

function CarCard({ car }: CardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { city_mpg, make, model, year, transmission, drive } = car;
  const carRent = calculateDailyRent(year, city_mpg);

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-semibol '>$</span>
        {carRent}
        <span className='self-end text-[14px] font-medium '>/day</span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={generateCarImageUrl(car) as string}
          alt='hero'
          fill
          priority
          className='object-contain'
        />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center item-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              alt='wheel'
              width={20}
              height={20}
            />
            <p className='text-[14px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className='flex flex-col justify-center item-center gap-2'>
            <Image src='/tire.svg' alt='tire' width={20} height={20} />
            <p className='text-[14px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center item-center gap-2'>
            <Image src='/gas.svg' alt='gas' width={20} height={20} />
            <p className='text-[14px]'>{city_mpg} MPG</p>
          </div>
        </div>
        <div className='car-card__btn-container'>
          <Button
            title='View More'
            containerStyles='w-full  py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CarCard;
