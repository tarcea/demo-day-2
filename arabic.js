const rates = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const regexEx = /(CM)|(CD)|(XC)|(XL)|(IX)|(IV)/gmi;
  
  const arabic = number => {
    let arabicNumber = 0;
    let result;
    if (regexEx.test(number)) {
      const exceptions = number.match(regexEx);
      const cleanRoman = number.replace(regexEx, '');
      result = [...exceptions, ...cleanRoman.split('')];
    } else {
      result = number.split('');
    }
    result.forEach(item => {
      arabicNumber += Number(rates[item]);
    });
    return arabicNumber;
  };
  
const arabicForm = document.querySelector('#arabicForm');
const inputArabic = document.querySelector('#inputArabic');
const resultArabic = document.querySelector('#resultArabic');
const showButtonArabic = document.querySelector('#showCodeArabic');
const codeSnippetArabic = document.querySelector('#codeSnippetArabic');

arabicForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = inputArabic.value
  const html = `
    <h3>Result</h3>
     <p>${input} is ${arabic(input)} in Arabic numbers</p>
  `;
  resultArabic.innerHTML = input ? html : `<p>Please enter a roman numeral</p>`;
  inputArabic.value = '';
});

showButtonArabic.addEventListener('click', ()=> {
  let status = codeSnippetArabic.style.display
status === 'none'? codeSnippetArabic.style.display = 'block' : codeSnippetArabic.style.display = 'none'
})