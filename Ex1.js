// Well of Ideas - Easy Version
function well(x) {
  let goodCounter = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      goodCounter++;
    }
  }
  return goodCounter === 0
    ? "Fail!"
    : goodCounter > 2
    ? "I smell a series!"
    : "Publish!";
}

console.log(well(["good", "bad", "bad", "good", "bad", "bad", "bad", "bad"]));
