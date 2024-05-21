// Fibonacci Nth Number Calculator Lab


// create the fibChecker function below
// Iterative solution with while loop
function fibChecker(n) {
    if (n === undefined) return null; // Return null if no argument is provided

    if (n === 0 || n === 1) return n; // Base case: fib(0) = 0 and fib(1) = 1

    // Initialize the first two Fibonacci numbers
    let fibPrev = 0;
    let fibCurr = 1;
    let i = 2;

    // Calculate the nth Fibonacci number starting from the 3rd number
    while (i <= n) {
        // use a temporary variable to store the current Fibonacci number
        let temp = fibCurr;
        // Calculate the next Fibonacci number
        fibCurr += fibPrev;
        // Update the previous Fibonacci number
        fibPrev = temp;
        // Increment the counter
        i++;
    }

    // Return the nth Fibonacci number
    return fibCurr;
}


// create the printFib function below

function printFib(name, n) {
    const fibNumber = fibChecker(n);
    return `Hello ${name}, the number in position ${n} in the Fibonacci sequence is ${fibNumber}`;
}

// Example usage:
console.log(printFib("Alice", 5)); // Output: Hello Alice, the number in position 5 in the Fibonacci sequence is 5