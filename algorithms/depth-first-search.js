/*

https://en.wikipedia.org/wiki/Depth-first_search

Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents
(not just its immediate children). For each element visited, the function should pass that element to a provided
callback function.

The arguments to the function should be:
- a DOM element
- a callback function (that takes a DOM element as its argument)

*/

// Solution:
// Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application.

function Traverse(p_element, p_callback) {
  p_callback(p_element);
  var list = p_element.children;
  for (var i = 0; i < list.length; i++) {
    Traverse(list[i], p_callback); // recursive call
  }
}
