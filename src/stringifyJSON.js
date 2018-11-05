// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// 
var stringifyJSON = function(obj) {
  // Check primitives 
  if (typeof obj === 'string') { 
    return '"' + obj + '"'; 
  } else if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
    return '' + obj; 
  } else if (Array.isArray(obj)) { // Check if input is an array 
    return '[' + obj.map(stringifyJSON).join(',') + ']'; // ... and stringify all the elements
  } else if (typeof obj === 'object') { 
    return '{' + Object.keys(obj).filter( key => {
      // JSON does not allow you to stringify functions or
      // undefined values, so you should skip those key/value pairs
      return obj[key] !== undefined && typeof obj[key] !== 'function';
    })
    .map( key => { 
      // stringify all the key:value pairs
      return stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
    }).join(',') + '}';
  }
};
