window.onload = function() {
    console.warn("OLAAAAAA MUNDO")

    function prepararBotao() {
        let botao = document.querySelector("button#btnSalvar")
        let ladda = Ladda.create(botao)
        ladda.start()
    }

    function clicou(){
        prepararBotao()
    }
}