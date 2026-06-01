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

