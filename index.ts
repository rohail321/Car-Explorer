export function calculateDailyRent(year: number, city_mpg: number): number {
  // Basic pricing logic (you can adjust this based on your business requirements)
  const basePrice = 10; // USD

  // Additional charges based on car attributes
  const age = 2024 - year;
  let ageFactor = 0.1;
  if (age > 30) {
    ageFactor = 1;
  } else if (age < 30 && age > 10) {
    ageFactor = 2;
  } else if (age < 10) {
    ageFactor = 3;
  } // Adjust the age factor based on the current year
  const mileageFactor = city_mpg > 100000 ? 0.5 : 0.2; // Additional charge for high mileage
  // Calculate the final daily rent
  const dailyRent = basePrice * ageFactor * mileageFactor;

  return Math.floor(dailyRent);
}

// Example usage:
