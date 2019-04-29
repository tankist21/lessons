let num = 50;
if ( num < 49 ) {
    console.log("Неверно");
} else if (num > 100) {
    console.log("Mnogo");
} else {console.log("Verno");}
(num < 50) ? console.log("verno"):console.log("neverno");
switch ( num ) {
    case num < 49: 
        console.log("neverno");
        break;
    case num > 100:
        console.log("mnogo");
        break;
    case 50: 
        console.log("verno");
        break;
    default: 
        console.log("xnj-то не так");
        break;
}
