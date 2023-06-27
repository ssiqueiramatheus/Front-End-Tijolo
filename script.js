const formulario = document.querySelector("form");

const InomeCompleto = document.querySelector(".nomeCompleto");
const Iuser = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

function cadastrar () {
    fetch("http://localhost:8081/usuarios",
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome_completo: InomeCompleto.value,
            nome: Iuser.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itel.value
        })
    })
    .then(function (res) { console.log(res)})
    .body(function (res) { console.log(res)})
    
};

function limpar () {
    InomeCompleto.value = "";
    Iuser.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Itel.value = "";
};



formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    limpar();

});