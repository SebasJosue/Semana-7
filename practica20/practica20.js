'use strcit'
function multiplicar(multiplicador , multiplicando){
    let suma = 0;
    for(let i=0; i < multiplicador; i++){
        suma = suma + multiplicando;
        }

        return suma;
}
 let multiplicador = Number(prompt("Ingrese el multiplicador"))    
let multiplicando = Number(prompt("Ingrese el multiplicando"))

let resultado = multiplicar(multiplicador,multiplicando);
alert(resultado);
