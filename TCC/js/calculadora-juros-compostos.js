var botao = document.querySelector("#calcular");

//Adicionando um escutador de eventos, para manipular o formulario 
botao.addEventListener("click",calcular)

function calcular(evento){


    // Desativando o comportamento padrão do botão, para não atualizar a pagina
    evento.preventDefault();

    //Recebendo a tebala, para pegar os valores dos inputs
    let form = document.querySelector("#info-calculo");

    // Pegando o valor dos inputs de "aporte inicial", "aporte mensal", "juros", "tempo"
    let valueAporteInicial = form.aporteInicial.value;
    let valueAporteMensal = form.aporteMensal.value;
    let valueJuros = form.juros.value;
    let valueTempo = form.tempo.value;
    
   

    //Convertendo "aporte inicial", "aporte mensal", "% de juros" e "Tempo" de string para number
    let aporteInicial = parseFloat(valueAporteInicial);
    let aporteMensal = parseFloat(valueAporteMensal);
    let juros = parseFloat(valueJuros);
    let tempo = parseInt(valueTempo);


    // Transformando o int em porcentagem
    juros = juros/100;


    let acumulado = aporteInicial;  

    let jurosCompostos = 0; 
   

    //Calculando Juros CompostosaporteInicial
    for (let i =0; i<tempo; i++){

        jurosCompostos = acumulado*juros;
        acumulado = acumulado + jurosCompostos;
        acumulado= acumulado + aporteMensal;  
        
    }

    let mostrarResultado = document.querySelector("#mostrarResultado");
    mostrarResultado.textContent = "R$ " + acumulado.toFixed(2);
    
 
    
    // Formula Juros compostos: M = C * ((1 + i) ^ t)
    /*

        M = Montante
        C = Capital
        I = Taxa de Juros (em porcentagem)
        T = tempo  
        
     */

  

 
}