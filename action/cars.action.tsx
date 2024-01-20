"use server";

import { ICar, SearchParams } from "@/types";

export const fetchCars = async ({
  manufacturer,
  modal,
  year,
  fuel,
  limit,
}: SearchParams) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${modal}&make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit} `;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Something went wrong");
    const result = await response.json();
    return result;
  } catch (error) {}
};
