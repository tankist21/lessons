var box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wraper = document.querySelector('.wraper');

    box.style.backgroundColor = 'blue';
    btn[1].style.fontSize = '50px';
    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

//    for (var i = 0; i < heart.length; i++) {
//        heart[i].style.backgroundColor = 'blue';
//    }

//    heart.forEach(function(item, i, hearts) {
//        item.style.backgroundColor = 'blue';    
//    });

var div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

//document.body.appendChild(div); добавлени элемента в конец блока
//wraper.appendChild(div);

//div.innerHTML = '<h1>Hello, World!!!</h1>';

div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]); //добавление элемента до какого-то
document.body.removeChild(circle[1]); //удаление элемента
wraper.removeChild(heart[1]);
document.body.replaceChild(btn[1], circle[1]);
console.log(div);