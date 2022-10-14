export function normalize(rates: number[]) {
  let sum: number = 0;
  let result: number[] = [];
  for (let value of rates) sum += value;
  for (let value of rates) result.push(value / sum);
  return result;
}

export function multiply(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  for (let i = 0; i < arr1.length; i++) result.push(arr1[i] * arr2[i]);
  return result;
}

