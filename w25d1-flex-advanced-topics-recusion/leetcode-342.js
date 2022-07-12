/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfFour = function(n) {
    if (n < 4) {
        if (n === 1) { 
            return true;
        } else {
            return false;
        }
    }
    return isPowerOfFour(n/4)
};