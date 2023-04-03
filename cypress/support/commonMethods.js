
/*this method used to generate random numbers within given range
 min : min number of the range
 max : max number if the range
 */
export function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  