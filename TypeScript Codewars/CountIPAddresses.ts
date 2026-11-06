export function ipsBetween(start: string, end: string): number {
  type myTuple = [number, number];

  const arr1: number[] = start.split(".").map((num) => Number(num));
  const arr2: number[] = end.split(".").map((num) => Number(num));

  // 1. Your mapping logic
  const subnetting: (number | myTuple)[] = arr1.map((num1, index) => {
    if (num1 === arr2[index]) {
      return 0;
    }
    return [num1, arr2[index]];
  });

  // 2. Your filtering logic to get only changed points
  const changedPoint = subnetting.filter((elt): elt is myTuple => {
    return Array.isArray(elt);
  });

  let totalAddresses = 0;

  for (let i = 0; i < 4; i++) {
    const item = subnetting[i];

    if (Array.isArray(item)) {
      const [startOctet, endOctet] = item;
      const difference = endOctet - startOctet;

      const weight = Math.pow(256, 3 - i);

      totalAddresses += difference * weight;
    }
  }

  return totalAddresses;
}
