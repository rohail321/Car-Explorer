import React, { Dispatch, SetStateAction } from "react";

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
}

export interface ICar {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface SearchParams {
  manufacturer: string;
  modal: string;
  year: number;
  fuel: string;
  limit: number;
}
