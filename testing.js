winning_combinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

test = [1, 2, 3];

let found = () => {
  return winning_combinations.some((combination) => {
    return combination.every((num) => test.includes(num));
  });
};

console.log(found()); // true
