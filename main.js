// Q1: Write the function printInt(n) taking one parameter n
// and print all natural numbers from 1 to n in console.
function printInt(n) {
    for (var i = 1; i <= n; i++) {
      console.log(i);
    }
  }
  ​
  // printInt(100);
  ​
  // Q2: Write the function printIntRev(n) taking one parameter
  //  n and print all natural numbers in reverse in console (from n to 1).
  function printIntRev(n) {
    // start point -- n
    // when to stop -- 1
    // increment/decrement -- decrement 1
    for (var i = n; i >= 1; i--) {
      console.log(i);
    }
  }
  ​
  // printIntRev(10);
  ​
  // Q3: Write the function checkInput(x)
  // taking one parameter x and return the string ‘number’
  // if x is a number; return the string ‘string’
  // if x is a string; and return ‘boolean’ if x is a boolean.
  // Otherwise returns -1.
  function checkInput(x) {
    // solution 1
    // if (typeof x === "number") {
    //   return "number";
    // } else if (typeof x === "string") {
    //   return "string";
    // } else if (typeof x === "boolean") {
    //   return "boolean";
    // } else {
    //   return -1;
    // }
  ​
    // solution 2
    // switch (typeof x) {
    //   case "number":
    //     return "number";
    //   case "string":
    //     return "string";
    //   case "boolean":
    //     return "boolean";
    //   default:
    //     return -1;
    // }
  ​
    // Solution 3
    // var type = typeof x;
    // if (type === "number" || type === "string" || type === "boolean") {
    //   return type;
    // } else {
    //   return -1;
    // }
  ​
    // Solution 4
    var type = typeof x;
    return type === "number" || type === "string" || type === "boolean"
      ? type
      : -1;
  }
  ​
  // console.log(checkInput(false));
  ​
  // Q4: Write the function
  // simpleEvenAdding(num) taking a
  // number and add up all the even numbers from 1 to num, and return it
  function simpleEvenAdding(num) {
    var solution = 0;
  ​
    // Solution 1
    // // add all numbers from 1 to num
    // for (var i = 1; i <= num; i++) {
    //   // only add it if i is even
    //   if (i % 2 === 0) {
    //     solution += i;
    //   }
    // }
  ​
    // Solution 2
    for (var i = 0; i <= num; i += 2) {
      solution += i;
    }
  ​
    return solution;
  }
  ​
  // console.log(simpleEvenAdding(10));
  ​
  // Q5
  // Write the function letterCapitalize(str)
  // taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
  function letterCapitalize(str) {
    var solution = "";
    // separate words
    var words = str.split(" ");
    // first char of each word
    // capitalize it
    var length = words.length;
    for (var i = 0; i < length; i++) {
      solution += " " + words[i][0].toUpperCase() + words[i].slice(1);
    }
  ​
    return solution.slice(1);
  }
  ​
  console.log(letterCapitalize("you cannot find answerd asda dasd asd asd sd"));
  
  //    Q6 Write the function simpleReverse(str)
  function simpleReverse(str) {
  //   solution 1
  //   var solution = "";
  //   var length = str.length;
  //   for {var i = 1; i <= length; i++) }
  //   solution += str[length - 1];
  // }

  // return solution
  
  // solution 2
  // transfer str into an array of char 
  var charArray = str.split("");
  // reverse the array
  var reversedArray = charArray.reverse();
  // change array back to str
  return reversedArray.join("");
}

console.log(simpleReverse)(GoodMoorning);

// Q7 Write the function findDiff(arr)Taking an array of numbers as a parameter 
// and return the difference between the max number and min number.
function findDiff(arr) {
   // find min & max
   // var min = arr[0]
   // var max = arr[0]
   // var lenght = arr.length
 
  //  for(var i = 0;i<length;i++){
  //    if (arr[i] min) {
  //      min = arr[i];
 
  //    }
  //  if (arr[i] > max) {
  //    max = arr[i];
  //  }
  // }
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  
  // var min = Math.min.apply(null, arr);
  // var max = Math.max.apply(null, arr);
  // max - min
   return max - min;
   }
 
   // console.log(findDiff([5, 12, 17, 18, 19, 26]));

// Q8 Write the function timeConvert(num) taking a number as a parameter 
// and return the number of hours and minutes the parameter converts to.
// Seperate the number of hours and minutes with a colon.
function timeConvert(num) {
// hours
  var hours = parseInt(num/60);
  // minutes
  var minutes = num % 60;
  //combine them
  return hour + ":" + min;
}  
//  console.log(timeConvert)(59));
  
  //Question 9 Write the function findStr taking two strings as parameters 
  //and return how many str you can find in long. Assume Str is not empty string.
  function findStr(str, long) {
  // solution 1
  // var longLength = long.length; 
  // var strLength = str.length;
  // counter to count the number of str in long
  // var counter = 0; 
  // for (var i = 0; i<= longLength - strLength; i++) {
    // if(str === long.slice(i, i + str.length)){

  //  }
  // }
  // return counter;

  // Solution 2 
return long.split(str).length - 1;
}

 // console.log(findStr("h1", "Ronellebabina")); 
  
  
  
  
  // Question 10 Write the function selfDividingNumbers(left, right) taking two number
  // bound as parameters and returns an array of every possible self dividing 
  // number between them, including the bounds. 
   function selfDividingNumbers (left, right){
  // loop from left to right 
      var solution = [];
      for (var i=left; i<=right;i++){
  // check if current number is self-dividing number
        if (i isSelfDividing){  
        solution.push(i);
        }
      }
        return solution;
    }
      // helper function to check if the num is self-dividing
  function isSelfDividing(num){
  // change number into string format
      var numString = num.toString();
  // Split string into array of char
  var numArray = numString.split("");
  
  var length = numArray.length;    
  for (vari=0; i<length; i++){
  // if(num is not divisible by any digit)
       if (num % ParseInt(numArray[i]) !==0) {
          return false
  
        }
      }
  //if num is divisible by all digits
          return true;
    }
  
  //Question 11 Write the function moveZeros(nums) taking an array of numbers and 
  // move all 0’s to the end of it while maintaining the relative order of the 
  // non-zero elements.  
    function moveZeros(nums){
      var solution = [];
      var counter = 0;
      var length = nums.length
      //loop through the array
      for(var i=0; i<length; i++){
        if(nums[i]===0) {
          counter++;}
        }else{
          solution.push(nums[i]));
          }
        }

        //adding 0s
      while (counter > 0) {
        solution.push(0);
        counter--;
      }
      return solution;
    }
  
  
    // Question 12 Create an average(nums) function that calculates 
    // the average of an array of numbers.
    function average(nums) {
  // get the sum
  var sum = 0;
  var length = nums.length;
  for(var i = 0; i < length; i++){
    sum += nums[i];
  }    
  
  //sum / length 
  return sum / length;
}

  if (nums.length===0){
  
        return 0;
  
      }
  
      var total = 0
  
      for (var i=0;i<nums.length; i++){
  
        total += num[i];
  
      }
  
       return total/nums.length
  
    }
  
       console.log(average[])