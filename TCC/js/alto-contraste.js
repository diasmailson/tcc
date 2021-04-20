let botao = document.querySelector("#alto-contraste");

botao.addEventListener("click",alterarContraste);

function alterarContraste (){
    let main = document.querySelector("#main");

    main.classList.add("fundo-preto-branco")
}