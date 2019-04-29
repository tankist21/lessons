// new RegExp('pattern', 'flags');
// /pattern/
//let ans = prompt('Введите ваше имя');

//let reg = /n/g;

//console.log(ans.match(reg));
//console.log(ans.search(reg));
//console.log(reg.test(ans));

// i - флаг регистра, говорит что мы хотим найти чтото  независимо от регистаж
// g - флаг глобальности, что мы ищем глобально
// m - флаг многострочности

// \d - все цифры \D - не чмсло
// \w - все буквы  \W - не буквы
// \s - все пробелы  \S - не пробел, спецсимволы



//let pass = prompt('Введите пароль');
//console.log(pass.replace(/./g, "*"));
//alert('12-34-56'.replace(/-/g, ":"));



//let ans = prompt('Введите число');

//let reg = /\d/g;
//console.log(ans.match(reg));

let str = 'My name is/ R2B2';
console.log(str.match(/ /i));