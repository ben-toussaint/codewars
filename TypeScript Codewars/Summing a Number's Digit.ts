/*Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5*/
export function sumDigits(n: number): number {
  const arr: string[] = Math.abs(n).toString().split("");
  console.log(arr);
  const result = arr.reduce((c, n) => Number(c) + Number(n), 0);
  return result;
}
