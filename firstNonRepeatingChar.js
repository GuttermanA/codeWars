const checkUpperCase = letter => {
  if (letter === letter.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

const getOppositCase = letter => {
  if (checkUpperCase(letter)) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
};

function firstNonRepeatingLetter(string) {
  const letterMap = new Map();
  string.split("").forEach(currentValue => {
    let exists = letterMap.get(currentValue);
    let oppositeExists = letterMap.get(getOppositCase(currentValue));
    if (exists || oppositeExists) {
      if (exists) {
        let count = letterMap.get(currentValue);
        letterMap.set(currentValue, ++count);
      } else {
        let count = letterMap.get(getOppositCase(currentValue));
        letterMap.set(getOppositCase(currentValue), ++count);
      }
    } else {
      letterMap.set(currentValue, 1);
    }
  });

  const arr = Array.from(letterMap);
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let pair = arr[i];
    if (pair[1] === 1) {
      result = pair[0];
      break;
    }
  }

  return result;
}
