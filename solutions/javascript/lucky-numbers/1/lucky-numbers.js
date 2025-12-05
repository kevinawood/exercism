// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let num1 = ''
  let num2 = ''

  num1 = array1.join('')
  num2 = array2.join('')

  return Number(num1) + Number(num2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let num1 = value;

  if (value === 0) {
    return true
  }

  num1 = String(value)
  var splitString = num1.split("");
  splitString = splitString.reverse();
  splitString = splitString.join("");

  return value == splitString
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (Number(input) > 0) {
    return ''
  } else if (input === '' || input === null || input === undefined) {
    return 'Required field'
  } else {
    return 'Must be a number besides 0'
  }
}
