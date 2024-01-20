"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import SearchButton from "./SearchButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState<string>("");
  const [modal, setModal] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && modal === "")
      return alert("Please fill search bar");
    updateSearchParams(modal, manufacturer);
  };

  const updateSearchParams = (modal: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (modal) {
      searchParams.set("modal", modal);
    } else {
      searchParams.delete("modal");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          alt='model'
          width={25}
          height={25}
          className='absolute w-[30px] h-[20px]  ml-4'
        />
        <input
          type='text'
          name='model'
          value={modal}
          onChange={(e) => setModal(e.target.value)}
          placeholder='Q5'
          className='searchbar__input'
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <SearchButton otherClasses={"max-sm:hidden"} />
    </form>
  );
}
