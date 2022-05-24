import {useState} from 'react';

// This is not how useState is implemented, but it largely
// resembles its behaviour.
// --
// function useState(initialValue) {
//     let currentValue = initialValue;
//     function setValue(val) {
//         if (val is a function) {
//             currentValue = val(copy(currentValue));
//         } else {
//             currentValue = val;
//         }
//     }
//     return [copy(currentValue), setValue];
// }

export function DoubleCounter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    function incrementByTwo() {
        increment();
        increment();
    }

    return (
        <div>
            <button onClick={increment} >Increment</button>
            <button onClick={incrementByTwo} >Increment By Two</button>
            <span>{counter}</span>
        </div>


    );
}