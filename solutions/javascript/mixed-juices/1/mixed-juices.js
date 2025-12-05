// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer': case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
  
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let slices = 0;
  let count = 0
  let i = 0;

  if (limes.length === 0) {
    return 0
  }
  
  while (slices < wedgesNeeded) {
    if (i === limes.length) {return count;}
    count++;
    
    switch (limes[i]) {
      case 'small':
        slices += 6;
        i++;
        break;
      case 'medium':
        slices += 8;
        i++;
        break;
      case 'large':
        slices += 10;
        i++;
        break;
    }
  }
  return count;
}

export function remainingOrders(timeLeft, orders) {
  let time = 0;
  let i = 0;
  
  do {
    orders.shift()
    time += timeToMixJuice(orders[i]);
    i++;
    
  } while (time <= timeLeft && timeLeft !== 0);

  return orders
  
}
