//////////////////////////
//    Creating a Set    //
//////////////////////////
function Set() {
  this._storage = {};
  this._count = 0;
}

// O(1)
Set.prototype.count = function() {
  return this._count;
};

// O(1)
Set.prototype.has = function(value) {
  return !!this._storage[value];
};

// O(1)
Set.prototype.add = function(value) {
  if (this.has(value)) {
    return 'Set already has value';
  }
  this._storage[value] = true;
  this._count++;
  return this;
};

// O(1)
Set.prototype.delete = function(value) {
  if (this._storage[value]) {
    delete this._storage[value];
    this._count--;
    return true;
  }
  return false;
};

// O(n)
Set.prototype.forEach = function(callback) {
  var values = this._storage;
  for (var key in values) {
    callback(key);
  }
};
