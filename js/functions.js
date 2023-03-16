// функция для проверки длины строки.
const checksLengthString = (string,length) => {
  const result = (string.length <= length);
  return result;
};
checksLengthString('привет',6);

// Функция для проверки, является ли строка палиндромом
const checksPalindrome = (string) => {
  const recycledString = string.toUpperCase().replaceAll(' ','');
  let reverse = '';
  for(let i = -1; i >= (recycledString.length * -1);i--) {
    reverse += recycledString.at(i);
  }
  return (recycledString === reverse);
};
checksPalindrome('До во д');

//принимает строку, извлекает содержащиеся в ней цифры
const extractsDigits = (string) => {
  string = String(string);
  let result = '';
  for(let i = 0;i < (string.length);i++) {
    // if (!isNaN(Number.parseInt(string[i],10))) { // еще одно решение
    if (Number(string[i]) || string[i] === '0') {
      result += string[i];
    }
  }
  result = (result.length === 0) ? NaN : result;
  return Number(result);
};
extractsDigits('rffd -1 78 0.5 14tfH9');

//Функция, которая принимает три параметра
const padSymbol = (string,minWidth,addSymbol) => {
  let addSymbolSum = addSymbol;
  const preffixLength = minWidth - string.length;
  if (string.length >= minWidth) {
    return string;
  }
  if (preffixLength === addSymbol.length) {
    return addSymbol + string;
  }
  if (preffixLength < addSymbol.length) {
    return addSymbol.slice(0,preffixLength) + string;
  }
  if (preffixLength > addSymbol.length) {
    while (preffixLength - addSymbolSum.length > addSymbol.length) {
      addSymbolSum += addSymbol;
    }
    return addSymbol.slice(0,preffixLength - addSymbolSum.length) + addSymbolSum + string;
  }

};
padSymbol('q',4,'we');
