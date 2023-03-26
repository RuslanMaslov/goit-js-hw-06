let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = 'Anonymous';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }
const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    nameRef.textContent = currentTarget.value.trim();
  } else {
    nameRef.textContent = 'Anonymous';
  }
};

inputRef.addEventListener('input', getInputValue);
