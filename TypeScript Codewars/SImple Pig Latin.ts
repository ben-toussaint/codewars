/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/
//solution
export const pigIt = (a: string): string => {
  // code away
  const arr: string[] = a.split(" ");
  return arr
    .map((elt, index) => {
      if (elt.length !== 1) {
        return elt
          .split("")
          .map((char, index) => {
            if (
              (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
              (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
            ) {
              if (index == 0) return "";
              if (index !== elt.length - 1) return char;
              if (index == elt.length - 1) {
                return char + elt[0] + "ay";
              }
            }
            return char;
          })
          .join("");
      } else if (
        elt.length == 1 &&
        ((elt.charCodeAt(0) >= 65 && elt.charCodeAt(0) <= 90) ||
          (elt.charCodeAt(0) >= 97 && elt.charCodeAt(0) <= 122))
      )
        return elt + "ay";
      return elt;
    })
    .join(" ");
};
