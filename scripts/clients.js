const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let clienteExiste = document.getElementById('salvar')
    let tamanhoLocalStorage = localStorage.length
    let id
    if (clienteExiste.getAttribute('existe') == 'false'){
        id = `LALC${tamanhoLocalStorage + 1}`
    } else if(clienteExiste.getAttribute('existe') == 'true') {
        let numIdentificador = parseInt(clienteExiste.getAttribute('cliente'))
        id = `LALC${numIdentificador}`
        document.getElementById('salvar').setAttribute('existe', 'false')
    }
    let nome = document.getElementById('campo-nome').value
    let email = document.getElementById('campo-email').value
    let cep = document.getElementById('campo-cep').value
    let rua = document.getElementById('campo-rua').value
    let numero = document.getElementById('campo-num').value
    let complemento = document.getElementById('campo-comp').value
    let cidade = document.getElementById('campo-cidade').value
    let estado = document.getElementById('campo-estado').value
    let data = {
        id,
        nome,
        email,
        cep,
        rua,
        numero,
        complemento,
        cidade,
        estado
    };
    let convertData = JSON.stringify(data);
    localStorage.setItem(`client${id}`, convertData)
    preencheTabelaCliente()
    document.getElementById('campo-nome').value =''
    document.getElementById('campo-email').value=''
    document.getElementById('campo-cep').value=''
    document.getElementById('campo-rua').value=''
    document.getElementById('campo-num').value=''
    document.getElementById('campo-comp').value=''
    document.getElementById('campo-cidade').value=''
    document.getElementById('campo-estado').value=''
})

function preencheTabelaCliente(){
    const tabela = document.getElementById('itens-tabela-clientes')
    tabela.innerHTML = ''
    for (let id=1; id<=localStorage.length; id++){
        let linha = localStorage.getItem(`clientLALC${id}`)
        if (linha != null){
            let linhaTratada = JSON.parse(linha)    
            tabela.innerHTML += `<tr onclick="atualizarCliente(${id})"><th>${linhaTratada.id}</th><th>${linhaTratada.nome}</th><th>${linhaTratada.email}</th></tr>`
        }
    }
}

function atualizarCliente(id){
    const botao = document.getElementById('salvar')
    botao.setAttribute('existe', 'true')
    const cliente = localStorage.getItem(`clientLALC${id}`)
    const clienteTratado = JSON.parse(cliente)

    let inputNome = document.getElementById('campo-nome')
    let inputEmail = document.getElementById('campo-email')
    let inputCep = document.getElementById('campo-cep')
    let inputRua = document.getElementById('campo-rua')
    let inputNumero = document.getElementById('campo-num')
    let inputComplemento = document.getElementById('campo-comp')
    let inputCidade = document.getElementById('campo-cidade')
    let inputEstado = document.getElementById('campo-estado')
    let inputIdentificador = document.getElementById('salvar')
    inputNome.value = clienteTratado.nome
    inputEmail.value = clienteTratado.email
    inputCep.value = clienteTratado.cep
    inputRua.value = clienteTratado.rua
    inputNumero.value = clienteTratado.numero
    inputComplemento.value = clienteTratado.complemento
    inputCidade.value = clienteTratado.cidade
    inputEstado.value = clienteTratado.estado
    inputIdentificador.setAttribute('cliente', `${id}`)



}
