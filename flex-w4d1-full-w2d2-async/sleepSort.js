const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];
const sortedNumbers = []
// yes yes, I know... this doesn't _return_ the numbers and instead outputs them to console. This isn't meant to be production code!
const sleepSort = function(nums) {
  for (const num of nums) {
    setTimeout(() => {
        sortedNumbers.push(num);
        console.log(num);
    }, num);
  }
}

sleepSort(numbers);
console.log(sortedNumbers); // => []