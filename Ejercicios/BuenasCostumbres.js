const ITEMS = [10, 20, 30];//Nombres de constantes en mayusculas
const TAX = 0.05;
const DISCOUNT = 0.1;

function CalculateTotal(items, tax, discount) {
  let VALUE_TOTAL = 0;//Elijo usar un idioma para el codigo, en este caso ingles.

  for (let i = 0; i < items.length; i++) {
    VALUE_TOTAL += items[i];
  }
  VALUE_TOTAL += VALUE_TOTAL * tax;
  if (discount) {
    VALUE_TOTAL -= VALUE_TOTAL * discount;
  }
  return VALUE_TOTAL.toFixed(2);
}

let calculated_total = CalculateTotal(ITEMS, TAX, DISCOUNT);//esta variable puede ser usada luego.

console.log(`Total: ${calculated_total}`);

/*
---------------------------------Calculadora---------------------------------
*/

function addition ( numberA, numberB ){
    return numberA + numberB
}

function subtraction ( numberA, numberB ){
    return numberA - numberB
}

function multiplication ( numberA, numberB ){
    return numberA * numberB
}

function division ( dividend, divider ){
    if( divider == 0 )
        throw new Error("The divider cannot be zero")

    return dividend / divider
}

const operations = {
    addition : addition,
    subtraction : subtraction,
    multiplication : multiplication,
    division : division
}

function calculator (numberA, numberB, operation){
    let opFunction = operations[operation];
    if(!opFunction)
        throw new Error("Invalied operator");
    return opFunction(numberA, numberB)
}

const operation = "division"
let numberA = 20
let numberB = 5
console.log(`Los numeros para la prueba son: ${numberA} y ${numberB}. El operado es ${operation}`)
try{
    let resul = calculator(numberA,numberB,operation)
    console.log(`El resultado es ${resul}`)
}
catch(e){
    console.log(e.message)}
