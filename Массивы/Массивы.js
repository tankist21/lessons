//let arr =  [ "first", 2, 3, "four", 5];

//arr.pop(); // удаляет последний элемент массива
//arr.push('5'); // добвлет элемент в конец массива
//arr.shift(); // удалет первыйц элемент массива
//arr.unshift("1"); // добавлет первый элемент массива
//arr[99] = 99;
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }
//arr.forEach(function(item, i, mass) {
 //   console.log(i + ': ' + item + "(массив: " + mass + ')');
//})

//let mass = [ 1, 3, 4, 6, 7];
//for (let key of mass) {
//    console.log(key);
//}

//var ans = prompt("", ""),
  //  arr = [];
//arr = ans.split(','); // объединяет в массив через разделитель
//console.log(arr);

//var arr = ["gfdh", 'ljv', "rjn", "пол"],
  //  i = arr.join(', '); //берет каждый элемент массива и склеивает в одну строку
//console.log(i);

//var arr = ["gfdh", "rjn",'ljv', "jпол"],
  //  i = arr.sort(); //осуществлет сортировку массива;
//console.log(arr);

var arr = [1, 15, 4],
    i = arr.sort(compareNum); //осуществлет сортировку массива;


function compareNum(a, b) {
    return a - b;
}

console.log(arr);


var soldier = {
  health: 400,
  armor: 100
};
var john = {
  health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);