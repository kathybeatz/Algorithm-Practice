//3.6 Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in LinkedList data structure.

/*
 *
 * Time: 
 * Additonal space: 
 *
 */


//Solution 1:
var AnimalShelter = function() {
  this._dogs = [];
  this._cats = [];
  this._id = 0;
};

AnimalShelter.prototype.enqueueCat = function(name) {
  this._cats.push({
    name: name,
    id: this._id++
  });
};

AnimalShelter.prototype.enqueueDog = function(name) {
  this._dogs.push({
    name: name,
    id: this._id++
  });
};

AnimalShelter.prototype.dequeueAny = function() {
  var dogId = this._dogs.length > 0 ? this._dogs[0].id : Number.POSITIVE_INFINITY;
  var catId = this._cats.length > 0 ? this._cats[0].id : Number.POSITIVE_INFINITY;
  
  if (dogId !== Number.POSITIVE_INFINITY || catId !== Number.POSITIVE_INFINITY) {
    if (dogId < catId) {
      return this._dogs.shift().name;
    }
    else {
      return this._cats.shift().name;
    }
  }
};

AnimalShelter.prototype.dequeueCat = function() {
  return this._cats.shift().name;
};

AnimalShelter.prototype.dequeueDog = function() {
  return this._dogs.shift().name;
};