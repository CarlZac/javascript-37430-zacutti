let userName = prompt('Ingresá tu nombre');
let userAge = parseInt(prompt('Ingresá tu edad'));
let userOption = '';

function suma (num1, num2) {
    resultadoSuma = num1 + num2;
}
function resta (num1, num2) {
    resultadoResta = num1 - num2;
}
function multi(num1, num2) {
    resultadoMulti = num1 * num2;
}
function divi(num1, num2) {
    resultadoDivi = num1 / num2;
}

do {
    userOption = prompt(userName + ' elegí una opción:\n1- Tu edad en 10 años.\n2- Tu edad hace 5 años.\n3- Cuánto te falta para los 50 años.\n4- Tu edad si tuvieras el doble de años.\n5- La edad que tendrías de tener la mitad de años.\nEscribe ESC para salir.');
    if (userOption != '1' && userOption != '2' && userOption != '3' && userOption != '4' && userOption != '5' && userOption != 'ESC'){
        alert('Entrada Inválida');
        continue;
    }
    switch (userOption){
        case '1':
            suma(userAge, 10);
            let ageInTen = resultadoSuma;
            alert('Tu edad en 10 años sería ' + ageInTen);
            break;
        case '2':
            resta(userAge, 5);
            let ageFive = resultadoResta;
            alert('Tu edad hace 5 años era ' + ageFive);
            break;
        case '3':
            if (userAge <= 50){
                resta(50, userAge);
                let ageInFifty = resultadoResta;
                alert('Para que cumplas los 50 faltan ' + ageInFifty);
            }else{
                resta(userAge, 50);
                let agePastFifty = resultadoResta;
                alert('Para que cumplas los 50 te pasaste por ' + agePastFifty + ' años.');
            }
            break;
        case '4':
            multi(userAge, 2);
            let ageByTwo = resultadoMulti;
            alert(userName + ' si tuvieras el doble de años, tendrías ' + ageByTwo);
            break;
        case '5':
            divi(userAge, 2);
            let ageInHalf = resultadoDivi;
            alert(userName + ' si tuvieras la mitad de años, tendrías ' + ageInHalf);
            break;

        default:
            break;
    }
} while (userOption != 'ESC');

alert('Gracias ' + userName + ' por "jugar" con este invento raro.\nSaludos!')