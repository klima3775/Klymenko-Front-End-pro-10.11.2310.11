// Цикл який треба переробити 

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

//Перероблений цикл

let numOrStr = prompt('input number or string');

switch(true){
    case numOrStr === null:
        alert('ви скасували');
        break;
    case numOrStr.trim() === '':
        alert('Empty String');
        break;
    case isNaN(+numOrStr):
        alert( 'number is Ba_NaN');
        break;
    default:
        alert('OK!');     
}

