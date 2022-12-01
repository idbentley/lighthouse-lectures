function randomDelay() {
    while(true) {
        if (Math.random() < 0.00000001) {
            break;
        }
    }
}

const a = 1;
randomDelay();
console.log(a);