/*Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string*/
//solution
export function isValidIP(str: string): boolean {
  const arr: string[] = str.split(".");
  if (arr.length !== 4) return false;

  return arr.every((elt) => {
    if (elt == "") return false;
    if (elt[0] == "0" && elt.length > 1) return false;
    if (!(Number(elt) >= 0 && Number(elt) <= 255)) return false;
    for (let i = 0; i <= elt.length; i++) {
      if (elt[i] < "0" || elt[i] > "9") return false;
    }
    return true;
  });
}
// isValidIP('1.2.3.4')
