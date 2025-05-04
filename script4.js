console.log('connected 4');

// create element and attribute
const h2 = document.createElement('h2');
h2.innerText = "JS core concepts";
console.log(h2);

const ul = document.createElement('ul');
ul.setAttribute('id', 'topics');
console.log(ul);

const li = document.createElement('li');
li.innerText = 'dsa';
console.log(li);

const li1 = document.createElement('li');
li1.innerText = 'fundamentals';
console.log(li1);

const li2 = document.createElement('li');
li2.innerText = 'dom';
console.log(li2);

const li3 = document.createElement('li');
li3.innerText = 'es6';
console.log(li3);

// style the created section
const sec = document.getElementById('sec');
sec.style.backgroundColor = 'green';
sec.style.padding = '10px';
sec.style.borderRadius = '5px';
console.log(sec);


// appendChild all of them
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.insertBefore(li, li1)
sec.appendChild(h2);
sec.appendChild(ul);

// remove element 
const p2 = document.getElementById('p-2');
p2.remove();


// remove child
const topicsContainer = document.getElementById('topics-container');
console.log(topicsContainer);

const lastTopic = document.getElementById('last-topic');
console.log(lastTopic);

topicsContainer.removeChild(lastTopic);