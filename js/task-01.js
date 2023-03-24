const list = document.querySelectorAll('li.item');

console.log(`In list ${list.length} categories.`);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {

  console.log(
`Category: ${el.firstElementChild.textContent}, 
Amount of elements: ${el.lastElementChild.children.length}`,
  );
});