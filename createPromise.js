// Write a function that returns a promise that resolves after a specified time with a specified value.

function delayedPromise(value, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // write your code here
        }, time);
    });
}

// Example input and output
const promise = delayedPromise('Hello', 2000);
promise.then((value) => {
    console.log(value); // Output: Hello
});