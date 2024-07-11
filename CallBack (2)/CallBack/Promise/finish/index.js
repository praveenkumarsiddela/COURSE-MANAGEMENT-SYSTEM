const delay = function (seconds, callback) {
  setTimeout(callback, seconds * 1000);
};

const promise = require("util")

const promiseDelay = promise.promisify(delay);
promiseDelay(2).then()=>
  console.log("two seconds");
  promiseDelay(1).then()=>
    console.log("three seconds");
    promiseDelay(1).then()=>
      console.log("four seconds");
    });
  });
});

// convert the above to a promise
const delayPromise = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

// Start calling the delayPromise
const timeOfDelay = 3;
console.log("Starting delays");
delayPromise(timeOfDelay)
    .then(() => {
        console.log(`${timeOfDelay} seconds`);
    })
    .then(() => 42)
    .then((number) => console.log(`Hello world: ${number}`))
    .catch((err) => console.log(`error: ${err}`));

