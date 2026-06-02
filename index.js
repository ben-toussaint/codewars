// You are supposed to wirte a function
// which adds the row of a triangle of consecutive odd numbers
// the triangle:
// 1
// 3,5
// 7,9,11
// 13,15,17
// 19,21,23,25
// 27,29,31,33,35
 
//solution 
function rowSumOddNumbers(n) {
  let sum=[]
  for(let i=1;i<=n;i+=2){
      sum.push(i);
  }
  const final=sum.reduce((acc,next)=>{return acc+next});
  return final
}
//--------------------------------------------------------

// You are supposed to write a function which returns a string given with evey character on the even index of character in a word made upper, 
// and every odd index of a character in a word made to lower

function toWeirdCase(string){
  const splitedString=string.split(' ');
      const result=splitedString.map(word=>
             word.split('').map((char,index)=>index%2==0? char.toUpperCase():char.toLowerCase()).join('')).join(' ');
return result;
}
///-----------------------------------------------------------
/*Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0*/
const s = 'I like racecars';

function longestPalindrome(s){
    let result = 0;

    if (s.length === 0 || s.length === 1){
        return s.length;
    }

    function Palindrome(pal){
        const pali = pal
            .split('')
            .reverse()
            .join('');

        return pali === pal;
    }

    const si = s.includes(' ') ? s.split(' ') : [s];

    for (const word of si) {
        for (let i = 0; i < word.length; i++) {
            for (let j = i + 1; j <= word.length; j++) {
                const sub = word.slice(i, j);

                if (Palindrome(sub) && sub.length > result) {
                    result = sub.length;
                }
            }
        }
    }

    return result;
}

console.log(longestPalindrome(s)); // 7
