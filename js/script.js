let userName = prompt('Ingresá tu nombre');
let userAge = parseInt(prompt('Ingresá tu edad'));
let userOption = '';

function suma (num1, num2) {
    resultadoSuma = num1 + num2;
}
function resta (num1, num2) {
    resultadoResta = num1 - num2;
}

do {
    userOption = prompt(userName + ' elegí una opción:\n1- Tu edad en 10 años.\n2- Tu edad hace 5 años.\n3- Cuánto te falta para los 50 años.\nEscribe ESC para salir.');
    if (userOption != '1' && userOption != '2' && userOption != '3' && userOption != 'ESC'){
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
        default:
            break;
    }
} while (userOption != 'ESC');

alert('Gracias ' + userName + ' por "jugar" con este invento raro.\nSaludos!')