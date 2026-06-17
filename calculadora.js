
function soma (x,y) {
let calculo= (x+y)
console.log ("o resultado do calculo é :" ,calculo)}

function subtrair (x,y) {
let calculo= (x-y)
console.log ("o resultado do calculo é :" ,calculo)}

function dividir (x,y) {
let calculo= (x/y)
console.log ("o resultado do calculo é :" ,calculo)}

function multiplicacao (x,y) {
    let calculo= (x*y)
    console.log ("o resultado do calculo é :" ,calculo)}
                  
 module.exports = {
soma: soma,
dividir: dividir,
multiplicacao: multiplicacao,
subtrair: subtrair
 }     
            
            
