
const delay = function(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}


console.log("starting delays");
delay(2, () => {
  console.log("two seconds");
  delay(1, () => {
    console.log("three seconds");
    delay(1, () => {
      console.log("four seconds");
    });
  });
});


