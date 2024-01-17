import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className='flex -z-10 flex-col  text-black-100 mt-15 border-t border-gray-100 '>
      <div className='flex flex-col max-md:flex-col items-center  gap-5 sm:px-26 px-14 py-10'>
        <div>
          <Image src='/logo.svg' alt='footer logo' width={118} height={32} />
        </div>

        <div>
          <h3>© 2024 Car Hub.</h3>
        </div>
      </div>
    </footer>
  );
}
