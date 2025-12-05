/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


export function cookingStatus(time) {
  if (time === undefined || time === null) {
    return 'You forgot to set the timer.';
  } else if (time === 0) {
    return 'Lasagna is done.';
  } else {
    return 'Not done, please wait.';
  }
}

export function preparationTime(layers, time) {
  let numberOfLayers = layers.length;
  
  if (time === null || time === undefined) {
    time = 2
  } 

  return numberOfLayers * time
}

export function quantities(ingredients) {
  let noodlesCount = 0;
  let sauceCount = 0;

  for (let i = 0; i < ingredients.length; i++) {
    console.log(i)
    if (ingredients[i] === 'sauce') {
      sauceCount += 0.2;
    } else if (ingredients[i] === 'noodles') {
      noodlesCount += 50;
    }
  }
  // console.log({'noodles': noodlesCount, 'sauce': sauceCount})
  return {'noodles': noodlesCount, 'sauce': sauceCount}
}

export function addSecretIngredient(friendsList, myList) {
  let elem = friendsList[friendsList.length - 1]
  myList.push(elem)
}

export function scaleRecipe(recipe, portions) {
  let copy = JSON.parse(JSON.stringify(recipe));

  for (const key in copy) {
    copy[key] = copy[key] / 2
    copy[key] = copy[key] * portions
  }

  return copy
  
}










