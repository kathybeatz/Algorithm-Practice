//3.1 Three in One: Describe how you could use a single array to implement three stacks.

var TripleStack = function () {
  this.array = [];
  this.lengths = [0,0,0];
};


//////////////////////////
//   Creating a Stack   //
//////////////////////////

var Stack = function() {
  this._storage = {};
  this._size = 0;
};


Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

Stack.prototype.size = function(){
  return this._size;
};


var stackz = new Stack();

stackz.push(1);
stackz.push(2);
console.log(stackz)
stackz.pop();
console.log(stackz)