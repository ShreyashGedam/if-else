interface EarthMapping {
  [key: string]: number;
}

interface MarsMapping {
  [key: number]: string;
}

const earth: EarthMapping = {
  A: 2,
  B: 22,
  C: 222,
  D: 3,
  E: 33,
  F: 333,
  G: 4,
  H: 44,
  I: 444,
  J: 5,
  K: 55,
  L: 555,
  M: 6,
  N: 66,
  O: 666,
  P: 7,
  Q: 77,
  R: 777,
  S: 7777,
  T: 8,
  U: 88,
  V: 888,
  W: 9,
  X: 99,
  Y: 999,
  Z: 9999,
  " ": 0,
};

const mars: MarsMapping = {};

for (let char in earth) {
  let sequence = earth[char];
  mars[sequence] = char;
}

export const earthMessage = (str: string): string => {
  str = str.toUpperCase();
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    bag += earth[str[i]];
  }
  return bag;
};

export const marsMessage = (str: string): string => {
  const arr = str.split(".");
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag += mars[parseInt(arr[i])];
  }
  return bag;
};
