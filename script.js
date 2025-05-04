console.log('connected');
console.dir(document);
console.dir(document.TEXT_NODE);
console.dir(document.ATTRIBUTE_NODE);
console.dir(document.COMMENT_NODE);

// parent child relation maintain via htmlCollection
const ul = document.getElementById('li-container');
console.log(ul);
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// parent child relation maintain via nodeList
const ul2 = document.querySelector('#topics-container');
console.log(ul2);
console.log(ul2.parentNode);
console.log(ul2.childNodes);
console.log(ul2.previousSibling);
console.log(ul2.nextSibling);