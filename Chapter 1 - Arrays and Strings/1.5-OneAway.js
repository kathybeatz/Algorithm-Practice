//1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

var oneAway = function ( string1, string2 ) {
  var obj = {};

  if ( Math.abs(string1.length - string2.length) <= 1 ) {
    for ( var i = 0; i < string1.length; i++ ) {
      if ( obj[string1[i]] === undefined ) {
        obj[string1[i]] = 1;
      } else {
        obj[string1[i]] += 1;
      }
    }
    for ( var j = 0; j < string2.length; j++ ) {
      if ( obj[string2[j]] === undefined ) {
        obj[string2[j]] = 1;
      } else {
        obj[string2[j]] += 1;
      }
    }
  }

  var oddCount = 0;

  for ( var key in obj ) {
    if ( !(obj[key] % 2 === 0) ) {
      oddCount += 1;
    }
  }

  return oddCount === 1 || oddCount === 2;

};

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bae'));