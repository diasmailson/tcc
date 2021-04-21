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
    let juros = form.juros.value;
    let tempo = form.tempo.value;

    //Convertendo "aporte inicial" e "aporte mensal" de string para number
    let aporteInicial = parseInt(valueAporteInicial);
    let aporteMensal = parseInt(valueAporteMensal);

    // Pegando a "selection" do campo de "% de juros"
    let selectionOpTempoPorcent = document.querySelector("#op-juros");
    let opJuros = selectionOpTempoPorcent.options[selectionOpTempoPorcent.selectedIndex].value;


    // Pegando a "selection" do campo de "Tempo"
    let selectionOpTempo = document.querySelector("#op-tempo");
    let opTempo = selectionOpTempo.options[selectionOpTempo.selectedIndex].value;
    
    let capitalAcumulado = aporteInicial + aporteMensal;
    let jurosCompostos = 0;






    /*
    if (opJuros == "mensal" && opTempo == "mensal"){
       jurosCompostos = capitalAcumulado +
    }

    else if (opJuros == "mensal" && opTempo == "anual"){
       console.log("mensal e anual");
    }

    else if (opJuros == "anual" && opTempo == "anual"){
       console.log("anual e anual");
    }

    else if (opJuros == "anual" && opTempo == "mensal"){
       console.log("anual e mensal");
    }*/
   

    

    

    






    
    
    
}