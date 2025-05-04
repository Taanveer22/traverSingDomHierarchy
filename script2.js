console.log('connected 2');

const para = document.querySelector('.para-container');
console.log(para);
// innerText doesnot show the hidden value
console.log(para.innerText);

// but textContext show the hidden value also
console.log(para.textContent);