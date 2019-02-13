const moveZeros = arr => {
  const zeros = [];
  arr.forEach((currentValue, index) => {
    if (parseInt(currentValue, 10) === 0) {
      let zero = currentValue;
      arr.splice(index, 1);
      zeros.push(zero);
    }
    console.log(arr);
  });

  return arr.concat(zeros);
};
