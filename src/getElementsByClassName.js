// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  var getElementByClass = function(node) {
    if (node) {
      if (node.length) {
        for (var i = 0; i < node.length; i++) {
          if (node[i].classList) {
            getElementByClass(node[i]);
          }
        }
      } else {
        var classes = node.classList;
        if (_.indexOf(classes, className) !== -1) {
          results.push(node);
        }
        getElementByClass(node.childNodes);
      }
    }
  };

  getElementByClass(document.body);

  return results;
};