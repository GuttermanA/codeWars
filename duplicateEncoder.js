function ciEquals(a, b) {
  return typeof a === "string" && typeof b === "string"
    ? a.localeCompare(b, undefined, { sensitivity: "accent" }) === 0
    : a === b;
}

const getOppositCase = letter => {
  if (checkUpperCase(letter)) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
};

function duplicateEncode(word) {
  const charMap = new Map();

  for (const letter of word) {
    const iterator = charMap.entries();
    for (const e of iterator) {
      let char = e[0];
      if (ciEquals(letter, char)) {
      }
    }
  }

  const arr = Array.from(letterMap);
  let result = "";
  for (const e of arr) {
    if (e[1] > 1) {
      result.concat(")");
    } else {
      result.concat("(");
    }
  }

  return result;
}
