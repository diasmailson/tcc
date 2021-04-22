var botao = document.querySelector("#calcular");

//Adicionando um escutador de eventos, para manipular o formulario 
botao.addEventListener("click",calcular)

function calcular(event){


    // Desativando o comportamento padrão do botão, para não atualizar a pagina
    event.preventDefault();

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
    let juros = parseInt(valueJuros);
    let tempo = parseInt(valueTempo);

    // Transformando o int em porcentagem
    juros = juros/100;

    let acumulado = aporteInicial;
    let jurosCompostos = 0;
    
    //Calculando Juros CompostosaporteInicial
    for (let i =0; i<tempo; i++){
        jurosCompostos = acumulado*juros;
        
        acumulado += jurosCompostos
        acumulado+=aporteMensal;
        
    }
    console.log(acumulado);
    

  

 
}