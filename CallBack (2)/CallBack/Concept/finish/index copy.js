
const delay = function(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}


// Start
const timeOfDelay = 3;
console.log('Starting delays');
delay(timeOfDelay, () => {
  console.log(`${timeOfDelay} seconds`);
});
console.log("Finish delays");


