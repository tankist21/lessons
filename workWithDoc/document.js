let box = document.querySelector('.box'),
    btn = document.querySelector('button');

    let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

//btn.addEventListener('click', function() {
//    box.style.height = box.scrollHeight + "px";
//});

btn.addEventListener('click', function() {
    box.scrollTop = 0;
});

scrollBy(0, 200); //перемещение по координатам относительно нашего местоположени
scrollTo(0, 200); // переместит в определеннные координаты на странице