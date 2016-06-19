//1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additonal characters, and that you are given the "true" length of the string. 

//Solution 1: 

/*
 *
 * | N | characters in string
 * Time: O(N) 
 * Additonal space: O(N)
 *
 */

var stringToURL = 'Mr John Smith   ';
var stringL = 13;

//function takes in a string and true length
var urlify = function( string, length ) {
  //make the string into an array
  var stringArr = string.split('');
  //remove the excess space at the end
  var stringTrim = stringArr.splice(0, length);
  //variable to hold the urlified string
  var urlString = '';

  //iterate through the string array
  for ( var i = 0; i < stringTrim.length; i++ ) {
    //if char at an index is a space
    if ( stringTrim[i] === ' ' ) {
      //add %20 to urlString
      urlString += '%20';
    //else
    } else {
      //add the current char to the urlString
      urlString += stringTrim[i];
    }
  }
  //return the urlString
  return urlString;
};

console.log( urlify(stringToURL, stringL) );