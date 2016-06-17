//1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.

/*
 *
 * | N | characters in string
 * Time: O(N) 
 * Additonal space: O(N)
 *
 */

//Solution 1: Use additional data structure (object) to keep track of original characters, fail when a repeated character is found.

var word1 = 'Monday';
var word2 = 'Mississippi';

//function takes in a string
var isUnique = function (string) {
  //create an object to keep track of characters
  var charList = {};
  //iterate through the string
  for ( var i = 0; i < string.length; i++ ) {
    //if the character is in the object
    if ( charList[string[i]] === string[i] ) {
      //return false
      return false;
    //else
    } 
    else {
      //put the character in the charlist
      charList[string[i]] = string[i];
    }
  }
  //return true
  return true;
};

console.log( isUnique(word1) ); //true
console.log( isUnique(word2) ); //false

//Solution 2: Sort the original string, iterate through it. Repeated characters will show up next to each other and will fail when found.

/*
 *
 * | N | characters in string
 * Time: O(N log N) ~ due to native sort
 * Additonal space: O(N)
 *
 */

var isUniqueSort = function (string) {
  //make string an array
  var split = string.split('');
  //use native Array sort
  var sorted = split.sort();

  //iterate through the sorted string
  for ( var i = 0; i < sorted.length; i++ ) {
    //if the current character and the character next to it are the same
    if ( sorted[i] === sorted[i+1] ) {
      //return false
      return false;
    }
  }
  //did not find repeated characters, return true, string is unique
  return true;
};

console.log( isUniqueSort(word1) ); //true
console.log( isUniqueSort(word2) ); //false