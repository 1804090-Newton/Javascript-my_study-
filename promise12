console.log("welcome");

const promise1 = new Promise((resolve, reject) => {
    let completedPromise = false;
    if (completedPromise) {
        resolve("completed promise 1");
    } else {
        reject(new Error("not completed promise 1"));
    }
});

const promise2 = new Promise((resolve, reject) => {
    resolve("completed promise 2");
});

// console.log(promise1);
promise1.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
});

promise2.then((res) => {
    console.log(res);
});

console.log("end");
