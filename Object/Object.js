let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name); // получение свойства
options.bool = false; // добавление свойства
options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool; // удаление свойств объекта

console.log(options);

// цикл for..in позволяет перебрать свойства объекта

for (let key in options) {      // key обозначает каждое свойство в нашем объекте
     console.log('Свойство ' + key + ' имеет значение ' + options[key])   
}
console.log(Object.keys(options).length); // смотрим  количество свойств

