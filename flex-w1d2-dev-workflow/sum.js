// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.


// Take in an unlimited number of command line arguments
const nums = process.argv.slice(2,);
console.log('nums', nums);

// We need at least 2 arguments.
if (nums.length < 2) {
    console.log("We need at least 2 arguments");
    return;
}

let sum = 0;
// go through and prints out the sum of them
for(const num of nums) {
    const parsedNum = Number(num);
    // Do support negative numbers
    console.log("num", parsedNum, typeof(parsedNum));

    // If any argument is not a whole number, skip it.
    if(Number.isInteger(parsedNum) === false) {
        continue;
    }

    // If any argument is not a number, output an error message
    if(isNaN(parsedNum)) {
        console.log("It's not a number", num);
    }

    sum += parsedNum;
}
