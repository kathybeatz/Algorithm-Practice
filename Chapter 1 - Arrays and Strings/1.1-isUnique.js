//1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.

/*
 *
 * | N | characters in string
 * Time: O(N) 
 * Additonal space: O(N)
 *
 */


var word1 = "Monday";
var word2 = "Mississippi";

//function takes in a string
var isUnique = function(string){
  //create an object to keep track of characters
  var charList = {};
  //iterate through the string
  for(var i = 0; i < string.length; i++){
    //if the character is in the object
    if(charList[string[i]] === string[i]){
      //return false
      return false;
    //else
    } else{
      //put the character in the charlist
      charList[string[i]] = string[i];
    }
  }
  //return true
  return true;
};

console.log(isUnique(word1)); //true
console.log(isUnique(word2)); //false