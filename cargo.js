// array representing our container
var objects = [];

// adds an item to the container (only if it has a .id specified)
exports.add = function(obj)
{	
	if (obj.id && !this.getById(obj.id)) {

		objects.push(obj);
		
		exports.length = objects.length;
	}
};

// allows .item("123") to retrieve an object
exports.item = function(id)
{
	return this.getById(id);
}

// get by index
exports.getByIndex = function(index)
{
	if (!objects.length == 0) {

		return objects[index];

	}
	else {
		return false;
	}
}

// get by id (same as .item("123"))
exports.getById = function(id)
{
	for (i in objects) {

		if (objects[i].id == id) {

			return objects[i];
		}
	}

	return false;
};

// gets the index of an id
exports.getIndexOf = function(id) {
	
	for (i in objects) {

		if (objects[i].id == id) {

			return i
		}
	}

	return false;
}

// iterative container, pass false to break
exports.each = function(callback) {
	
	for (i in objects) {
		
		if (callback) {
			if (callback(objects[i]) ==false) {
				break;
			}			
		};		
	}
}

// remove an item from the container based on id
exports.remove = function(id)
{
	var obj = this.getById(id);

	objects.splice(this.getIndexOf(id), 1);

	exports.length = objects.length;
};