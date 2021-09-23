function evaluate(string) {
    const newString = string.replace(/\s+/gm, '');
    const regexOperator = /[\+\-\*\/]/gm;
    const operator = newString.match(regexOperator);
    const strings = newString.split(regexOperator);
    switch (true) {
      case !string:
        return 'Error, string is empty';
      case !operator:
        return 'Error, string is not mathematical expression';
      case operator[0] === '+':
        return (Number(strings[0]) + Number(strings[1]));
      case operator[0] === '-':
        return (Number(strings[0]) - Number(strings[1]));
      case operator[0] === '*':
        return (Number(strings[0]) * Number(strings[1]));
      case operator[0] === '/':
        if (strings[1] != 0) {
          return (Number(strings[0]) / Number(strings[1]));
        }
        return 'Error you cannot divide by 0';
      default:
    }
  }

const calcForm = document.querySelector('#calcForm');
const inputString = document.querySelector('#inputCalc');
const result = document.querySelector('#result');
const showButton = document.querySelector('#showCode');
const codeSnippet = document.querySelector('#codeSnippet');

calcForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const html = `
    The result of ${inputString.value} is ${evaluate(inputString.value)}
  `;
  result.innerText = html;
  inputString.value = '';
});

showButton.addEventListener('click', ()=> {
  let status = codeSnippet.style.display
status === 'none'? codeSnippet.style.display = 'block' : codeSnippet.style.display = 'none'

})
