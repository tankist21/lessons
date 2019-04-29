// Динамическая типизация - возможность одного типа данных превращаться в другой(число в строку, строка в число, объект в булиновое значение)
// Статическа типизация - число остается числом
// - to String
// 1)


console.log(typeof(String(4)));
// 2)
console.log("err" + "dfsd");
console.log(typeof(false + "4"));
console.log("http://vk.com/catalog/" + 5) // - применение textarea?, input и тд 

// - to Number

//1)
console.log(typeof(Number('4')));
// 2) Унарный плюс
console.log(typeof(+ '5'));
console.log(typeof(5 + + '4'));
// 3)

console.log(typeof(parseInt('4px', 10)));


let ans = + prompt("Hello&?", ''); //- число

// null, 0, "" undefined, NaN - false

// " " - true

let switcher = null;
    if (switcher) {
        console.log("Working ...");
    }

    switcher = 1;

    if (switcher) {
        console.log("Working ...");
    }


// 2)
console.log(typeof(Boolean('4')));

//3)
console.log(typeof(!!('4')));

