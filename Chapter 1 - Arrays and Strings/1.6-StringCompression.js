//1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z).

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 1:
var string1 = 'aabcccccaaa';

var stringCompression = function ( string ) {
  var compressedString = '';
  var countConsecutive = 0;

  //iterate through the string
  for ( var i = 0; i < string.length; i++) {
    //increment the consecutive counter
    countConsecutive++;
    //if the next character is different than the current
    if ( i + 1 >= string.length || string.charAt(i) !== string.charAt(i + 1)) {
      //add this character to result
      compressedString += '' + string.charAt(i) + countConsecutive;
      //reset the count
      countConsecutive = 0;
    }
  }
  //if the compressed string length is greater than the original string length return the compressed string
  //else return the original string
  return compressedString.length < string.length ? compressedString : string;
};

console.log( stringCompression(string1));

/*
 *
 * Time: 
 * Additonal space: 
 *
 */

//Solution 2:
var compressedString = function ( string ) {
  var cStr = '';

  //iterate through the string
  for ( var i = 0; i < string.length; i++ ) {
    var char = string[i];
    start = i;
    //loop as long as the iterator is less than the string length and the current character is the same as the character next to it
    while ( i + 1 < string.length && char === string[i + 1] ) {
      //increment i
      i++;
    }
    //adjust the compressed string with the character and its count
    cStr += char + (i - start + 1);
  }
  //if the compressed string length is greater than the original string length return the compressed string
  //else return the original string
  return cStr.length < string.length ? cStr : string;
};

console.log( compressedString(string1) );