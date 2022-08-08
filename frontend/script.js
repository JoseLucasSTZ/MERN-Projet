let inputSenha = window.document.getElementById('senha')
let inputNome = window.document.getElementById('Nome')
let buttonEnviar = window.document.getElementById('enviar')
let main = window.document.getElementById('main')
let usuarios = []

function dados() {
    let usuario ={}
    usuario.nome = inputNome.value
    usuario.senha = inputSenha.value
    usuarios.push(usuario)
    console.log(usuarios)
}

function verificarLista(){
    let resultado = document.createElement('section')
    for(let i = 1; i < usuarios.length; i++) {
        resultado.innerHTML += `<li> Usuário de nome: ${usuarios[i].nome}, cadastrado </li>`
    }
    main.appendChild(resultado)
}

function consultar() {
    let inputConsulta = window.document.getElementById('consultaNome')
    let resultado = document.createElement('section')
    let consulta = inputConsulta.value
    console.log(consulta)
    for(let i= 1; i<usuarios.length; i++){
        if(consulta==usuarios[i].nome){
            resultado.innerHTML += `<li> usuario ${usuarios[i].nome} encontrado na posição ${i} </li>`   
        }
    main.appendChild(resultado)
    }
}

