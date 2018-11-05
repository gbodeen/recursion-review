// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };




// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body, results = []) {
  
  if (node.className && node.className.split(' ').includes(className)) {
    results.push(node);
  }
  
  for (let child of node.childNodes) {
    getElementsByClassName(className, child, results);
  }

  return results;
};

// const getElementsByClassName = (className, node = document.body, matchList = []) => { 
//   // Check if node contains className
//   if (node.className && node.className.split(' ').includes(className)) { 
//     matchList.push(node); 
//   }

//   for (let child of node.childNodes) { 
//     getElementsByClassName(className, child, matchList); 
//   }
  
//   return matchList;
// }