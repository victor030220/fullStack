//asincronico
console.log("Inicio")
setTimeout( () => {
    console.log("Tarea asincronica completa")
}, 1000 )
console.log("Fin")
/*Resultado
Inicio
Fin
Tarea.....
*/
//Promesa, esta espera una funcion de callback el cual debe contener las funciones en caso de exito y en caso de fracaso
const promise = new Promise( (resolve, reject) => {
    const success = true;
    setTimeout( () => {
        if(success) resolve("Se resolvio")
        else reject("Error")
    }, 1000 );
} )
const promiseResult = promise.then( (value) => {
    console.log(value)
} )
.catch( (error) => {
    console.log(error)
} )
console.log( promiseResult )

//Esta es una forma de hacerlo prolijo
async function fetchData (){
try{
const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
const data = await result.json()
console.log(data)
return data.title
}
catch (erro){
console.log(erro)
}
}
console.log(fetchData())