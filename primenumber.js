let number = 17; 

let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}


console.log(number + (isPrime ? " is a prime number." : " is not a prime number."));