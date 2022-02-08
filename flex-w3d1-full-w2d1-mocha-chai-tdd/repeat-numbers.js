/*
The input data for this exercise will be two dimensional array (an array of arrays), where each sub-array will have two numeric values. The first will be the value to repeat, the second will be the amount of times to repeat that value.
For example:

[[1, 2], [2, 3]]
11, 222
*/

function repeatNumbers (data) {
    if (!Array.isArray(data) || data.length === 0) {
        return undefined;
    }
    const repeatList = [];
    for (const [digits, times] of data) {
         repeatList.push(repeatOne(digits, times));
    }
    return repeatList.join(', ');
}

function repeatOne (digits, times) {
    return String(digits).repeat(times);
}

module.exports = {repeatNumbers: repeatNumbers, repeatOne: repeatOne};