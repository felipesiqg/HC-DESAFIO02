function showProducts(){
    const showProducts = document.getElementById('show-products')
    showProducts.innerHTML = ''
    for (let id=1; id<=localStorage.length; id++){
        let linha = localStorage.getItem(`productLALP${id}`)
        if (linha != null){
            let linhaTratada = JSON.parse(linha)
            let srcImg = linhaTratada.urlImagem
            let nomeProd = linhaTratada.nome
            let precoProd = linhaTratada.preco
            if (linhaTratada.preco == 'NaN') {
                precoProd = 'Preço Indisponível'
            }
            if (linhaTratada.urlImagem == ''){
                srcImg = '../src/sacola.png'   
            }
            if (linhaTratada.nome == '') {
                nomeProd = 'Nome Indisponível'
            }
            else {
                showProducts.innerHTML += 
                    `<div class="product" onclick="showDetails()">
                        <img class="imagem-produto" src="${srcImg}" alt="Produto">
                        <h2>${nomeProd}</h2>
                        <p>R$${precoProd}</p>
                        <p>${linhaTratada.descricao}</p>
                    </div>`
            }
        }
    }
}

function showDetails(){
    console.log('Hello')
}