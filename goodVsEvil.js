const goodWorth = {
  0: 1,
  1: 2,
  2: 3,
  3: 3,
  4: 4,
  5: 10
};

const evilWorth = {
  0: 1,
  1: 2,
  2: 2,
  3: 2,
  4: 3,
  5: 5,
  6: 10
};

function goodVsEvil(good, evil) {
  const goodReducer = (accumulator, currentValue, currentIndex) => {
    return (accumulator +=
      parseInt(currentValue, 10) * goodWorth[currentIndex]);
  };

  const evilReducer = (accumulator, currentValue, currentIndex) => {
    return (accumulator +=
      parseInt(currentValue, 10) * evilWorth[currentIndex]);
  };

  console.log(good.split(" "));
  console.log(evil.split(" "));
  const goodValue = good.split(" ").reduce(goodReducer, 0);
  const evilValue = evil.split(" ").reduce(evilReducer, 0);

  console.log(goodValue);
  console.log(evilValue);
  if (goodValue > evilValue) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilValue > goodValue) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}
