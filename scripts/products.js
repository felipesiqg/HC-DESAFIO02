const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let produtoExiste = document.getElementById('salvar')
    let tamanhoLocalStorage = localStorage.length
    let id
    if (produtoExiste.getAttribute('existe') == 'false'){
        id = `LALP${tamanhoLocalStorage + 1}`
    } else if(produtoExiste.getAttribute('existe') == 'true') {
        let numIdentificador = parseInt(produtoExiste.getAttribute('produto'))
        id = `LALP${numIdentificador}`
        document.getElementById('salvar').setAttribute('existe', 'false')
    }
    let nome = document.getElementById('campo-nome').value
    let preco = parseFloat(document.getElementById('campo-preco').value).toFixed(2)
    let descricao = document.getElementById('campo-descricao').value
    let urlImagem = document.getElementById('campo-img').value
    let data = {
        id,
        nome,
        preco,
        descricao,
        urlImagem
    };
    let convertData = JSON.stringify(data);
    localStorage.setItem(`product${id}`, convertData)
    preencheTabelaProduto()
    document.getElementById('campo-nome').value =''
    document.getElementById('campo-preco').value=''
    document.getElementById('campo-descricao').value=''
    document.getElementById('campo-img').value=''
})

function preencheTabelaProduto(){
    const tabela = document.getElementById('itens-tabela-produtos')
    tabela.innerHTML = ''
    for (let id=1; id<=localStorage.length; id++){
        let linha = localStorage.getItem(`productLALP${id}`)
        if (linha != null){
            let linhaTratada = JSON.parse(linha)
            tabela.innerHTML += `<tr onclick="atualizarProduto(${id})"><th>${linhaTratada.id}</th><th>${linhaTratada.nome}</th><th>${linhaTratada.preco}</th></tr>`
        }
    }
}

function atualizarProduto(id){
    const botao = document.getElementById('salvar')
    botao.setAttribute('existe', 'true')
    const produto = localStorage.getItem(`productLALP${id}`)
    const produtoTratado = JSON.parse(produto)

    let inputNome = document.getElementById('campo-nome')
    let inputPreco = document.getElementById('campo-preco')
    let inputDescricao = document.getElementById('campo-descricao')
    let inputUrl = document.getElementById('campo-img')
    let inputIdentificador = document.getElementById('salvar')
    inputNome.value = produtoTratado.nome
    inputPreco.value = produtoTratado.preco
    inputDescricao.value = produtoTratado.descricao
    inputUrl.value = produtoTratado.urlImagem
    
    inputIdentificador.setAttribute('produto', `${id}`)



}
