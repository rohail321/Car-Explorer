"use client";
import React from "react";
import Image from "next/image";
type ButtonProps = {
  title: string;
  containerStyles?: string;
  type?: "submit" | "button";
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

export default function Button({
  title,
  containerStyles,
  type,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      type={`${type || "button"}`}
      className={`custom-btn ${containerStyles && containerStyles}`}
      disabled={false}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles} `}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right Icon'
            className='object-contain'
            fill
          />
        </div>
      )}
    </button>
  );
}
