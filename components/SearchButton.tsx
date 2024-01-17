import Image from "next/image";
import React from "react";

function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <div>
      <button type='submit' className={`-ml-3 z-10 px-5 ${otherClasses} `}>
        <Image
          src='/magnifying-glass.svg'
          alt='magnifying'
          width={40}
          height={40}
          className='object-contain  '
        />
      </button>
    </div>
  );
}

export default SearchButton;
