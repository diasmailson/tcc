var botao = document.querySelector("#calcular");

//Adicionando um escutador de eventos, para manipular o formulario 
botao.addEventListener("click",calcular)

function calcular(event){

    // Desativando o comportamento padrão do botão, para não atualizar a pagina
    event.preventDefault();

    //Recebendo a tebala, para pegar os valores dos inputs
    let form = document.querySelector("#info-calculo");

    // Pegando o valor dos inputs de "aporte inicial", "aporte mensal", "juros", "tempo"
    let aporteInicial = form.aporteInicial.value;
    let aporteMensal = form.aporteMensal.value;
    let juros = form.juros.value;
    let tempo = form.tempo.value



    // Pegando as "li" do campo de "% de juros"
    let liJurosAnual = document.querySelector("#juros-anual");
    let liJurosMensal = document.querySelector("#juros-mensal");

    //Pegando as "li" do campo de "tempo"
    let liTempoMes = document.querySelector("#tempoMeses");
    let liTempoAno = document.querySelector("#tempoAnual")

    
    
    // Recebendo o conteudo das li
    let tempoMes = liTempoMes.textContent;
    let tempoAno = liTempoAno.textContent;

    // Recebendo os conteudos das "li"
    let jurosAnual = liJurosAnual.textContent;
    let jurosMensal = liJurosMensal.textContent;

    
    
    
}