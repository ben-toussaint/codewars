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
//------------------------------------------------------------------------------
// .Unique Products Report
// You are given an array of orders:

const orders= [
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
];


// Task:

// Use for of Loop, Set, and destructuring

// Write a function createReport(orders) that returns:

{
uniqueProducts: ["Laptop","Mouse","Keyboard","Monitor"],
firstProduct:"Laptop",
totalUnique:4
}
///////Solution.....
function createReport(orders){
    
    let uniqueProducts=[];
    let store=new Set();
   for(order of orders){
       if(!(store.has(order.product))){
           store.add(order.product);
           uniqueProducts.push(order.product);
       }
   }
   
   
   return {uniqueProducts:uniqueProducts, firstProduct:uniqueProducts[0],totalUnique:uniqueProducts.length};
}

console.log(createReport(orders))
//-----------------------------------------------------------------------------------------
// 1.You are given an array of notifications. Each notification has a message and a delay.

const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];


// Task:
// Print each message using setTimeout after its given delay.

// Format:

// [1s] You have a new message
// [2s] Battery is low
// [3s] Your download is ready
// [4s] Friend is online

/////////////solution 

function ExecutingMessage(notifications){
    for(let notification of notifications){
       setTimeout(()=>{console.log(notification.message)},notification.delay)
    }
}
ExecutingMessage(notifications)
//-------------------------------------------------------------------------------------
// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


//solution 
function solution(str){
  if(!(str.length%2==0)){
   str+='_'
  }
 const result=str.match(/\w{2}/g);
  return result || [];
}
//-----------------------------------------------------------------------------------------------
//Creating a function that extracts an email inside a string using regex
// extracting an email
const string='This is my email mbentoussaint@gmail.com I like it and this is his email eva@gmail.com';
function extractEmail(email){
    return email.match(/[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]{2,}/g);
}
console.log(extractEmail(string));
//------------------------------------------------------------------------------------------------
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (a^p+b^p+1+c^p+2+d^p+3+...)=n∗k(a^p +b^p+1 +c^p+2 +d^p+3 +...)=n∗k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//solution 
function digPow(n, p){
  let elements=n.toString().split('');
  let newElements=[];
  let ptrack=p;
  for(let i=0;i<elements.length;i++){
    newElements.push(elements[i]**ptrack);
    ptrack++;
  }
    const exponentSum=newElements.reduce((acc,next)=>acc+next);
    //findig k
    for(let k=1;k<1000000;k++){
        if((n*k)==exponentSum){
            return k;
        }
    }
  return -1;
}
////-----------------------------------------------------------------------------------------------------------------
/*Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice*/
function duplicateCount(text){
  const seenLetters=new Set();
  const duplicatedLetters=new Set();
  
  for(const letter of text.toLowerCase()){
    if(seenLetters.has(letter)){
      duplicatedLetters.add(letter)
}
    else{
      seenLetters.add(letter);
    }
  }
  return duplicatedLetters.size;
}
//---------------------------------------------------------------------------------------------------------------------
/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)*/
//solution 
function findOutlier(integers){
  const sortedInteger=integers.sort((a,b)=>a-b);
  if(sortedInteger[0]%2==0){
      for(const number of sortedInteger){
          if(!(number%2==0)){
              return number
          }
      }
  }
  if(!(sortedInteger[0]%2==0)){
      for(const number of sortedInteger){
          if(number%2==0){
              return number;
          }
      }
  }
  //your code here
}
//----------------------------------------------------------------------------------------------------------
/*Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input "stress", the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase characters are considered the same character, but the function should return the correct case for the initial character. For example, the input "sTreSS" should return "T".

If a string contains only repeating characters, return an empty string ("");

Note: despite its name in some languages, your function should handle any Unicode codepoint:*/

//solution.
function firstNonRepeatingLetter(s) {
  // Add your code here
const stringArr=s.split('');
  for(const letter of stringArr){
    if(stringArr.indexOf(letter)==stringArr.lastIndexOf(letter)){
      return letter;
    }
  }
}
//////////////////////////////------------------------------------------------------------
/*Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]*/
//solution
function snail(array) {
    const n=array[0].length;
    let top=0;
    let right=n-1;
    let bottom=n-1;
    let left=0;
    let resultArr=[];
    while(top<=bottom&&left<=right){
        //from left to right
        if(top<=bottom){
            for(let col=left;col<=right;col++){
                resultArr.push(array[top][col]);
            }
        }
        top++;
        //from top to bottom
            for(let rw=top;rw<=bottom;rw++){
                resultArr.push(array[rw][right])
            }
        right--;
        
        //from right to left
            for(let col=right;col>=left;col--){
            resultArr.push(array[bottom][col]);
        }
        bottom--;
        
        //from bottom to top
        
             for(let rw=bottom;rw>=top;rw--){
            resultArr.push(array[rw][left]);
        }
        left++;
        
       
    }
    return resultArr
}

const array=[[1,2,3],
             [4,5,6],
             [7,8,9]];
console.log(snail(array))
//////////////////////////////////////////////////////////////////////////////////////////////////
/*In this Kata your task will be to return the count of pairs that have consecutive numbers. The first pair consists of the first and second element of the input, the second pair is the next two elements (3rd and 4th), etc. If the input ends with an element without a pair, it should be ignored.

For example, [1,2,5,8,-4,-3,7,6,5] has 3 such pairs. Candidate pairs are selected as follows: [(1,2), (5,8), (-4,-3), (7,6), 5].

the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
the second pair is (5,8) and the numbers are not consecutive.
the third pair is (-4,-3), consecutive. Count = 2.
the fourth pair is (7,6), also consecutive. Count = 3.
the last element has no pair, so we ignore.*/
//solution:
function pairs(ar){
  let counter=0;
  for(let i=0;i<ar.length-1;i+=2){
    if(Math.abs(ar[i]-ar[i+1])==1){
      counter++
    }
  }
  return counter
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;*/
//solution 
Array.prototype.numberOfOccurrences = function (element) {
    
    var counter = 0;
    for (var i = 0; i < this.length; i++)
    {
        if (this[i] == element) { counter++; }
    }
    
    return counter;
}
