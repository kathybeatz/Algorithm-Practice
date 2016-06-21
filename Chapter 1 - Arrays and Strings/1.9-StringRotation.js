//1.9 String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s2 using only one call to isSubstring (e.g. 'waterbottle' is a rotation of 'erbottlewat').

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1:

//function should take in 2 strings 
var stringRotation = function ( str1, str2 ) {
  //check if both strings are valid
  if (!str1 || !str2) {
    //return an error if theyre not
    throw new Error('invalid input');
  }
  //if the two strings have different lengths 
  if (str1.length !== str2.length) {
    //string 2 is not a rotation of string 1
    return false;
  }
  //call isSubstring once (duplicate string 1)
  return isSubstring(str1 + str1, str2);
};

function isSubstring (str, substr) {
  return str.includes(substr);
};

var string1 = 'erbottlewat';
var string2 = 'waterbottle';
var string3 = 'tlewaterbot';
console.log(stringRotation(string1, string2));
console.log(stringRotation(string1, string3));