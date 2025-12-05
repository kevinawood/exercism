/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  let hours = (budget / ratePerHour) / 8
  
  return Math.floor(hours)
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const BILLABLE_DAYS = 22
  const monthsInProject = Math.floor(numDays / BILLABLE_DAYS);
  const lastDaysWithoutDiscount = numDays % BILLABLE_DAYS;
  const monthlyRate = dayRate(ratePerHour) * monthsInProject * BILLABLE_DAYS;
  const remainingDaysCharge = dayRate(ratePerHour) * lastDaysWithoutDiscount;

  return Math.ceil(
   (monthlyRate-(monthlyRate*discount))+remainingDaysCharge
  );
  
  
  
}
