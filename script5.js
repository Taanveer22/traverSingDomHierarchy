console.log('connected 5');
// for adding multiple class we can use classList
const heading = document.getElementById('sec-title');
console.log(heading);
heading.classList.add('first');
console.log(heading);
heading.classList.add('second', 'third');
console.log(heading);
heading.classList.remove('third');
console.log(heading);