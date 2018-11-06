// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // check first for the easy cases: booleans, null
  if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (json === 'null') {
    return null;
  } else if (!isNaN(Number(json))) {
    return Number(json);
  } else if (/^"([^"]|(\\"))*"$/.test(json)) { // broke
    return json.slice(1, -1);
  }
};
