const toRomans = number => {
    const input = number;
    const string = `${input}`;
    const { length } = string;
    let result;
    const thousands = ('M'.repeat(Math.floor(input / 1000)));
  
    const onesArray = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const tensArray = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    const hundredsArray = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    const hundreds = hundredsArray[string[length - 3]];
    const tens = tensArray[string[length - 2]];
    const ones = onesArray[string[length - 1]];
  
    switch (length) {
      case 1:
        result = onesArray[string[0]];
        break;
      case 2:
        result = tensArray[string[0]] + onesArray[string[1]];
        break;
      case 3:
        result = hundredsArray[string[0]] + tensArray[string[1]] + onesArray[string[2]];
        break;
      default:
        result = thousands + hundreds + tens + ones;
    }
    console.log(result);
    return result;
  };

const romanForm = document.querySelector('#romanForm');
const inputString = document.querySelector('#inputRoman');
const result = document.querySelector('#result');
const showButton = document.querySelector('#showCodeRoman');
const codeSnippet = document.querySelector('#codeSnippetRoman');

romanForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = inputString.value;
  const html = `
  <h3>Result</h3> 
<p>${input} is ${toRomans(input)} in Roman numerals</p>
  `;
  result.innerHTML = input ? html : `<p>Please enter a number greater than 0</p>`;
  inputString.value = '';
});

showButton.addEventListener('click', ()=> {
  let status = codeSnippet.style.display
status === 'none'? codeSnippet.style.display = 'block' : codeSnippet.style.display = 'none'

})