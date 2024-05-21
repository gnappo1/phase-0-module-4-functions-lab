# Fibonacci Calculator Lab

### Objective

In this lab, you'll practice working with loops, conditionals, and functions in JavaScript. Your task is to implement a script that calculates the nth Fibonacci number and displays it.

### Instructions

1. Fork and clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies.
4. Open the `index.js` file in your text editor. This is where you'll write your code.
5. Implement the `fibChecker` function to calculate the nth Fibonacci number.
    - The function should take in an optional argument, `n`. If `n` is not provided, the function should return `null`. Otherwise, it should return the nth Fibonacci number.
    - Remember that **the Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones: 0, 1, 1, 2, 3, 5, 8, 13, ... **.
6. Implement the `printFib` function to display the result.
    - The function should take in two arguments: `name` (a string) and `n` (the nth position in the Fibonacci sequence).
    - For example, given the name `Matteo` and the position `5` it should print the sentence: `Hello Matteo, the number in position 5 in the Fibonacci sequence is 3`.
7. As you progress, make sure to run the tests with `npm test` to check your implementation against the provided test cases.
8. Once you've implemented the code successfully and all the tests pass, feel free to come up with your own values for `name` and `n` and run the script typing `node index.js` in your terminal.

### Initial Tests

Explore the tests written for this lab by delving into the `indexTest.js` file. Inside, you'll find a series of Mocha tests designed to verify the functionality of your Fibonacci calculator. These tests check whether the `fibChecker` function returns `null` when no argument is provided and accurately calculates the Fibonacci number for a given position.

Additionally, the `printFib` function is tested to ensure it prints the correct sentence with the provided name and position. Dive into the test file yourself to see how the tests are structured and how they verify the correctness of your code!

### Reminders

To complete this lab, you will need to use loops, conditionals, and functions. Remember that the Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.

### Resources

- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN Web Docs: Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN Web Docs: Conditionals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Wikipedia: Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_sequence)