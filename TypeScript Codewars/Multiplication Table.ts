/*Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]*/
//solution
export function multiplicationTable(size: number): number[][] {
  // Implement me! :)
  type InnerType = number[];
  const arrOuter: InnerType[] = [];

  for (let i = 1; i <= size; i++) {
    const arrInner: InnerType = [];
    for (let j = 1; j <= size; j++) {
      const value = i * j;
      arrInner.push(value);
    }
    arrOuter.push(arrInner);
  }
  return arrOuter;
}
