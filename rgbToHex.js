const componentToHex = c => {
  let hex = c.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
};

function rgb(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}
