//1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a worde or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

var palPerm = "Tact Coa";
var palPerm2 = "Tact Coa";
var palPerm3 = "abc";

var palindromePermutation = function( string ) {
  var stringLowerCase = string.toLowerCase();
  var charCount = {};

  for ( var i = 0; i < stringLowerCase.length ; i++ ){
    if( stringLowerCase[i] === ' ') {
      continue ;
    }
    if ( charCount[stringLowerCase[i]] === undefined ) {
      charCount[stringLowerCase[i]] = 1;
    } else {
      charCount[stringLowerCase[i]] += 1;
    }
  }

  var oddCount = 0;
  console.log(charCount);

  for ( var letter in charCount ) {
    if ( !(charCount[letter] % 2 === 0) ) {
      oddCount += 1;
    }
  }

  return oddCount <= 1;

};

console.log(palindromePermutation(palPerm));
console.log(palindromePermutation(palPerm2));
console.log(palindromePermutation(palPerm3));