// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if(string.length > 1){
    printString(string.slice(1));
  }
}

function reverseString(string){
  if(string.length > 1){
    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
  } else {
      return string[string.length - 1];
  }
}

function isPalindrome(string){
  if(string === reverseString(string)) {
    return true;
  } else {
    return false;
  }
}

function addUpTo(array, index){
  if(index > 0){
    return array[index] + addUpTo(array, --index);
  } else {
    return array[0];
  }
}

var max;
function maxOf(array){
  if(array.length > 1) {
    if(array[0] < array[1]){
      max = array[1]
      return maxOf(array.slice(1));
    } else{
      max = array[0]
      return maxOf([array[0], ...array.slice(2)]);
    }
  }
  return max > array[0] ? max : array[0];
}

function includesNumber(array, number){
  if(array[0] === number) {
    return true;
  } else if(array.length > 1) {
    array.shift();
    includesNumber(array, number);
  }
  return array[0] === number ? true : false;
}
