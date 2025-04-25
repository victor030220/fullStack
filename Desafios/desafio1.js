// Datos de entrada (para pruebas)
const loanAmount = 10000;
const annualInterestRate = 12;  // 12%
const termInMonths = 12;
const clientType = "returning";

const UPPERLOANLIMIT = 50000
const LOWERLOANLIMIT = 1000;
const UPPERPORCENTAGELIMIT = 20
const LOWERPORCENTAGELIMIT = 5
const UPPERTIMELIMIT = 60
const LOWERTIMELIMIT = 6
<<<<<<< HEAD
const TYPESOFCLIENTS = ["new", "returning", "premium"]//utilizo 2 vectores paralelos, se podria utilizar un hashmap ya que tenemos una relacion de clave valor
const DISCOUNTS = [0,2,5]
=======
const TYPESOFCLIENTS = new Map();//utilizo el map que puede almacenar el par clave-valor en este caso a cada tipo de cliente le toca un descuento

TYPESOFCLIENTS.set("new",0)//expresados en %
TYPESOFCLIENTS.set("returning", 2)
TYPESOFCLIENTS.set("premium", 5)
>>>>>>> 54e361ce4419404911551a37181f5e6a22851f12

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
    let i

    for(i = 0; i < TYPESOFCLIENTS.length; i = i + 1)
    {
        if( TYPESOFCLIENTS[i] == clientType )
        {
            discountPorcentage = DISCOUNTS[i] / 100
            return monthlyPayment * ( 1 - discountPorcentage)
        }
    }

}

function belongsTo ( array, element )
{
<<<<<<< HEAD
    return array.includes(element.toLowerCase())
}

function isWithinTheRange( value,lowerLimit, upperLimit )
{
    return value >= lowerLimit && value <= upperLimit
}

function createmessage(rate, term, amount, monthlyPayment, discountedTotal, totalInterest)
{
    let msg
    msg = `Cuota mensual sin descuento: $${monthlyPayment}\n`
    msg = msg + `Cuota mensual con descuento: $${discountedTotal}\n`
    msg = msg + `Total a pagar por los ${term} meses de prestamo: $${discountedTotal * term}\n`
    msg = msg + `Monto total a pagar de intereses: $${totalInterest}\n`
    msg = msg + `El prestamo por $${amount} durante ${term} meses con una taza anual del ${rate}% es`

    if ( totalInterest > amount / 2  ) //tomo la politica simple de si los intereses son mayores a la mitad del capital solicitado no es tan bueno
        return msg + ` no tan conveniente ya que pagamos mas de la mitad del prestamo en interes.`
    return msg + ` es conveniente ya que el interes es menor al 50% del capital solicitado`
=======
    return amount >= lowerLimit && amount <= upperLimit
>>>>>>> 54e361ce4419404911551a37181f5e6a22851f12
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

    if( ! belongsTo(TYPESOFCLIENTS, type))
        return -1

    monthlyPayment = calculateMonthlyPayment(amount, rate, term)
<<<<<<< HEAD
    discountedTotal = applyDiscount(monthlyPayment, type)
    totalPayment = calculateTotalPayment(discountedTotal, term)
    totalInterest = calculateTotalInterest (totalPayment, amount)
    return createmessage(rate, term, amount, monthlyPayment, discountedTotal, totalInterest)
}

// Ejecuta el programa y muestra resultados
const result = calculateLoan(loanAmount, annualInterestRate, termInMonths, clientType);
console.log("=== DETALLES DEL PRÉSTAMO ===");
console.log(result)
=======
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
>>>>>>> 54e361ce4419404911551a37181f5e6a22851f12
