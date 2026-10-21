/*You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis "Hello" == "72olle"
encryptThis "good" == "103doo"
encryptThis "hello world" == "104olle 119drlo"*/
//Solution
export const encryptThis = (str: string): string => {
  // Your code goes here
  if (str.length === 0) return "";
  const arr: string[] = str.split(" ");
  // console.log(arr)
  return arr
    .map((elt) => {
      return elt
        .split("")
        .map((char, index) => {
          if (index == 0) {
            return char.charCodeAt(0);
          } else if (index == 1) {
            return elt[elt.length - 1];
          } else if (index == elt.length - 1) {
            return elt[1];
          } else {
            return char;
          }
        })
        .join("");
    })
    .join(" ");
};
