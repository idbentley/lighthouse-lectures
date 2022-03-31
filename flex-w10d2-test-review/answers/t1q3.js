/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  let maxOccurances = 0;
  let numberWithMaxOccurances = undefined;
  const occurances = {};
  for (const item of arr) {
    if(item in occurances) {
      occurances[item] = occurances[item] + 1;
    } else {
      occurances[item] = 1;
    }
    if (occurances[item] > maxOccurances) {
      maxOccurances = occurances[item];
      numberWithMaxOccurances = item;
    }
  }

  
  return numberWithMaxOccurances;
};

// Don't change below:

module.exports = { mode };
