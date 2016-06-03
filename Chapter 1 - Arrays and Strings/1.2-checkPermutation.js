//1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
var string11 = "racecar";
var string22 = "arcerac";

var obj1 = {
  a: 1,
  b: 2,
  c: 3
};

var obj2 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

var checkPermutation = function( string1, string2 ) {

  var stringList1 = {};
  var stringList2 = {};

  //turn strings into arrays so you can sort the chars
  var string1arr = string1.split('').sort();
  var string2arr = string2.split('').sort();

  //iterate through the first string
  for ( var i = 0; i < string1arr.length; i++ ) {
    //check if the curr char is in the obj, if it is not
    if ( ! stringList1[string1arr[i]] ) {
      //save it in the obj
      stringList1[string1arr[i]] = 1;
    //otherwise
    } else {
      //increment the char
      stringList1[string1arr[i]]++;
    }
  }

  //iterate through the first string
  for ( var j = 0; j < string2arr.length; j++ ) {
    //check if the curr char is in the obj, if it is not
    if ( ! stringList2[string2arr[j]] ) {
      //save it in the obj
      stringList2[string2arr[j]] = 1;
    //otherwise
    } else {
      //increment the char
      stringList2[string2arr[j]]++;
    }
  }

  // console.log("stringList1", stringList1);
  // console.log("stringList2", stringList2);

  //check if the two objects are equal to each other
  //need to stringify to compare
  return JSON.stringify(stringList1) === JSON.stringify(stringList2);

};

console.log("first run: ", checkPermutation(string11, string22));