export const phoneFormating = (phone) => {
  const result = [];
  const number = phone.match(/[0-9+]/g).join("");
  result.push(number);

  if (number[0] === "+") {
    const formatingNumber = `${number.slice(0, 2)} (${number.slice(
      2,
      5
    )}) ${number.slice(5, 8)}-${number.slice(8, 10)}-${number.slice(10)}`;

    result.push(formatingNumber);
  } else {
    const formatingNumber = `${number[0]} (${number.slice(
      1,
      4
    )}) ${number.slice(4, 7)}-${number.slice(7, 9)}-${number.slice(9)}`;

    result.push(formatingNumber);
  }

  return result;
};
