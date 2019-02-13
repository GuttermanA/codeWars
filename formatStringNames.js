function list(names) {
  if (names.length === 1) {
    return names[0].name;
  }

  if (names.length === 2) {
    return `${names[0].name} & ${names[1].name}`;
  }

  const result = [];

  names.forEach((element, index) => {
    let name = element.name;
    console.log(element.name);
    if (index < names.length - 2) {
      console.log("First");
      result.push(`${name},`);
    } else if (index === names.length - 2) {
      console.log("Second");
      result.push(`${name} &`);
    } else if (index === names.length - 1) {
      console.log("Third");
      result.push(name);
    }
    console.log(result);
  });

  console.log("Result", result);

  return result.join(" ");
}
