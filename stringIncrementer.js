function incrementString(str) {
  // return incrementedString

  if (typeof str !== "string") {
    return "Not a string";
  }

  if (str.length === 0) {
    str = 1;
    return str;
  }

  const finalIndex = str.length - 1;

  if (typeof str[finalIndex] !== "number") {
    return str.concat(1);
  }

  let strPart = null;

  let numberArr = [];
  let zeros = [];
  for (let i = 0; i < str.length; i++) {
    let parsed = parseInt(str[i], 10);
    if (typeof parsed === "number") {
      strPart = str.slice(0, i);
      if (parsed === 0) {
        zeros.push(parsed);
      } else {
        numberArr.push(parsed);
      }
    }
  }

  const number = null;

  if (numberArr.length === 0) {
    number = 1;
  } else {
    number = parseInt(numberArr.join()) + 1;
  }

  if (zeros.length > 0) {
    const diff =
      zeros.length +
      number.toString().length -
      (zeroes.length + numberArr.length);
    if (diff === 0) {
      return strPart.concat(zeros.join().concat(number));
    } else if (diff > 0) {
      return strPart.concat(zeroes.slice(0, diff).concat(number));
    } else if (diff < 0) {
      return strPart.concat(number);
    }
  } else {
    return strPart.concat(number);
  }
}
