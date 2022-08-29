const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well

/*
    Create a function for each problem in a file called
        keys.jsconst testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; 
    // of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
}

function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
}

/* STRETCH PROBLEMS */

function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
}

function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
}