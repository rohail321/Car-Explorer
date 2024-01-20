import { fetchCars } from "@/action/cars.action";
import {
  Hero,
  CustomFilter,
  SearchBar,
  CarCard,
  ShowMore,
} from "@/components/";
import { fuels, yearsOfProduction } from "@/constant";
import { SearchParams } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const result = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    modal: searchParams.modal || "",
  });
  const isDataEmpty = !Array.isArray(result) || result.length < 1 || !result;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter type='fuel' options={fuels} />
            <CustomFilter type='year' options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {result?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit + 1 || 11) > result.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black-xl'>{/* <p>{result?.message}</p> */}</h2>
          </div>
        )}
      </div>
    </main>
  );
}
