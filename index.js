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

///-----------------------------------------------------------------------

// One-time initializer

// You are building a widget library. Some setup work — attaching event listeners, injecting styles, measuring layout — should happen exactly once per element, no matter how many times the user calls setup().

// Write a function createSetup(initFn) that takes a callback initFn and returns a new function. The returned function accepts a DOM-like object (el) and:
// — runs initFn(el) the first time it is called with that element
// — does nothing on any subsequent call with the same element
// — still runs initFn normally for new, unseen elements
// — does not leak memory when elements are no longer referenced elsewhere

function createSetup(initFn) {
  // your code here
const ws= new WeakSet();

function CheckingElementUsage(element){
if(ws.has(element))return;
ws.add(element);//adding the element in the storage so that it won't be added for the second time.
initFn(element);//calling the callback to do the action on the element.
}
return CheckingElementUsage;
}

//------------------------------------------------------------------------------------
// pre-given codes
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
// Task
// Define the following classes that inherit from Animal.

// I. Shark
// The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

// II. Cat
// The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

// Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

// var example = new Cat("Example", 10, "Happy");
// example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
// III. Dog
// The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

// Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).



class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age,0,"shark",status);
  }
}

class Cat extends Animal {
  constructor(name,age,status){
    super(name,age,4,"cat",status);
  }
  introduce(){
    return `${super.introduce()}  Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, master){
    super(name,age,4,"dog",status);
    this.master=master;
  }
  greetMaster(){
    return `Hello ${this.master}`;
  }
}