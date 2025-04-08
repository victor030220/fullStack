// Datos de entrada (para pruebas)
const loanAmount = 10000;
const annualInterestRate = 12;  // 12%
const termInMonths = 24;
const clientType = "returning";

const UPPERLOANLIMIT = 50000
const LOWERLOANLIMIT = 1000;
const UPPERPORCENTAGELIMIT = 20
const LOWERPORCENTAGELIMIT = 5
const UPPERTIMELIMIT = 60
const LOWERTIMELIMIT = 6
const TYPESOFCLIENTS = new Map();//utilizo el map que puede almacenar el par clave-valor en este caso a cada tipo de cliente le toca un descuento

TYPESOFCLIENTS.set("new",0)//expresados en %
TYPESOFCLIENTS.set("returning", 2)
TYPESOFCLIENTS.set("premium", 5)

function calculateMonthlyPayment(amount, rate, term) //El enunciado expresa term en meses
{
    rate = (rate/100) / 12 //Divido por 100 para poder multiplicarlo, calculo la tasa mensual ya que viene expresada en forma anual, divido por 12
    amount = amount + ( amount * rate * term ) //obtengo el total que debo pagar en ese lapso de tiempo
    return amount / term
}

function calculateTotalPayment(monthlyPayment, term)
{
    return monthlyPayment * term
}

function calculateTotalInterest(totalPayment, loanAmount)
{
    return totalPayment - loanAmount
}

function applyDiscount(monthlyPayment, clientType)
{
    let discountPorcentage

    discountPorcentage = TYPESOFCLIENTS.get(clientType) / 100 //divido por 100 para poder multiplicarlo
    return monthlyPayment * (1 - discountPorcentage)

}

function isWithinTheRange( amount,lowerLimit, upperLimit )
{
    return amount >= lowerLimit && amount <= upperLimit
}

// Función principal
function calculateLoan(amount, rate, term, type) {
    
    let monthlyPayment, totalPayment, totalInterest, discountedTotal
    let msj

    if( ! isWithinTheRange(amount,LOWERLOANLIMIT, UPPERLOANLIMIT) )
        return -1 //damos un codigo de error en los parametros ingresados

    if( ! isWithinTheRange(rate, LOWERPORCENTAGELIMIT, UPPERPORCENTAGELIMIT) )
        return -1

    if( ! isWithinTheRange(term, LOWERTIMELIMIT, UPPERTIMELIMIT) )
        return -1

    if( ! TYPESOFCLIENTS.has(type) )
        return -1

    monthlyPayment = calculateMonthlyPayment(amount, rate, term)
    totalPayment = calculateTotalPayment(monthlyPayment, term)
    totalInterest = calculateTotalInterest (totalPayment, amount)
    discountedTotal = applyDiscount(monthlyPayment, type)
    return `el total es ${totalPayment}, se paga mensual ${monthlyPayment}, el total de interes es ${totalInterest}, el total mas descuento es ${discountedTotal}`
}

// Ejecuta el programa y muestra resultados
//const result = calculateLoan(loanAmount, annualInterestRate, termInMonths, clientType);
//console.log("=== DETALLES DEL PRÉSTAMO ===");
// Muestra los resultados aquí

console.log( calculateLoan(loanAmount, annualInterestRate, termInMonths, clientType) )