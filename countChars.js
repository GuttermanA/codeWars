function count(string) {
  // The function code should be here
  const result = {};

  for (const c of string) {
    if (Object.keys(result).includes(c)) {
      result[c] += 1;
    } else {
      result[c] = 1;
    }
  }

  return result;
}
