/*
    Testando logica da calculadora
*/

// Valores de entrada dos inputs 
const aporteInicial = 100;
const juros = 0.05;
const tempo = 2;
const aporteMensal = 100;


let acumulado = aporteInicial;  

let jurosCompostos = 0; 
   


for (let i =0; i<tempo; i++){

    jurosCompostos = acumulado*juros;
    acumulado = acumulado + jurosCompostos;
    acumulado= acumulado + aporteMensal;  
    
}

console.log (acumulado);

// Formula Juros compostos: M = C * ((1 + i) ^ t)
    /*
     *  M = Montante
        C = Capital
        I = Taxa de Juros (em porcentagem)
        T = tempo 
     * 
     */
