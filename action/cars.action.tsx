"use server";

import { ICar, SearchParams } from "@/types";

export const fetchCars = async ({
  manufacturer,
  modal,
  year,
  fuel,
  limit,
}: SearchParams) => {
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${modal}&make=${manufacturer}&year=${year}&fuel=${fuel}&limit=${limit} `;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "84a6060cfemshd253f1195060d9ep11c908jsn284e1c382d3f",
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
